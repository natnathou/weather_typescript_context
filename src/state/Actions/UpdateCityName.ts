import { Action, ActionTypes, WeatherApiActions } from '.';

export const updateCityName = (name: string): Action => {
  return {
    type: ActionTypes.WEATHER_API,
    action: WeatherApiActions.UPDATE_CITY_NAME,
    payload: name,
  };
};
