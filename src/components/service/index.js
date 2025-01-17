import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import "./index.css";
import { Scrolling } from "react-scrolling";

function Service() {
  const [products, setProducts] = useState([]);
  // const url = "/services.json";
  const url = "https://api.jsonbin.io/b/60f3c4b4a917050205c0b8d6";
  async function getProducts() {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const text = await response.text();
      const data = JSON.parse(text);

      setProducts(data.allServiceData);
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

        <Row justify={"center"}>
          {Array.isArray(products) &&
            products.map((service, index) => {
              return (
                <Col span={8} xs={24} sm={24} md={12} lg={8} key={index}>
                  <Scrolling
                    animate="fade-up"
                    transition={{ easing: "ease-in", delay: 10 }}
                  >
                    <div className="ser_pro">
                      <img
                        src={service.img}
                        alt={service.name}
                        width={280}
                        height={280}
                      />
                      <h2
                        className="font_family"
                        style={{ fontWeight: 400, fontSize: 20 }}
                      >
                        {service.name}
                      </h2>
                    </div>
                  </Scrolling>
                </Col>
              );
            })}
        </Row>
      </div>
    </div>
  );
}

export default Service;
