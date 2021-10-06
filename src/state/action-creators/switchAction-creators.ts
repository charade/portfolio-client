import { Dispatch } from 'redux';
import { SwitchAboutSectionsAction } from '../actions/index';

export const switchSection = (section : string) => {
    return (dispatch : Dispatch) => {
        dispatch({
            type : SwitchAboutSectionsAction.SWITCH,
            payload : section
        })
    }
}