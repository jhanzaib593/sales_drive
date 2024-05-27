import { Button, Col, Modal, Row } from "antd";
import React, { useState } from "react";
import "./index.css";

function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div style={{ padding: "6em 1em" }}>
      <div className="contact contact_color">
        <Row>
          <Col span={16} xs={24} sm={24} md={16} lg={16}>
            <h1
              className="font_family"
              style={{ fontWeight: 700, fontSize: 48, color: "white" }}
            >
              Have an awesome project in mind?
            </h1>
          </Col>
          <Col
            span={8}
            xs={24}
            sm={24}
            md={8}
            lg={8}
            style={{ margin: "auto", textAlign: "center" }}
          >
            <Button
              className="Contact_btn font_family"
              style={{ width: 220, fontWeight: 600, height: 60 }}
              onClick={showModal}
            >
              Lets Discuss!
            </Button>
          </Col>
        </Row>
        <p
          className="font_family"
          style={{
            color: "white",
            fontWeight: 400,
            fontSize: 24,
          }}
        >
          Lets discuss it and make your dream software come true!
        </p>
      </div>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
}

export default Contact;