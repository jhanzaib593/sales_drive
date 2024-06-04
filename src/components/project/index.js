import { Button, Col, Row } from "antd";
import React from "react";
import Recruiting from "../../assets/img/Recruiting.png";
import Stream from "../../assets/img/Stream.png";
import Freelance from "../../assets/img/Freelance.png";
import Aura from "../../assets/img/Aura.png";
import Surtido from "../../assets/img/Surtido.png";
import ManagementApp from "../../assets/img/ManagementApp.png";
import "./index.css";
import { DoubleRightOutlined } from "@ant-design/icons";
import { Scrolling } from "react-scrolling";

function Project() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "2em 0",
      }}
    >
      <div className="container">
        <Scrolling animate="zoom-in">
          <h1
            className="font_family font_color"
            style={{ fontWeight: 700, fontSize: 48 }}
          >
            Our Selected Project
          </h1>
          <p
            className="font_family"
            style={{ color: "rgb(156 163 175)", fontWeight: 400, fontSize: 20 }}
          >
            We are ready to scale up your business with our great work result.
          </p>{" "}
        </Scrolling>
        <Row style={{ padding: "4rem 0" }}>
          <Col span={8} xs={24} sm={24} md={12} lg={8}>
            <Scrolling
              animate="fade-up"
              transition={{ easing: "ease-in", delay: 10 }}
            >
              <div className="prject">
                <img
                  src={Recruiting}
                  alt="Recruiting"
                  width={"100%"}
                  height={280}
                />
                <h2
                  className="font_family"
                  style={{ fontWeight: 400, fontSize: 20 }}
                >
                  Recruiting App
                </h2>
                <p
                  className="font_family"
                  style={{
                    color: "rgb(156 163 175)",
                    fontWeight: 400,
                    fontSize: 16,
                    paddingBottom: "1em",
                  }}
                >
                  Mobile Apps
                </p>
              </div>
            </Scrolling>
          </Col>

          <Col span={8} xs={24} sm={24} md={12} lg={8}>
            <Scrolling
              animate="fade-up"
              transition={{ easing: "ease-in", delay: 10 }}
            >
              <div className="prject">
                <img src={Stream} alt="Stream" width={"100%"} height={280} />
                <h2
                  className="font_family"
                  style={{ fontWeight: 400, fontSize: 20 }}
                >
                  Stream+
                </h2>
                <p
                  className="font_family"
                  style={{
                    color: "rgb(156 163 175)",
                    fontWeight: 400,
                    fontSize: 16,
                    paddingBottom: "1em",
                  }}
                >
                  Mobile Apps
                </p>
              </div>
            </Scrolling>
          </Col>

          <Col span={8} xs={24} sm={24} md={12} lg={8}>
            <Scrolling
              animate="fade-up"
              transition={{ easing: "ease-in", delay: 10 }}
            >
              <div className="prject">
                <img
                  src={Freelance}
                  alt="Freelance"
                  width={"100%"}
                  height={280}
                />
                <h2
                  className="font_family"
                  style={{ fontWeight: 400, fontSize: 20 }}
                >
                  Freelance
                </h2>
                <p
                  className="font_family"
                  style={{
                    color: "rgb(156 163 175)",
                    fontWeight: 400,
                    fontSize: 16,
                    paddingBottom: "1em",
                  }}
                >
                  Mobile Apps
                </p>
              </div>
            </Scrolling>
          </Col>

          <Col span={8} xs={24} sm={24} md={12} lg={8}>
            <Scrolling
              animate="fade-up"
              transition={{ easing: "ease-in", delay: 10 }}
            >
              <div className="prject">
                <img src={Aura} alt="Aura" width={"100%"} height={280} />
                <h2
                  className="font_family"
                  style={{ fontWeight: 400, fontSize: 20 }}
                >
                  Aura
                </h2>
                <p
                  className="font_family"
                  style={{
                    color: "rgb(156 163 175)",
                    fontWeight: 400,
                    fontSize: 16,
                    paddingBottom: "1em",
                  }}
                >
                  Website
                </p>
              </div>
            </Scrolling>
          </Col>

          <Col span={8} xs={24} sm={24} md={12} lg={8}>
            <Scrolling
              animate="fade-up"
              transition={{ easing: "ease-in", delay: 10 }}
            >
              <div className="prject">
                <img
                  src={Surtido}
                  alt="Surtido Rico"
                  width={"100%"}
                  height={280}
                />
                <h2
                  className="font_family"
                  style={{ fontWeight: 400, fontSize: 20 }}
                >
                  Surtido Rico
                </h2>
                <p
                  className="font_family"
                  style={{
                    color: "rgb(156 163 175)",
                    fontWeight: 400,
                    fontSize: 16,
                    paddingBottom: "1em",
                  }}
                >
                  Website
                </p>
              </div>
            </Scrolling>
          </Col>

          <Col span={8} xs={24} sm={24} md={12} lg={8}>
            <Scrolling
              animate="fade-up"
              transition={{ easing: "ease-in", delay: 10 }}
            >
              <div className="prject">
                <img
                  src={ManagementApp}
                  alt="Courses Management"
                  width={"100%"}
                  height={280}
                />
                <h2
                  className="font_family"
                  style={{ fontWeight: 400, fontSize: 20 }}
                >
                  Courses Management
                </h2>
                <p
                  className="font_family"
                  style={{
                    color: "rgb(156 163 175)",
                    fontWeight: 400,
                    fontSize: 16,
                    paddingBottom: "1em",
                  }}
                >
                  Website
                </p>
              </div>
            </Scrolling>
          </Col>
        </Row>
        {/* <Scrolling
          animate="zoom-in"
          transition={{ easing: "ease-in", delay: 10 }}
        > */}
        <Button
          className="all_project font_family"
          style={{ width: 220, fontWeight: 600, height: 60 }}
        >
          See More
          <DoubleRightOutlined />
        </Button>
        {/* </Scrolling> */}
      </div>
    </div>
  );
}

export default Project;
