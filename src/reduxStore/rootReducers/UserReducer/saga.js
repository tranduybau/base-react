/* eslint-disable no-unused-vars */
import {
  takeLatest,
  call,
  put,
  all,
} from 'redux-saga/effects';

import { SET_AUTHENTICATION } from './constants';
import { setAuthentication } from './actions';

function* setAuthenticationTask({ payload }) { // eslint-disable-line
  try {
    // const [{ results }] = yield all([
    //   call([], payload),
    // ]);

    const results = {
      userInfo: {
        name: 'Tran Duy Bau',
      },
      uuid: '123123123123313123',
    };

    yield put(setAuthentication.success(results));
  } catch (error) {
    yield put(setAuthentication.failure(error));
  }
}

export default [takeLatest(SET_AUTHENTICATION.REQUEST, setAuthenticationTask)];
