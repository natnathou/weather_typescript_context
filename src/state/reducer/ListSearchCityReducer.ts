import { State } from '../InitialState';
import { Action, LocationApiAction, ResponseLocation } from '../Actions';

export class ListSearchCityReducer {
  static reduce(state: State, action: Action) {
    switch (action.action) {
      case LocationApiAction.SEARCH_CITY:
        return this.searchCity(state, action);
      default:
        return { ...state };
    }
  }
  private static searchCity(state: State, action: Action) {
    if (action.payload.response) {
      let results: ResponseLocation[] = action.payload.response.data;

      return {
        ...state,
        searchCityList: {
          ...state.searchCityList,
          list: {
            ...state.searchCityList.list,
            data: results,
            error: action.payload.error,
          },
          display: true,
        },
      };
    } else {
      return {
        ...state,
        searchCityList: {
          ...state.searchCityList,
          list: { data: [], error: action.payload.error },
          display: false,
        },
      };
    }
  }
}
