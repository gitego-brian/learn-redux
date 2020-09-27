import actionTypes from '../actions/actionTypes';

const initState = {
  items: [],
  loading: false,
  error: null,
};
const postsReducer = (state = initState, { type, payload, error }) => {
  switch (type) {
    case actionTypes.FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        items: payload.items,
        loading: false,
        error: null,
      };
    case actionTypes.FETCH_POSTS_ERROR:
      return {
        ...state,
        loading: false,
        error,
      };
    default:
      return state;
  }
};

export default postsReducer;
