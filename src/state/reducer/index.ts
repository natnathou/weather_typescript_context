import { State } from '../InitialState';
import { Action, ActionTypes } from '../Actions';
import { FormReducer } from './FormReducer';
import { ListSearchCityReducer } from './ListSearchCityReducer';
import { WeatherReducer } from './WeatherReducer';

export const stateReducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionTypes.FORM:
      return FormReducer.reduce(state, action);
    case ActionTypes.WEATHER_API:
      return WeatherReducer.reduce(state, action);
    case ActionTypes.LOCATION_API:
      return ListSearchCityReducer.reduce(state, action);
    default:
      return { ...state };
  }
};
