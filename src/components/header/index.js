import { Button, Col, Drawer, Dropdown, Row, Space, Menu } from "antd";
import "./index.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/logo (2).png";
import { useState } from "react";
import {
  MenuFoldOutlined,
  DownOutlined,
  SmileOutlined,
} from "@ant-design/icons";

const Header = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const items = [
    {
      key: "1",
      label: (
        <NavLink rel="noopener noreferrer" to="/">
          OUR STORY
        </NavLink>
      ),
    },
  ];
  const service = [
    {
      key: "2",
      label: "FOCUS",
      children: [
        {
          key: "2-1",
          label: (
            <NavLink rel="noopener noreferrer" to="/">
              Agile Teams
            </NavLink>
          ),
        },
      ],
    },
  ];
  return (
    <>
      <Row style={{ paddingTop: 10 }}>
        <Col span={6} className="logo">
          <img src={logo} alt="" width={100} height={33} />
        </Col>
        <Col span={10}>
          <div className="nav">
            {/* <Dropdown
              menu={{
                items,
              }}
            >
              <a href="" onClick={(e) => e.preventDefault()}>
                <Space>
                  Company
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
            <Dropdown
              menu={{
                service,
              }}
            >
              <a href="" onClick={(e) => e.preventDefault()}>
                <Space>
                  Services
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown> */}
            <NavLink className="nav_link">Company</NavLink>
            <NavLink className="nav_link">Services</NavLink>
            <NavLink className="nav_link">Add Recipe</NavLink>

            <NavLink className="nav_link">blog</NavLink>
            <NavLink className="nav_link">About us</NavLink>
          </div>
        </Col>
        <Col span={6} className="h_btn">
          <Button className="h_btn1">Log in</Button>
          <Button className="h_btn2">Sign up</Button>
        </Col>
        <Col span={6} className="h_drawer">
          <MenuFoldOutlined onClick={showDrawer} />
          <Drawer onClose={onClose} open={open}>
            <div className="nav_d">
              <NavLink className="nav_link nav_link_d">Home</NavLink>
              <NavLink className="nav_link nav_link_d">Recipe</NavLink>
              <NavLink className="nav_link nav_link_d">Company</NavLink>
              <NavLink className="nav_link nav_link_d">Services</NavLink>
              <NavLink className="nav_link nav_link_d">Add Recipe</NavLink>
              <NavLink className="nav_link nav_link_d">blog</NavLink>
              <NavLink className="nav_link nav_link_d">About us</NavLink>
            </div>
          </Drawer>
        </Col>
      </Row>
    </>
  );
};
export default Header;
