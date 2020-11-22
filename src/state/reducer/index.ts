import { State } from '../InitialState';
import { Action, ActionTypes } from '../Actions';
import { FormReducer } from './FormReducer';
import { ListSearchCityReducer } from './ListSearchCityReducer';
import { ListWeatherByCityReducer } from './ListWeatherByCityReducer';

export const stateReducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionTypes.FORM:
      return FormReducer.reduce(state, action);
    case ActionTypes.WEATHER_API:
      return ListWeatherByCityReducer.reduce(state, action);
    case ActionTypes.LOCATION_API:
      return ListSearchCityReducer.reduce(state, action);
    default:
      return { ...state };
  }
};
