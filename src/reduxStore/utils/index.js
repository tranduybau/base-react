export const createFetchActionTypes = (type) => ({
  REQUEST: `${type}/REQUEST`,
  SUCCESS: `${type}/SUCCESS`,
  FAILURE: `${type}/FAILURE`,
});

export const createFetchActionCreators = (actionTypes) => ({
  request: (payload) => ({
    type: actionTypes.REQUEST,
    payload,
  }),
  success: (payload) => ({
    type: actionTypes.SUCCESS,
    payload,
  }),
  failure: (payload) => ({
    type: actionTypes.FAILURE,
    payload,
  }),
});

export const createActionCreator = (actionTypes) => (payload) => ({
  type: actionTypes,
  payload,
});
