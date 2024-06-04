import { Col, Row } from "antd";
import React from "react";
import "./index.css";
import Communicative from "../../assets/img/Communicative.png";
import Collaborative from "../../assets/img/Collaborative.png";
import Management from "../../assets/img/Management.png";
import Favourite from "../../assets/img/Favourite.png";
import { Scrolling } from "react-scrolling";

function Offers() {
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
            Why Choose Us
          </h1>
          <p
            className="font_family"
            style={{ color: "rgb(156 163 175)", fontWeight: 400, fontSize: 20 }}
          >
            Why you should choose us to handle your project.
          </p>
        </Scrolling>
        <Row style={{ padding: "4rem 0" }}>
          <Col
            span={12}
            xs={24}
            sm={24}
            md={12}
            lg={12}
            style={{ padding: 20 }}
          >
            <Scrolling
              animate="fade-up"
              transition={{ easing: "ease-in", delay: 10 }}
            >
              <div className="offers_card">
                <div className="card_up">
                  <img
                    src={Communicative}
                    alt="Communicative"
                    width={"80%"}
                    height={"80%"}
                  />
                </div>
                <div className="card_down">
                  <h1
                    className="font_family font_color"
                    style={{ fontWeight: 500, fontSize: 24 }}
                  >
                    Communicative
                  </h1>
                  <p
                    className="font_family"
                    style={{
                      color: "rgb(156 163 175)",
                      fontWeight: 400,
                    }}
                  >
                    We communicate our project ideas and progress to make it
                    clear.
                  </p>
                </div>
              </div>
            </Scrolling>
          </Col>
          <Col
            span={12}
            xs={24}
            sm={24}
            md={12}
            lg={12}
            style={{ padding: 20 }}
            className="off_cart_2"
          >
            <Scrolling
              animate="fade-up"
              transition={{ easing: "ease-in", delay: 10 }}
            >
              <div className="offers_card">
                <div className="card_up">
                  <img
                    src={Collaborative}
                    alt="Communicative"
                    width={"80%"}
                    height={"80%"}
                  />
                </div>
                <div className="card_down">
                  <h1
                    className="font_family font_color"
                    style={{ fontWeight: 500, fontSize: 24 }}
                  >
                    Collaborative
                  </h1>
                  <p
                    className="font_family"
                    style={{
                      color: "rgb(156 163 175)",
                      fontWeight: 400,
                    }}
                  >
                    Our team are very collaborative to make our project done
                    well.
                  </p>
                </div>
              </div>
            </Scrolling>
          </Col>
          <Col
            span={12}
            xs={24}
            sm={24}
            md={12}
            lg={12}
            style={{ padding: "0px 20px" }}
            className="off_cart_3"
          >
            <Scrolling
              animate="fade-up"
              transition={{ easing: "ease-in", delay: 10 }}
            >
              <div className="offers_card">
                <div className="card_up">
                  <img
                    src={Management}
                    alt="Communicative"
                    width={"80%"}
                    height={"80%"}
                  />
                </div>
                <div className="card_down">
                  <h1
                    className="font_family font_color"
                    style={{ fontWeight: 500, fontSize: 24 }}
                  >
                    Management
                  </h1>
                  <p
                    className="font_family"
                    style={{
                      color: "rgb(156 163 175)",
                      fontWeight: 400,
                    }}
                  >
                    We manage our project properly to make our project done
                    well.
                  </p>
                </div>
              </div>
            </Scrolling>
          </Col>
          <Col
            span={12}
            xs={24}
            sm={24}
            md={12}
            lg={12}
            style={{ padding: 20 }}
            className="off_cart_4"
          >
            <Scrolling
              animate="fade-up"
              transition={{ easing: "ease-in", delay: 10 }}
            >
              <div className="offers_card">
                <div className="card_up">
                  <img
                    src={Favourite}
                    alt="Communicative"
                    width={"80%"}
                    height={"80%"}
                  />
                </div>
                <div className="card_down">
                  <h1
                    className="font_family font_color"
                    style={{ fontWeight: 500, fontSize: 24 }}
                  >
                    Favourite
                  </h1>
                  <p
                    className="font_family"
                    style={{
                      color: "rgb(156 163 175)",
                      fontWeight: 400,
                    }}
                  >
                    We've did so many project and all of our client love it.
                  </p>
                </div>
              </div>
            </Scrolling>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Offers;
