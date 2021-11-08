import { LandingEventAction } from "../actions";
/**
 * listenning if user clicked on continue for closing landing
 */
type StateType = {
    active : boolean,
    loading: boolean
}
export type LandingEventActionType = {
    type : string,
    payload  : boolean
}

const DEFAULT = {
    active : false,
    loading : true
};

export const landingEventReducer = (state : StateType = DEFAULT, action: LandingEventActionType) => {
    switch(action.type){
        case LandingEventAction.ACTIVE : 
            return {...state, active : action.payload}
        case LandingEventAction.LOADING : 
            return { ...state, loading: action.payload }
        default : return state;
    }
}