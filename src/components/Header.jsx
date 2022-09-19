import styles from "./Header.module.css";
import { authActions } from "../store/features/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useSelector, useDispatch } from "react-redux";
const Header = () => {
  const userLogin = useSelector((state) => state.auth.isLogin);
  const dispatch = useDispatch();
  console.log(userLogin);

  const headerTxt = useSelector((state) => state.settings.headerTxt);
  const navigate = useNavigate();
  const backHandler = () => {
    navigate(-1);
  };

  const logoutHanler = () => {
    localStorage.removeItem("auth");
    dispatch(authActions.logout());
  };
  return (
    <header className={styles.header}>
      <Button
        className={styles.btn}
        onClick={backHandler}
        variant="contained"
        startIcon={<ArrowBackIcon />}
      >
        back
      </Button>
      <h3>
        welcome to my <span>{headerTxt}</span>
      </h3>
      <nav>
        {!userLogin && (
          <NavLink
            className={({ isActive }) =>
              isActive ? styles["isActive"] : styles["notActive"]
            }
            to="/login"
          >
            LogIn
          </NavLink>
        )}
        {userLogin && (
          <NavLink
            onClick={logoutHanler}
            className={({ isActive }) =>
              isActive ? styles["isActive"] : styles["notActive"]
            }
            to="/login"
          >
            Logout
          </NavLink>
        )}
        <NavLink
          className={({ isActive }) =>
            isActive ? styles["isActive"] : styles["notActive"]
          }
          to="/lists"
        >
          List
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles["isActive"] : styles["notActive"]
          }
          to="/setting"
        >
          setting
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles["isActive"] : styles["notActive"]
          }
          to="/add"
        >
          add
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
