import { Col, Drawer, Row, Affix, Button } from "antd";
import "./index.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/logo (2).jpeg";
import React, { useState } from "react";
import { MenuFoldOutlined } from "@ant-design/icons";
import ModalContact from "../contact/modal";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const [top, setTop] = React.useState(0);
  console.log(setTop);
  return (
    <>
      <Affix offsetTop={top}>
        <div style={{ backgroundColor: "white" }}>
          <div className="container">
            <Row style={{ padding: "12px 0" }}>
              <Col span={8} className="logo">
                <img src={logo} alt="" width={80} height={50} />
              </Col>
              <Col span={12}>
                <div className="nav">
                  <NavLink className="nav_link">Company</NavLink>
                  <NavLink className="nav_link">Services</NavLink>

                  <NavLink className="nav_link">Blog</NavLink>
                  <NavLink className="nav_link">About us</NavLink>
                </div>
              </Col>
              <Col span={4} className="h_btn">
                <Button onClick={showModal} className="h_btn2">
                  Contact Us
                </Button>
                {/* <Button className="h_btn2">Sign up</Button> */}
              </Col>
              <Col span={4} className="h_drawer">
                <MenuFoldOutlined onClick={showDrawer} />
                <Drawer onClose={onClose} open={open}>
                  <div className="nav_d">
                    <NavLink className="nav_link nav_link_d">Home</NavLink>
                    <NavLink className="nav_link nav_link_d">Recipe</NavLink>
                    <NavLink className="nav_link nav_link_d">Company</NavLink>
                    <NavLink className="nav_link nav_link_d">Services</NavLink>
                    <NavLink className="nav_link nav_link_d">Blog</NavLink>
                    <NavLink className="nav_link nav_link_d">About us</NavLink>
                  </div>
                </Drawer>
              </Col>
            </Row>
          </div>
        </div>
      </Affix>
      <ModalContact showModal={isModalOpen} handleClose={handleCloseModal} />
    </>
  );
};
export default Header;
