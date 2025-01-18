import { Col, Row } from "antd";
import React from "react";
import logo from "../../assets/img/footer.png";
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
          <Row style={{ padding: "4rem 0" }}>
            <Col span={8} xs={24} sm={24} md={8} lg={8}>
              <img src={logo} alt="" width={120} height={100} />
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
            <Col
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
            </Col>
            <Col
              span={8}
              xs={24}
              sm={24}
              md={8}
              lg={8}
              style={{ margin: "auto" }}
            >
              <ul className="foot_contact">
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
    </footer>
  );
}

export default Footer;
