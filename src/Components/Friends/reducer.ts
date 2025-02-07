import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    friends: [],
};
const friendsSlice = createSlice({
    name: "friends",
    initialState,
    reducers: {
        setFriends(state, action) {
            state.friends = action.payload;
        },
        addFriend(state, { payload: friend }) {
            state.friends = [...state.friends, friend] as any;
        },
        removeFriend(state, { payload: friend }) {
            state.friends = state.friends.filter((otherFriend: any) => friend !== otherFriend);
        },
    },
});
export const { setFriends, addFriend, removeFriend } = friendsSlice.actions;
export default friendsSlice.reducer;