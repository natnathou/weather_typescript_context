export * from './UpdateForm';
export * from './WeatherApiRequest';
export * from './SearchLocationByCityApi';

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
}

export enum LocationApiAction {
  SEARCH_CITY = 'SEARCH_CITY',
}

type MainAction = FormActions | WeatherApiActions | LocationApiAction;

export interface Action {
  type: ActionTypes;
  action: MainAction;
  payload?: any;
}
