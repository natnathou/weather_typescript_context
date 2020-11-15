import { State } from '../InitialState';
import { Action, ApiActions, ResponseApiWeather } from '../Actions';

export class ListWeatherByCityReducer {
  static reduce(state: State, action: Action) {
    switch (action.action) {
      case ApiActions.FETCH_API:
        return this.updateList(state, action);
      default:
        return { ...state };
    }
  }

  private static updateList(state: State, action: Action) {
    let data: ResponseApiWeather = action.payload.response.data;
    return {
      ...state,
      dataList: { ...state.dataList, [data.city.name]: data.list },
    };
  }
}
