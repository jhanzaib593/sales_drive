import { Col, Row } from "antd";
import React from "react";
import Web from "../../assets/img/Web.png";
import Mobile from "../../assets/img/Mobile.png";
import Design from "../../assets/img/Design.png";

import "./index.css";
import { Scrolling } from "react-scrolling";
function Service() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "2em 0",
        backgroundColor: "#f9fafb",
      }}
    >
      <div className="container">
        <Scrolling animate="zoom-in">
          <h1
            className="font_family font_color"
            style={{ fontWeight: 700, fontSize: 48 }}
          >
            Our Service
          </h1>
          <p
            className="font_family"
            style={{ color: "rgb(156 163 175)", fontWeight: 400, fontSize: 20 }}
          >
            We are ready to scale up your business with our great service.
          </p>
        </Scrolling>

        <Row>
          <Col span={8} xs={24} sm={24} md={12} lg={8}>
            <Scrolling
              animate="fade-up"
              transition={{ easing: "ease-in", delay: 10 }}
            >
              <div className="ser_pro">
                <img src={Web} alt="Web Development" width={280} height={280} />
                <h2
                  className="font_family"
                  style={{ fontWeight: 400, fontSize: 20 }}
                >
                  Web Development
                </h2>
              </div>
            </Scrolling>
          </Col>

          <Col span={8} xs={24} sm={24} md={12} lg={8}>
            <Scrolling
              animate="fade-up"
              transition={{ easing: "ease-in", delay: 10 }}
            >
              <div className="ser_pro">
                <img
                  src={Mobile}
                  alt="Mobile Development"
                  width={280}
                  height={280}
                />
                <h2
                  className="font_family"
                  style={{ fontWeight: 400, fontSize: 20 }}
                >
                  Mobile Development
                </h2>
              </div>
            </Scrolling>
          </Col>
          <Col span={8} xs={24} sm={24} md={12} lg={8}>
            <Scrolling
              animate="fade-up"
              transition={{ easing: "ease-in", delay: 10 }}
            >
              <div className="ser_pro">
                <img
                  src={Design}
                  alt="UI/UX Design
"
                  width={280}
                  height={280}
                />
                <h2
                  className="font_family"
                  style={{ fontWeight: 400, fontSize: 20 }}
                >
                  UI/UX Design
                </h2>
              </div>
            </Scrolling>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Service;
