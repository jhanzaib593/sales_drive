import { Outlet } from "react-router-dom";
import "./index.css";
import Header from "../header";
const Layout = () => {
  return (
    <>
      <div style={{ backgroundColor: "white" }}></div>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
