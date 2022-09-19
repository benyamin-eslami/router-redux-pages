import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./features/lists";
import settingReducer from "./features/themeSetting";
import authReducer from "./features/auth";

const store = configureStore({
  reducer: { list: listReducer, settings: settingReducer, auth: authReducer },
});

export default store;
