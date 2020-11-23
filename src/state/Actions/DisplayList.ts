import { ActionTypes, LocationApiAction } from '.';

export interface DisplayListAction {
  type: ActionTypes.LOCATION_API;
  action: LocationApiAction.DISPLAY_LIST;
  payload: boolean;
}

export const displayList = (display: boolean): DisplayListAction => {
  return {
    type: ActionTypes.LOCATION_API,
    action: LocationApiAction.DISPLAY_LIST,
    payload: display,
  };
};
