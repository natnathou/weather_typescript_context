import { State } from '../InitialState';
import { Action, ActionTypes } from '../Actions';
import { FormReducer } from './FormReducer';
import { ListWeatherByCityReducer } from './ListWeatherByCityReducer';

export const stateReducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionTypes.FORM:
      return FormReducer.reduce(state, action);
    case ActionTypes.API:
      return ListWeatherByCityReducer.reduce(state, action);
    default:
      return { ...state };
  }
};
