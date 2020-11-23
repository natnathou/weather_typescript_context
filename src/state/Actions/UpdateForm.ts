import { ActionTypes, FormActions } from './index';

export interface UpdateFormAction {
  type: ActionTypes.FORM;
  action: FormActions.UPDATE_FORM;
  payload: string;
}

export const updateForm = (value: string): UpdateFormAction => {
  return {
    type: ActionTypes.FORM,
    action: FormActions.UPDATE_FORM,
    payload: value,
  };
};
