import { createSlice } from "@reduxjs/toolkit";

const initialSettingState = {
  isDarkMode: true,
  colors: { darkColor: "none", lightColor: "none" },
  headerTxt: "website",
  footerTxt: "2022",
};

const settingSlice = createSlice({
  name: "setting",
  initialState: initialSettingState,
  reducers: {
    toggleDarkMode(state, action) {
      state.isDarkMode = action.payload;
    },
    changeHeader(state, action) {
      state.headerTxt = action.payload;
    },
    changeFooter(state, action) {
      state.footerTxt = action.payload;
    },
    changeDarkColor(state, action) {
      state.colors.darkColor = action.payload;
    },
    changeLightColor(state, action) {
      state.colors.lightColor = action.payload;
    },
  },
});

export const settingActions = settingSlice.actions;
export default settingSlice.reducer;
