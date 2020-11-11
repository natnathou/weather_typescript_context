import { State } from '../InitialState';
import { Action, ActionTypes } from '../Actions';
import { FormReducer } from './FormReducer';

export const stateReducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionTypes.FORM:
      return FormReducer.reduce(state, action);
    default:
      return { ...state };
  }
};
