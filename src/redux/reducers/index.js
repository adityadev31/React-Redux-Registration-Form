import pageNumReducer from './pageNumReducer';
import userDataReducer from './userDataReducer'
import { combineReducers } from 'redux';

const reducers = combineReducers({
   pageNumber: pageNumReducer,
   userData: userDataReducer
});

export default reducers;