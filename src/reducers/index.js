import { combineReducers } from 'redux';
import {goalsReducers, goalsHasErrored, goalsIsLoading, goals} from './goalsReducer';

const rootReducer = combineReducers({
  goals,
  goalsHasErrored,
  goalsIsLoading
});

export default rootReducer;