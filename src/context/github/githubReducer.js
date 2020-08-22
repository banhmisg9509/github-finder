import {
  SEARCH_USERS,
  SET_LOADING,
  FETCH_USER,
  FETCH_REPOS,
  CLEAR_USERS
} from 'types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      }
    case FETCH_USER:
      return {
        ...state,
        user: action.payload,
        loading: false
      }
    case FETCH_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false
      }
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      }
    default:
      return state;
  }
}