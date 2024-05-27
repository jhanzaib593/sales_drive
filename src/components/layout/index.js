import { Outlet } from "react-router-dom";
import "./index.css";
import { useSelector } from "react-redux";
import Header from "../header";
const Layout = () => {
  // const user = useSelector((s) => s.user);
  return (
    <>
      <div className="container">
        <Header />
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
