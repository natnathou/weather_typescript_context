import { State } from '../InitialState';
import { Action, FormActions, UpdateFormAction } from '../Actions';

export class FormReducer {
  static reduce(state: State, action: Action) {
    switch (action.action) {
      case FormActions.UPDATE_FORM:
        return this.updateForm(state, action as UpdateFormAction);
      default:
        return { ...state };
    }
  }

  private static updateForm(state: State, action: UpdateFormAction) {
    return { ...state, formValue: action.payload };
  }
}
