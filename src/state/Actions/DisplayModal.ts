import { ActionTypes, WeatherApiActions } from '.';

export interface DisplayModalAction {
  type: ActionTypes.WEATHER_API;
  action: WeatherApiActions.DISPLAY_MODAL;
  payload: boolean;
}
export const displayModal = (display: boolean): DisplayModalAction => {
  return {
    type: ActionTypes.WEATHER_API,
    action: WeatherApiActions.DISPLAY_MODAL,
    payload: display,
  };
};
