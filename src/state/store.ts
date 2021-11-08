import { loadingReducer, switchAboutSectionsReducer,landingEventReducer  } from './reducers/index';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    loading : loadingReducer,
    section : switchAboutSectionsReducer,
    landingEvent : landingEventReducer
});

export const store = createStore(reducer, applyMiddleware(thunk));

export type ReducerRootStateType = ReturnType<typeof reducer>

