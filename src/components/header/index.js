// import { Col, Drawer, Row, Affix, Button } from "antd";
import { Col, Row } from "antd";

import "./index.css";
import { Link } from "react-router-dom";
import logo from "../../assets/img/2 (2).png";
import React from "react";
// import { MenuFoldOutlined } from "@ant-design/icons";
// import ModalContact from "../contact/modal";

const Header = () => {
  // const [open, setOpen] = useState(false);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const showDrawer = () => {
  //   setOpen(true);
  // };
  // const onClose = () => {
  //   setOpen(false);
  // };

  // const showModal = () => {
  //   setIsModalOpen(true);
  // };

  // const handleCloseModal = () => {
  //   setIsModalOpen(false);
  // };
  // const [top, setTop] = React.useState(0);
  // console.log(setTop);

  return (
    <>
      {/* <Affix offsetTop={top}> */}
      <div style={{ backgroundColor: "white" }}>
        <div className="container">
          <Row style={{ padding: "12px 0" }}>
            <Col span={24} className="logo">
              <Link to="/">
                <img src={logo} alt="" width={75} height={65} />
              </Link>
            </Col>

            {/* <Col span={12} style={{ margin: "auto" }}>
                <div className="nav">
                  <NavLink to="/underconstruction" className="nav_link">
                    Company
                  </NavLink>
                  <NavLink to="/underconstruction" className="nav_link">
                    Services
                  </NavLink>

                  <NavLink to="/underconstruction" className="nav_link">
                    Blog
                  </NavLink>
                  <NavLink to="/underconstruction" className="nav_link">
                    About us
                  </NavLink>
                </div>
              </Col>
              <Col span={4} className="h_btn" style={{ margin: "auto" }}>
                <Button onClick={showModal} className="h_btn2">
                  Contact Us
                </Button>
              </Col> */}

            {/* <Col span={4} className="h_drawer">
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
              </Col> */}
          </Row>
        </div>
      </div>
      {/* </Affix> */}
      {/* <ModalContact showModal={isModalOpen} handleClose={handleCloseModal} /> */}
    </>
  );
};
export default Header;
