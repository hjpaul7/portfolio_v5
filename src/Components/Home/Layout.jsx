import React from "react";
import { Row, Col } from "antd";
import SideNav from "./SideNav";
import About from "../About/About";
import Works from "../Works/Works";
import useViewport from "../Hooks/useViewport";

const Layout = () => {
  const { width } = useViewport();
  const breakpoint = 768;

  const mobileVisible = () => {
    return (
      // <Row justify="start">
      // <Col span={8}>
      //   <SideNav />
      // </Col>
      // <Col span={10} offset={1}>
      <Row justify="center">
        <Col span={20}>
          <About />
          <Works />
        </Col>
      </Row>
      //   </Col>
      // </Row>
    );
  };

  const mobileHidden = () => {
    return (
      <Row justify="start">
        <Col span={8}>
          <SideNav />
        </Col>
        <Col span={10} offset={1}>
          <About />
          <Works />
        </Col>
      </Row>
    );
  };

  return (
    <div>{width < breakpoint ? mobileVisible() : mobileHidden()}</div>
    // <Row justify="start">
    //   <Col span={8}>
    //     <SideNav />
    //   </Col>
    //   <Col span={10} offset={1}>
    //     <About />
    //     <Works />
    //   </Col>
    // </Row>
  );
};

export default Layout;
