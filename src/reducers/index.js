import { combineReducers } from 'redux';
import authReducer from './authReducer';
import bankingReducer from './bankingReducer';
import postsReducer from './postsReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  banking: bankingReducer,
  posts: postsReducer,
});
