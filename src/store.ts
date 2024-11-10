import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./Components/LoginPages/reducer";
const store = configureStore({
  reducer: {
    accountReducer,
  },
});
export default store;