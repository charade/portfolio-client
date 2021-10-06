import { SwitchAboutSectionsAction } from '../actions/index';

type Action = {
    type : string,
    payload : string
};

type StateType = {
    label : string
}

const INITIAL = {label : ''};

export const switchAboutSectionsReducer = (state : StateType = INITIAL, action : Action) =>{
    switch(action.type){
        case SwitchAboutSectionsAction.SWITCH : return {label : action.payload};
        default : return state;
    }
}