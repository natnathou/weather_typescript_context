import { Action, ActionTypes, FormActions } from './index';

export const updateForm = (value: string): Action => {
  return {
    type: ActionTypes.FORM,
    action: FormActions.UPDATE_FORM,
    payload: value,
  };
};
