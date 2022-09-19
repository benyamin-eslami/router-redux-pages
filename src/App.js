import Settings from "./components/Settings";
import { Fragment } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import EditList from "./components/EditList";
import NewLists from "./components/NewList";
import PeopleLists from "./components/PeopleLists";
import Layout from "./components/UI/Layout";
import { useSelector } from "react-redux";
import Login from "./components/Login";
import UserPanel from "./components/UserPanel";
import AdminPanel from "./components/AdminPanel";

function App() {
  const isDarkMode = useSelector((state) => state.settings.isDarkMode);
  const darkColor = useSelector((state) => state.settings.colors.darkColor);
  const lightColor = useSelector((state) => state.settings.colors.lightColor);

  return (
    <Fragment>
      <div
        style={{ backgroundColor: `${isDarkMode ? darkColor : lightColor}` }}
      >
        <Layout>
          <Routes>
            <Route path="/lists" element={<PeopleLists />} />
            <Route path="/lists/:listId" element={<EditList />} />
            <Route path="/add" element={<NewLists />} />
            <Route path="/setting" element={<Settings />} />
            <Route path="/login" element={<Login />} />
            <Route path="/userpanel" element={<UserPanel />} />
            <Route path="/adminpanel" element={<AdminPanel />} />

            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </Layout>
      </div>
    </Fragment>
  );
}

export default App;
