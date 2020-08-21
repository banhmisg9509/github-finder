import axios from 'axios';

const params = {
  client_id: process.env.REACT_APP_GITHUB_CLIENT_ID,
  client_secret: process.env.REACT_APP_GITHUB_CLIENT_SECRET
}

const axiosClient = axios.create({
  baseURL: 'https://api.github.com'
})

axiosClient.interceptors.response.use(response => {
  if (response && response.data) {
    return response.data;
  }
  return response;
})

const fetchUsers = async () => {
  const users = await axiosClient.get('/users', {
    params
  });
  return users;
}

export const findUsers = async (query) => {
  if (!query) return await fetchUsers();

  const { items: users } = await axiosClient.get('/search/users', {
    params: { q: query, ...params }
  });

  return users;
}

export const getUser = async (username) => {
  return await axiosClient.get('/users/' + username, { params });
}

export const getUserRepos = async (username, per_page = 5, sort = 'created:asc') => {
  return await axiosClient.get(`/users/${username}/repos`, {
    params: {
      per_page,
      sort,
      ...params,
    }
  });
};
