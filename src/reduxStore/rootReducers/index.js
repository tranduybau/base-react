import { combineReducers } from 'redux';

import UserReducer from './UserReducer';

const RootReducer = combineReducers({
  auth: UserReducer,
});

export default RootReducer;
