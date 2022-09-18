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
      <div className="m-5">
        color scheme
        <select
          onChange={colorThemeHandler}
          class="  mb-4 form-select"
          aria-label="Disabled select example"
        >
          <option value="light">light</option>
          <option selected value="dark">
            dark
          </option>
        </select>
        <div className=" mb-4 mb-3">
          <label htmlFor="footerTxt" className="form-label">
            Footer Txt
          </label>
          <input
            onChange={footerHandler}
            type="text"
            className="form-control"
            id="footerTxt"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="headerTxt" className="form-label">
            header Txt
          </label>
          <input
            onChange={headerHandler}
            type="text"
            className="form-control"
            id="headerTxt"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="darkColor" className="form-label">
            darkColor
          </label>
          <input
            onChange={darkColorHandler}
            type="text"
            className="form-control"
            id="darkColor"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lightColor" className="form-label">
            lightColor
          </label>
          <input
            onChange={lightColorHandler}
            type="text"
            className="form-control"
            id="lightColor"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Settings;
