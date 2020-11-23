import { State } from '../InitialState';
import {
  Action,
  DisplayListAction,
  LocationApiAction,
  ResponseLocation,
  SearchLocationByCityApiAction,
} from '../Actions';
import { AxiosResponse } from 'axios';

export class ListSearchCityReducer {
  static reduce(state: State, action: Action) {
    switch (action.action) {
      case LocationApiAction.SEARCH_CITY:
        return this.searchCity(state, action as SearchLocationByCityApiAction);

      case LocationApiAction.DISPLAY_LIST:
        return this.displayList(state, action as DisplayListAction);
      default:
        return { ...state };
    }
  }
  private static searchCity(
    state: State,
    action: SearchLocationByCityApiAction
  ) {
    if (action.payload.response) {
      let results = action.payload.response as AxiosResponse<ResponseLocation>;

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

  private static displayList(state: State, action: DisplayListAction) {
    let display = action.payload;

    return {
      ...state,
      searchCityList: {
        ...state.searchCityList,
        display: display,
      },
    };
  }
}
