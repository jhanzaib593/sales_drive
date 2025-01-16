import { Col, Row } from "antd";
import React from "react";
import logo from "../../assets/img/logo (2).jpeg";
import "./index.css";

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
          <Row style={{ padding: "4rem 0" }}>
            <Col span={8} xs={24} sm={24} md={8} lg={8}>
              <img src={logo} alt="" width={150} height={100} />
              <p
                className="font_family"
                style={{
                  color: "rgb(156, 163, 175)",
                  fontWeight: 400,
                  fontSize: 18,
                }}
              >
                Growing Your Business Is Our Callings
              </p>
            </Col>
            <Col span={8} xs={24} sm={24} md={8} lg={8}>
              <ul className="foot_meau">
                <li>Home</li>
                <li>Company</li>
                <li>Services</li>
                <li>Add Recipe</li>
                <li>Blog</li>
                <li>About us</li>
              </ul>
            </Col>
            <Col span={8} xs={24} sm={24} md={8} lg={8}>
              <ul className="foot_contact">
                <li>
                  <span style={{ fontWeight: "bolder", fontSize: 18 }}>
                    Tel:{" "}
                  </span>
                  <a href="tel:+92333333333">+92 33333 3333</a>
                </li>
                <li>
                  <span style={{ fontWeight: "bolder", fontSize: 18 }}>
                    Email:
                  </span>
                  <a href="mailto:sales@gmail.com"> sales@gmail.com</a>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
