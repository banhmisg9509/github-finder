import { fetchUsers, fetchUser, fetchUserRepos } from 'api';
import React, { useReducer } from 'react';
import {
  SEARCH_USERS,
  SET_LOADING,
  FETCH_USER,
  FETCH_REPOS,
  CLEAR_USERS
} from 'types';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';

const GithubState = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const searchUsers = async (searchText) => {
    setLoading();
    const users = await fetchUsers(searchText);
    dispatch({ type: SEARCH_USERS, payload: users });
  };

  const getUser = async (username) => {
    setLoading();
    const user = await fetchUser(username);
    dispatch({ type: FETCH_USER, payload: user });
  };

  const getUserRepos = async (username) => {
    setLoading();
    const repos = await fetchUserRepos(username);
    dispatch({ type: FETCH_REPOS, payload: repos });
  };

  const clearUsers = () => {
    dispatch({ type: CLEAR_USERS })
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        getUser,
        getUserRepos,
        clearUsers
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubState;
