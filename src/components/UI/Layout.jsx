import { Fragment } from "react";
import Footer from "../Footer";
import Header from "../Header";

const Layout = (props) => {
  return (
    <Fragment>
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Header />
        {props.children}
        <Footer />
      </div>
    </Fragment>
  );
};

export default Layout;
