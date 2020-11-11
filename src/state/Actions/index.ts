export * from './UpdateForm';

export enum ActionTypes {
  FORM = 'FORM',
}

export enum FormActions {
  UPDATE_FORM = 'UPDATE_FORM',
}

type MainAction = FormActions;

export interface Action {
  type: ActionTypes;
  action: MainAction;
  payload?: any;
}
