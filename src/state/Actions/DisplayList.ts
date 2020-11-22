import { Action, ActionTypes, LocationApiAction } from '.'

export const displayList=(display:boolean): Action =>{
    return {
        type: ActionTypes.LOCATION_API,
        action: LocationApiAction.DISPLAY_LIST,
        payload: display
    }
}