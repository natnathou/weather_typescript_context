export * from './UpdateForm';
export * from './ApiRequest';

export enum ActionTypes {
  FORM = 'FORM',
  API = 'API',
}

export enum FormActions {
  UPDATE_FORM = 'UPDATE_FORM',
}

export enum ApiActions {
  FETCH_API = 'FETCH_API',
}

type MainAction = FormActions | ApiActions;

export interface Action {
  type: ActionTypes;
  action: MainAction;
  payload?: any;
}
