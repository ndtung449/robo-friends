import {
  CHANGE_SEARCH_FIELD,
  ROBOTS_REQUEST_PEDING,
  ROBOTS_REQUEST_SUCCESS,
  ROBOTS_REQUEST_FAILED,
} from './constants';

export const setSearchField = (text) => {
  return {
    type: CHANGE_SEARCH_FIELD,
    payload: text
  }
}

export const requestRobots = () => (dispatch) => {
  dispatch({ type: ROBOTS_REQUEST_PEDING });
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => dispatch({ type: ROBOTS_REQUEST_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: ROBOTS_REQUEST_FAILED, payload: error }));
}
