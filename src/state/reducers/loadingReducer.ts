import { LoadingAction } from '../actions/index';

type LoadingActionType = {
    isLoading : boolean
};
type Action = {
    type : string
};

const INITIAL = {isLoading : true};

export const loadingReducer = (state : LoadingActionType = INITIAL, action : Action ) =>{
    switch(action.type){
        case LoadingAction.LOADED : return {isLoading : false};
        default : return state
    }
}

