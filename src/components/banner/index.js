import { Button, Col, Row } from "antd";
import React from "react";
import "./index.css";
import Startup from "../../assets/img/Startup.png";
import { RightCircleOutlined } from "@ant-design/icons";
import "animate.css";

function Banner() {
  return (
    <div>
      <Row style={{ padding: "1em 0" }}>
        <Col
          span={10}
          xs={24}
          sm={24}
          md={24}
          lg={10}
          style={{ margin: "auto" }}
        >
          <h1
            className="font_family font_color"
            style={{ fontWeight: 700, fontSize: 64 }}
          >
            Growing Your Business Is Our Calling
          </h1>
          <p
            className="font_family"
            style={{ color: "rgb(156 163 175)", fontWeight: 400, fontSize: 20 }}
          >
            We provide developers & designers using latest technologies to help
            you scale up your business.
          </p>
          <Button
            className="h_btn2 font_family"
            style={{ width: 220, fontWeight: 600, height: 60 }}
          >
            See Our Work
            <RightCircleOutlined className="animate__animated animate__fadeInRight" />
          </Button>
        </Col>
        <Col
          span={14}
          xs={24}
          sm={24}
          md={24}
          lg={14}
          style={{ margin: "auto" }}
        >
          <img src={Startup} alt="Startup" width={"100%"} height={"auto"} />
        </Col>
      </Row>
    </div>
  );
}

export default Banner;
