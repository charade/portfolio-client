import { loadingReducer, categoriesReducer,landingEventReducer  } from './reducers/index';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    loading : loadingReducer,
    category : categoriesReducer,
    landingEvent : landingEventReducer
});

export const store = createStore(reducer, applyMiddleware(thunk));

export type ReducerRootStateType = ReturnType<typeof reducer>

