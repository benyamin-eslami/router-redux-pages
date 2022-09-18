import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./features/lists";
import settingReducer from "./features/themeSetting";

const store = configureStore({
  reducer: { list: listReducer, settings: settingReducer },
});

export default store;
