import { createFetchActionTypes } from 'reduxStore/utils';

const CONTEXT = 'AUTHENTICATION';

export const SET_AUTHENTICATION = createFetchActionTypes(
  `${CONTEXT}/INITIALIZE_DATA`,
);

export const RESET_STATE = `${CONTEXT}/RESET_STATE`;
