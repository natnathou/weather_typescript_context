import { State } from '../InitialState';
import { Action, WeatherApiActions, ResponseApiWeather } from '../Actions';

export class ListWeatherByCityReducer {
  static reduce(state: State, action: Action) {
    switch (action.action) {
      case WeatherApiActions.FETCH_API:
        return this.updateList(state, action);
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
          data: { ...state.dataList.data, [data.city.name]: data.list },
          error: action.payload.error,
        },
      };
    } else {
      return {
        ...state,
        dataList: {
          data: {},
          error: action.payload.error,
        },
      };
    }
  }
}
