import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const headerTxt = useSelector((state) => state.settings.headerTxt);
  const navigate = useNavigate();
  const backHandler = () => {
    navigate(-1);
  };
  return (
    <header>
      <button onClick={backHandler}>back</button>
      <h3>
        welcome to my <span>{headerTxt}</span>
      </h3>
      <nav>
        <ul>
          <NavLink to="/list">List</NavLink>
          <NavLink to="/setting">setting</NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
