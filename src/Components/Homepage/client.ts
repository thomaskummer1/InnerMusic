import axios from 'axios';
const axiosWithCredentials = axios.create({ withCredentials: true });
export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export const RATINGS_API = `http://localhost:4000/api/ratings`;
export const createRating = async (rating: any) => {
    const response = await axiosWithCredentials.post(`${RATINGS_API}`, rating);
    return response.data;
}
export const getRatingsForUser = async (user: any) => {
    const response = await axiosWithCredentials.get(`${RATINGS_API}/user/${user._id}`);
    return response.data;
}
export const getRatingsForUserID = async (userID: any) => {
    const response = await axiosWithCredentials.get(`${RATINGS_API}/user/${userID}`);
    return response.data;
}
export const getAllRatings = async () => {
    const response = await axiosWithCredentials.get(`${RATINGS_API}`);
    return response.data;
}
export const getAllUsers = async () => {
    const response = await axiosWithCredentials.get(`${REMOTE_SERVER}/api/users`);
    return response.data;
}