import actionTypes from './actionTypes';

export const fetchPosts = () => async (dispatch, getState) => {
  dispatch({ type: actionTypes.FETCH_POSTS_REQUEST });
  try {
    const response = await fetch('http://jsonplaceholder.typicode.com/posts');
    const res = await response.json();
    dispatch({
      type: actionTypes.FETCH_POSTS_SUCCESS,
      payload: {
        items: res,
      },
    });
  } catch (error) {
    dispatch({ type: actionTypes.FETCH_POSTS_ERROR, error: error.message });
  }
};
