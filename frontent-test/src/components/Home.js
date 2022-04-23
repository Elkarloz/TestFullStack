import React from "react";
import { Layout, Menu, Row, Col, Divider, Card } from "antd";
import Mycarousel from "./Carousels/IndexCarousel";
import baner1 from "../img/banner-1.jpg";
import baner2 from "../img/banner-2.jpg";
import baner3 from "../img/banner-3.jpg";
import WomenCarosel from "./Carousels/WomenCarousel";
import "antd/dist/antd.css";
import "../css/home.css";
import MenCarousel from "./Carousels/MenCarousel";
import {
  CarOutlined,
  CreditCardOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer } = Layout;
const Home = () => {
  return (
    <Layout className="layout">
      <Header
        style={{ zIndex: 1, width: "100%" }}
        className="headerStyle"
      ></Header>
      <Header
        style={{ position: "fixed", zIndex: 1, width: "100%" }}
        className="headerStyle"
      >
        <div className="logo " />
        <Menu mode="horizontal">
          <Menu.Item key="1">
            <a href="#carousell" style={{ color: "white" }}>
              Home
            </a>
          </Menu.Item>
          <Menu.Item key="2">
            <a href="#women" style={{ color: "white" }}>
              Women's
            </a>
          </Menu.Item>
          <Menu.Item key="3">
            <a href="#men" style={{ color: "white" }}>
              Men's
            </a>
          </Menu.Item>
          <Menu.Item key="4">
            <a href="/login" style={{ color: "white" }}>
              Login
            </a>
          </Menu.Item>
        </Menu>
      </Header>

      <Content>
        <Mycarousel />
        <div className="section">
          <div className="space-in">
            <Row justify="space-between">
              <Col span={5}>
                <img alt="example" src={baner1} width="350px" id="img-baner" />
                <h1>Men's</h1>
              </Col>
              <Col span={5}>
                <img alt="example" src={baner2} width="350px" id="img-baner" />
                <h1>Women's</h1>
              </Col>
              <Col span={5}>
                <img alt="example" src={baner3} width="350px" id="img-baner" />
                <h1>Kid's</h1>
              </Col>
            </Row>
          </div>
          <Divider orientation="left">
            <b>Women's</b>
          </Divider>
          <div id="img-women" />
          <WomenCarosel />
        </div>
        <div className="section">
          <br />
          <Divider orientation="right">
            <b>Men's</b>
          </Divider>
          <div id="img-men" />
          <MenCarousel />

          <Divider orientation="center">
            <b>¡Look at me!</b>
          </Divider>
          <div className="space-in space-in-2">
            <Row justify="space-between">
              <Col span={5}>
                <Card style={{ width: 300 }}>
                  <Row>
                    <Col span={6}>
                      <div style={{ fontSize: "32px" }}>
                        <CreditCardOutlined style={{ color: "#e7ab3c" }} />
                      </div>
                    </Col>
                    <Col span={12}>
                      <b>SECURE PAYMENT</b>
                      <p>Pay 100% secure</p>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col span={5}>
                <Card style={{ width: 300 }}>
                  <Row>
                    <Col span={6}>
                      <div style={{ fontSize: "32px" }}>
                        <ShoppingCartOutlined style={{ color: "#e7ab3c" }} />
                      </div>
                    </Col>
                    <Col span={12}>
                      <b>FREE SHIPPING</b>
                      <p>Make your order fast</p>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col span={5}>
                <Card style={{ width: 300 }}>
                  <Row>
                    <Col span={6}>
                      <div style={{ fontSize: "32px" }}>
                        <CarOutlined style={{ color: "#e7ab3c" }} />
                      </div>
                    </Col>
                    <Col span={12}>
                      <b>DELIVERY ON TIME</b>
                      <p>You wait we deliver</p>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
        <Footer style={{ textAlign: "center" }}>
          Created by: Carlos Roa - Full-Stack-Development-Test ©2022
        </Footer>
      </Content>
    </Layout>
  );
};
export default Home;
