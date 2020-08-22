import axios from 'axios';

let githubClientId = process.env.GITHUB_CLIENT_ID;
let gihubClientSecret = process.env.GITHUB_CLIENT_SECRET;
if (process.env.NODE_ENV !== 'production') {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  gihubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
}

const params = {
  client_id: githubClientId,
  client_secret: gihubClientSecret
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


export const fetchUsers = async (query) => {
  if (!query) return await axiosClient.get('/users', {
    params
  });

  const { items: users } = await axiosClient.get('/search/users', {
    params: { q: query, ...params }
  });

  return users;
}

export const fetchUser = async (username) => {
  return await axiosClient.get('/users/' + username, { params });
}

export const fetchUserRepos = async (username, per_page = 5, sort = 'created:asc') => {
  return await axiosClient.get(`/users/${username}/repos`, {
    params: {
      per_page,
      sort,
      ...params,
    }
  });
};
