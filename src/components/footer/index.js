import { Col, Row } from "antd";
import React from "react";
import logo from "../../assets/img/footer (1).png";
import "./index.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div
        className="bg_color"
        style={{
          padding: "2em 0",
          backgroundColor: "#070654",
        }}
      >
        <div className="container">
          <Row style={{ padding: "1rem 0", textAlign: "center" }}>
            <Col
              span={24}
              xs={24}
              sm={24}
              md={24}
              lg={24}
              style={{ padding: "1em 0" }}
            >
              <img src={logo} alt="" width={125} height={110} />
              <p
                className="font_family"
                style={{
                  color: "rgb(156, 163, 175)",
                  fontWeight: 400,
                  fontSize: 18,
                  padding: "1em 0",
                }}
              >
                Growing Your Business Is Our Callings
              </p>
            </Col>
            {/* <Col
              span={8}
              xs={24}
              sm={24}
              md={8}
              lg={8}
              style={{ margin: "auto" }}
            >
              <ul className="foot_meau">
                <li>
                  <Link to="/"> Home</Link>
                </li>
                <li>
                  <Link to="/underconstruction"> Company </Link>
                </li>
                <li>
                  <Link to="/underconstruction"> Services</Link>
                </li>
                <li>
                  <Link to="/underconstruction"> About us</Link>
                </li>
              </ul>
            </Col> */}
            <Col
              span={24}
              xs={24}
              sm={24}
              md={24}
              lg={24}
              style={{ margin: "auto" }}
            >
              <ul className="foot_contact" style={{ padding: "1em 0" }}>
                <li>
                  <span style={{ fontWeight: "bolder", fontSize: 18 }}>
                    Tel:
                  </span>
                  <a href="tel:+923320350817">+92 332 0350817</a>
                </li>
                <li>
                  <span style={{ fontWeight: "bolder", fontSize: 18 }}>
                    Email:
                  </span>
                  <a href="mailto:hr@two-collars.com"> hr@two-collars.com</a>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </div>
      <div className="copy_right">
        <p
          className="font_family"
          style={{
            color: "white",
            fontWeight: 400,
            fontSize: 16,
            padding: "10px 0",
          }}
        >
          © 2025 Two Collars. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
