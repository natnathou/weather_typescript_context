import { State } from '../InitialState';
import {
  Action,
  WeatherApiActions,
  ResponseApiWeather,
  GetWeatherByNameAction,
  GetWeatherByCoordAction,
  DisplayModalAction,
  UpdateCityNameAction,
} from '../Actions';
import { AxiosResponse } from 'axios';

export class WeatherReducer {
  static reduce(state: State, action: Action) {
    switch (action.action) {
      case WeatherApiActions.FETCH_API:
        return this.updateList(state, action as GetWeatherByNameAction);
      case WeatherApiActions.GET_WEATHER_BY_COORD:
        return this.displayCityDetails(
          state,
          action as GetWeatherByCoordAction
        );
      case WeatherApiActions.DISPLAY_MODAL:
        return this.displayModal(state, action as DisplayModalAction);
      case WeatherApiActions.UPDATE_CITY_NAME:
        return this.updateCityName(state, action as UpdateCityNameAction);
      default:
        return { ...state };
    }
  }

  private static updateList(state: State, action: GetWeatherByNameAction) {
    if (action.payload.response) {
      let response = action.payload.response as AxiosResponse<
        ResponseApiWeather
      >;
      return {
        ...state,
        dataList: {
          ...state.dataList,
          data: {
            ...state.dataList.data,
            [response.data.city.name]: {
              prediction: response.data.list,
              city: response.data.city,
            },
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

  private static displayCityDetails(
    state: State,
    action: GetWeatherByCoordAction
  ) {
    if (action.payload.response) {
      let response = action.payload.response as AxiosResponse<
        ResponseApiWeather
      >;
      return {
        ...state,
        cityDetails: {
          ...state.cityDetails,
          details: {
            id: response.data.city.id,
            name: response.data.city.name,
            coord: response.data.city.coord,
          },
          data: response.data.list,
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

  private static displayModal(state: State, action: DisplayModalAction) {
    let display = action.payload;
    return {
      ...state,
      cityDetails: { ...state.cityDetails, display: display },
    };
  }

  private static updateCityName(state: State, action: UpdateCityNameAction) {
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
