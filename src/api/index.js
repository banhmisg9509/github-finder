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

export const searchUsers = async (query) => {
  if (!query) return await fetchUsers();

  const response = await axiosClient.get('/search/users', {
    params: { q: query, ...params }
  });

  return response.items;
}