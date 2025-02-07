import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./Components/LoginPages/reducer";
import friendsReducer from "./Components/Friends/reducer";
const store = configureStore({
  reducer: {
    accountReducer,
    friendsReducer,
  },
});
export default store;