import { Button, Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import "./index.css";
import { DoubleRightOutlined } from "@ant-design/icons";
import { Scrolling } from "react-scrolling";

function Project() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    try {
      const response = await fetch("/services.json");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const text = await response.text();
      const data = JSON.parse(text);

      setProducts(data.allprojuctData);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);
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
          </p>
        </Scrolling>
        <Row style={{ padding: "4rem 0" }}>
          {Array.isArray(products) &&
            products.map((service, index) => {
              return (
                <Col span={8} xs={24} sm={24} md={12} lg={8} key={index}>
                  <Scrolling
                    animate="fade-up"
                    transition={{ easing: "ease-in", delay: 10 }}
                  >
                    <div className="prject">
                      <img
                        src={service.img}
                        alt={service.alt}
                        width={"100%"}
                        height={280}
                        className={service.class ? service.class : ""}
                      />
                      <h2
                        className="font_family"
                        style={{ fontWeight: 400, fontSize: 20 }}
                      >
                        {service.name}
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
                        {service.source}
                      </p>
                    </div>
                  </Scrolling>
                </Col>
              );
            })}
        </Row>
        {/* <Scrolling
          animate="zoom-in"
          transition={{ easing: "ease-in", delay: 10 }}
        > */}
        {/* <Button
          className="all_project font_family"
          style={{ width: 220, fontWeight: 600, height: 60 }}
        >
          See More
          <DoubleRightOutlined />
        </Button> */}
        {/* </Scrolling> */}
      </div>
    </div>
  );
}

export default Project;
