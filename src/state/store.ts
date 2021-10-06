import { scrollReducer, loadingReducer, switchAboutSectionsReducer  } from './reducers/index';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    scroll : scrollReducer, 
    loading : loadingReducer,
    section : switchAboutSectionsReducer
});

export const store = createStore(reducer, applyMiddleware(thunk));

export type RootStateType = ReturnType<typeof reducer>

