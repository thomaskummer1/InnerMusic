import axios from 'axios';
const axiosWithCredentials = axios.create({ withCredentials: true });
export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export const USERS_API = `http://localhost:4000/api/users`;

export const signin = async (credentials: any) => {
  console.log(credentials);
  const response = await axios.post( `${USERS_API}/signin`, credentials );
  return response.data;
};
export const signup = async (user: any) => {
    const response = await axios.post(`${USERS_API}/signup`, user);
    return response.data;
};
export const updateUser = async (user: any) => {
    const response = await axios.put(`${USERS_API}/${user._id}`, user);
    return response.data;
};
export const profile = async () => {
    const response = await axios.post(`${USERS_API}/profile`);
    return response.data;
};
  