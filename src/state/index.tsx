import { scrollReducer } from './reducers';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const reducer = combineReducers({scroll : scrollReducer});

export const store = createStore(reducer, applyMiddleware(thunk));

export type RootStateType = ReturnType<typeof reducer>

