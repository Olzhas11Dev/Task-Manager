import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { taskReducer } from './taskReducers';

const rootReducer = combineReducers({
  tasks: taskReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
