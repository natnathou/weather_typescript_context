import { ActionTypes, WeatherApiActions } from '.';

export interface UpdateCityNameAction {
  type: ActionTypes.WEATHER_API;
  action: WeatherApiActions.UPDATE_CITY_NAME;
  payload: string;
}

export const updateCityName = (name: string): UpdateCityNameAction => {
  return {
    type: ActionTypes.WEATHER_API,
    action: WeatherApiActions.UPDATE_CITY_NAME,
    payload: name,
  };
};
