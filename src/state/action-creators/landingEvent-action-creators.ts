import { LandingEventActionType } from "../reducers/landingEventReducer";
import { LandingEventAction } from "../actions";
import { Dispatch } from "react";

export const setActive = (bool : boolean) => {
    return (dispatch : Dispatch<LandingEventActionType>) => {
        dispatch({
            type : LandingEventAction.ACTIVE,
            payload : bool
        })
    }
};
export const setLoading = (bool : boolean) => {
    return (dispatch : Dispatch<LandingEventActionType>) => {
        dispatch({
            type : LandingEventAction.LOADING,
            payload : bool
        })
    }
}
