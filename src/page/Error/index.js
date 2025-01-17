import React from "react";
import "./index.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import error404 from "../../assets/img/404-concept.jpg";
import { Link } from "react-router-dom";
import { Button } from "antd";

function Error() {
  return (
    <>
      <Header />

      <div classNam e="container">
        <div className="error-image">
          <img src={error404} alt="404" width={"50%"} height={400} />
          <h1>oOPS! Page not found</h1>

          <p style={{ padding: "2em 0" }}>
            We can’t seem to find the page you are looking for
          </p>
          <Button className="h_btn2">
            <Link to="/">Back To Home</Link>
          </Button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Error;
