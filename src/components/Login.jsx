import { Fragment, useRef } from "react";
import { authActions } from "../store/features/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const user = useRef();
  const password = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLocalInfo = localStorage.getItem("auth");
  if (userLocalInfo) {
    if (userLocalInfo.name === "admin") {
      navigate("/adminpanel");
      dispatch(authActions.login());
    }
    if (userLocalInfo.name === "user") {
      navigate("/userpanel");
      dispatch(authActions.login());
    }
  }

  const usersInfo = [
    { name: "admin", user: "admin", password: "admin" },
    { name: "user", user: "user", password: "user" },
  ];

  const formHandler = (e) => {
    console.log("asdas");
    e.preventDefault();
    const userExistInfo = usersInfo.find(
      (info) =>
        info.user === user.current.value &&
        info.password === password.current.value
    );
    if (userExistInfo) {
      localStorage.setItem("auth", JSON.stringify(userExistInfo));
      dispatch(authActions.login());
      console.log(userExistInfo);
      userExistInfo.name === "admin" && navigate("/adminpanel");
      userExistInfo.name === "user" && navigate("/userpanel");
    }
  };
  return (
    <Fragment>
      <form onSubmit={formHandler} className="m-5">
        <div className="form-outline mb-4">
          <input
            ref={user}
            type="text"
            id="form2Example1"
            className="form-control"
          />
          <label className="form-label" htmlFor="form2Example1">
            Email address
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            ref={password}
            type="password"
            id="form2Example2"
            className="form-control"
          />
          <label className="form-label" htmlFor="form2Example2">
            Password
          </label>
        </div>

        <div className="row mb-4">
          <div className="col">
            <a href="#!">Forgot password?</a>
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block mb-4">
          Sign in
        </button>
      </form>
    </Fragment>
  );
};

export default Login;
