import { Fragment } from "react";
import { settingActions } from "../store/features/themeSetting";
import { useDispatch } from "react-redux";

const Settings = () => {
  const dispatch = useDispatch();
  const colorThemeHandler = (e) => {
    const isDarkMode = e.target.value === "dark" ? true : false;
    dispatch(settingActions.toggleDarkMode(isDarkMode));
  };
  const footerHandler = (e) => {
    dispatch(settingActions.changeFooter(e.target.value));
  };
  const headerHandler = (e) => {
    dispatch(settingActions.changeHeader(e.target.value));
  };
  const darkColorHandler = (e) => {
    dispatch(settingActions.changeDarkColor(e.target.value));
  };
  const lightColorHandler = (e) => {
    dispatch(settingActions.changeLightColor(e.target.value));
  };
  return (
    <Fragment>
      <select onChange={colorThemeHandler}>
        <option value="dark">dark</option>
        <option value="light">light</option>
      </select>
      <label htmlFor="footer">footer txt</label>
      <input onChange={footerHandler} id="footer" type="text" />
      <label htmlFor="header">header txt</label>
      <input onChange={headerHandler} id="header" type="text" />
      <label htmlFor="darkColor">dark color</label>
      <input onChange={darkColorHandler} id="darkColor" type="text" />
      <label htmlFor="lightColor">light color</label>
      <input onChange={lightColorHandler} id="lightColor" type="text" />
    </Fragment>
  );
};

export default Settings;
