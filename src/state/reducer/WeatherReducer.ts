import { State } from '../InitialState';
import { Action, WeatherApiActions, ResponseApiWeather } from '../Actions';

export class WeatherReducer {
  static reduce(state: State, action: Action) {
    switch (action.action) {
      case WeatherApiActions.FETCH_API:
        return this.updateList(state, action);
      case WeatherApiActions.GET_WEATHER_BY_COORD:
        return this.displayCityDetails(state, action);
      case WeatherApiActions.DISPLAY_MODAL:
        return this.displayModal(state, action);
      case WeatherApiActions.UPDATE_CITY_NAME:
        return this.updateCityName(state, action);
      default:
        return { ...state };
    }
  }

  private static updateList(state: State, action: Action) {
    if (action.payload.response) {
      let data: ResponseApiWeather = action.payload.response.data;
      return {
        ...state,
        dataList: {
          ...state.dataList,
          data: {
            ...state.dataList.data,
            [data.city.name]: { prediction: data.list, city: data.city },
          },
          error: action.payload.error,
        },
      };
    } else {
      return {
        ...state,
        dataList: {
          ...state.dataList,
          error: action.payload.error,
        },
      };
    }
  }

  private static displayCityDetails(state: State, action: Action) {
    if (action.payload.response) {
      let data: ResponseApiWeather = action.payload.response.data;
      return {
        ...state,
        cityDetails: {
          ...state.cityDetails,
          details: {
            id: data.city.id,
            name: data.city.name,
            coord: data.city.coord,
          },
          data: data.list,
          error: false,
        },
      };
    } else {
      return {
        ...state,
        cityDetails: {
          ...state.cityDetails,
          data: [],
          error: action.payload.error,
        },
      };
    }
  }

  private static displayModal(state: State, action: Action) {
    let display: boolean = action.payload;
    return {
      ...state,
      cityDetails: { ...state.cityDetails, display: display },
    };
  }

  private static updateCityName(state: State, action: Action) {
    let name: string = action.payload;
    return {
      ...state,
      cityDetails: {
        ...state.cityDetails,
        details: { ...state.cityDetails.details, name: name },
      },
    };
  }
}
