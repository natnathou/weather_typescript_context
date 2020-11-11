import { State } from '../InitialState';
import { Action, FormActions } from '../Actions';

export class FormReducer {
  static reduce(state: State, action: Action) {
    switch (action.action) {
      case FormActions.UPDATE_FORM:
        return this.updateForm(state, action);
      default:
        return { ...state };
    }
  }

  private static updateForm(state: State, action: Action) {
    return { ...state, [state.formValue]: action.payload };
  }
}
