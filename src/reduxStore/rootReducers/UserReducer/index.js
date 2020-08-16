import { SET_AUTHENTICATION, RESET_STATE } from './constants';

const initialState = {
  userInfo: {},
  uuid: '',
  isAuthenticated: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_AUTHENTICATION.SUCCESS: {
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
      };
    }

    case RESET_STATE: {
      return initialState;
    }

    default:
      return state;
  }
};
