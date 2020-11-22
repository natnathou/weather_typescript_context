import { State } from '../InitialState';
import { Action, LocationApiAction, ResponseLocation } from '../Actions';
import { AxiosResponse } from 'axios';

export class ListSearchCityReducer {
  static reduce(state: State, action: Action) {
    switch (action.action) {
      case LocationApiAction.SEARCH_CITY:
        return this.searchCity(state, action);

      case LocationApiAction.DISPLAY_LIST:
        return this.displayList(state, action);
      default:
        return { ...state };
    }
  }
  private static searchCity(state: State, action: Action) {
    if (action.payload.response) {
      let results: AxiosResponse<ResponseLocation> = action.payload.response;

      return {
        ...state,
        searchCityList: {
          ...state.searchCityList,
          list: {
            ...state.searchCityList.list,
            data: results.data,
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
          list: { data: { results: [] }, error: action.payload.error },
          display: false,
        },
      };
    }
  }

  private static displayList(state: State, action: Action) {
    let display: boolean = action.payload;

    return {
      ...state,
      searchCityList: {
        ...state.searchCityList,
        display: display,
      },
    };
  }
}
