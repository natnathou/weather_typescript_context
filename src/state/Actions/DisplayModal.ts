import { Action, ActionTypes, LocationApiAction, WeatherApiActions } from '.';

export const displayModal = (display: boolean): Action => {
  return {
    type: ActionTypes.WEATHER_API,
    action: WeatherApiActions.DISPLAY_MODAL,
    payload: display,
  };
};
