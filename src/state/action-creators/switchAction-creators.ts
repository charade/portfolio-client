import { Dispatch } from 'redux';
import { SwitchAboutSectionsAction } from '../actions/index';

type PayloadType = {
    label : string;
    position : number
}
export const switchSection = (args : PayloadType) => {
    return (dispatch : Dispatch) => {
        dispatch({
            type : SwitchAboutSectionsAction.SWITCH,
            payload : args
        })
    }
}