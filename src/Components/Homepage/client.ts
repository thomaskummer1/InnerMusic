import axios from 'axios';
const axiosWithCredentials = axios.create({ withCredentials: true });
export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export const RATINGS_API = `http://localhost:4000/api/ratings`;
export const createRating = async (rating: any) => {
    const response = await axiosWithCredentials.post(`${RATINGS_API}`, rating);
    return response.data;
}
export const deleteRating = async (rating: any) => {
    const response = await axiosWithCredentials.delete(`${RATINGS_API}/${rating._id}`);
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
export const getRatingsByAlbum = async (album: any) => {
    const response = await axiosWithCredentials.get(`${RATINGS_API}/album/${album}`);
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
export const createFriend = async (friend: any) => {
    const response = await axiosWithCredentials.post(`${REMOTE_SERVER}/api/friends`, friend);
    return response.data;
}
export const getFriendsForUser = async (user: any) => {
    const response = await axiosWithCredentials.get(`${REMOTE_SERVER}/api/friends/user/${user._id}`);
    return response.data;
}
export const getFriendsForUserID = async (userId: any) => {
    const response = await axiosWithCredentials.get(`${REMOTE_SERVER}/api/friends/user/${userId}`);
    return response.data;
}
export const deleteFriend = async (friend: any) => {
    const response = await axiosWithCredentials.delete(`${REMOTE_SERVER}/api/friends/${friend._id}`);
    return response.data;
}
