import actionTypes from '../actions/actionTypes';

const initialState = {
  isLoggedIn: false,
};
const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.TOGGLE_AUTH:
      return {
        ...state,
        isLoggedIn: !state.isLoggedIn,
      };
    default:
      return state;
  }
};

export default authReducer;
