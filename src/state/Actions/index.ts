export * from './UpdateForm';
export * from './WeatherApiRequest';
export * from './SearchLocationByCityApi';
export * from './DisplayList';
export * from './DisplayModal';

export enum ActionTypes {
  FORM = 'FORM',
  WEATHER_API = 'WEATHER_API',
  LOCATION_API = 'LOCATION_API',
}

export enum FormActions {
  UPDATE_FORM = 'UPDATE_FORM',
}

export enum WeatherApiActions {
  FETCH_API = 'FETCH_API',
  GET_WEATHER_BY_COORD = 'GET_WEATHER_BY_COORD',
  DISPLAY_MODAL = 'DISPLAY_MODAL',
}

export enum LocationApiAction {
  SEARCH_CITY = 'SEARCH_CITY',
  DISPLAY_LIST = 'DISPLAY_LIST',
}

type MainAction = FormActions | WeatherApiActions | LocationApiAction;

export interface Action {
  type: ActionTypes;
  action: MainAction;
  payload?: any;
}
