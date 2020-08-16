import { createFetchActionCreators, createActionCreator } from 'reduxStore/utils';

import { SET_AUTHENTICATION, RESET_STATE } from './constants';

export const setAuthentication = createFetchActionCreators(SET_AUTHENTICATION);

export const resetState = createActionCreator(RESET_STATE);
