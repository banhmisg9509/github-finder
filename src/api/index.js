const baseURL = 'https://api.github.com';

const fetchAPI = async (path) => {
  const response = await fetch(baseURL + path);
  const json = await response.json();
  return json;
}


export const fetchUsers = async () => {
  const path = '/users';
  const users = await fetchAPI(path);
  return users;
}