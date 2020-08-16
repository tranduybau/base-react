import { all } from 'redux-saga/effects';

import AuthSaga from './rootReducers/UserReducer/saga';

export default function* rootSaga() {
  yield all([
    ...AuthSaga,
  ]);
}
