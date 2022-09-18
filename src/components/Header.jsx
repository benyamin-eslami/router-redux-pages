import styles from "./Header.module.css";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { useSelector } from "react-redux";
const Header = () => {
  const headerTxt = useSelector((state) => state.settings.headerTxt);
  const navigate = useNavigate();
  const backHandler = () => {
    navigate(-1);
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
