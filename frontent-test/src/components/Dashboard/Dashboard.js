import React, { useContext, useEffect, useState } from "react";
import { Col, Layout, Modal, Row } from "antd";
import "../../css/dashboard.css";
import {
  FileAddOutlined,
  PoweroffOutlined,
  ToolOutlined,
} from "@ant-design/icons";

import TablaTools from "./TablaTools";
import ModalEdit from "./ModalEdit";
import ModalDelete from "./ModalDelete";
import ModalCreate from "./ModalCreate";

const { Header, Sider, Content } = Layout;

const Dashboard = () => {
  const [productId, setProductId] = useState();
  const [modalEditShow, setModalEditShow] = useState(false);
  const [modalDeleteShow, setModalDeleteShow] = useState(false);
  const [modalCreateShow, setModalCreateShow] = useState(false);

  return (
    <>
      <ModalCreate
        modalCreateShow={modalCreateShow}
        setModalCreateShow={(e) => setModalCreateShow(e)}
      />

      <ModalEdit
        productId={productId}
        modalEditShow={modalEditShow}
        setModalEditShow={(e) => setModalEditShow(e)}
      />

      <ModalDelete
        productId={productId}
        setModalDeleteShow={(e) => setModalDeleteShow(e)}
        modalDeleteShow={modalDeleteShow}
      />

      <Layout>
        <Sider>
          <div style={{ paddingTop: "30px" }}>
            <a>
              <Row justify="space-evenly">
                <Col span={6}>
                  <div style={{ fontSize: "30px" }}>
                    <ToolOutlined
                      style={{ color: "#e7ab3c", paddingLeft: "30%" }}
                    />
                  </div>
                </Col>
                <Col span={6}>
                  <h3
                    style={{
                      color: "white",
                      paddingTop: "10%",
                      paddingLeft: "10%",
                    }}
                  >
                    Crud
                  </h3>
                </Col>
              </Row>
            </a>
          </div>

          <div style={{ paddingTop: "30px" }}>
            <a onClick={() => setModalCreateShow(true)}>
              <Row justify="space-evenly">
                <Col span={6}>
                  <div style={{ fontSize: "30px" }}>
                    <FileAddOutlined
                      style={{ color: "#e7ab3c", paddingLeft: "30%" }}
                    />
                  </div>
                </Col>
                <Col span={6}>
                  <h3
                    style={{
                      color: "white",
                      paddingTop: "5%",
                      paddingLeft: "10%",
                    }}
                  >
                    Create product
                  </h3>
                </Col>
              </Row>
            </a>
          </div>

          <div style={{ paddingTop: "30px" }}>
            <a
              onClick={() => {
                localStorage.removeItem("jwt");
                window.location.href = "/";
              }}
            >
              <Row justify="space-evenly">
                <Col span={6}>
                  <div style={{ fontSize: "30px" }}>
                    <PoweroffOutlined
                      style={{ color: "#e7ab3c", paddingLeft: "30%" }}
                    />
                  </div>
                </Col>
                <Col span={6}>
                  <h3
                    style={{
                      color: "white",
                      paddingTop: "10%",
                      paddingLeft: "10%",
                    }}
                  >
                    Logout
                  </h3>
                </Col>
              </Row>
            </a>
          </div>
        </Sider>
        <Layout>
          <Header style={{ color: "white", background: "#e7ab3c" }}>
            Admin
          </Header>

          <Content id="container-dashboard">
            <TablaTools
              setProductId={(e) => setProductId(e)}
              setEditModalShow={(e) => setModalEditShow(e)}
              setDeleteModalShow={(e) => setModalDeleteShow(e)}
            />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};
export default Dashboard;
