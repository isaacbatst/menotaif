import { createStore, combineReducers } from 'redux';
import stepReducer from './reducers/steps';

const reducers = combineReducers({
  steps: stepReducer
})

const store = createStore(reducers);

export default store;