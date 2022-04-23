import React, { useContext, useEffect, useState } from "react";
import { Form, Input, Modal, Select } from "antd";
import ApiService from "../../Api/Api";

const ModalCreate = ({ setModalCreateShow, modalCreateShow }) => {
  const apiService = new ApiService();

  const body = {
    productName: "",
    productImage: "",
    productPrice: "",
    productCategory: "",
  };

  const [form] = Form.useForm();

  const { Option } = Select;

  const handleOk = async () => {
    setModalCreateShow(false);

    if (
      body.productName !== "" &&
      body.productImage !== "" &&
      body.productPrice !== "" &&
      body.productCategory !== ""
    ) {
      let token = localStorage.getItem("jwt");
      token = token.toString(token);
      const res = await apiService.post(`/product/create`, body, token);

      alert("Product created successfully");
    } else {
      alert("Please fill all the fields");
    }
  };

  const handleCancel = () => {
    setModalCreateShow(false);
  };

  return (
    <>
      <Modal
        title="Basic Modal"
        visible={modalCreateShow}
        onOk={handleOk}
        onCancel={handleCancel}
        forceRender
      >
        <Form form={form}>
          <Form.Item name="productName" rules={[{ required: true }]}>
            <Input
              onChange={(e) => {
                body.productName = e.target.value;
              }}
              placeholder="Product Name"
            />
          </Form.Item>
          <Form.Item name="productPrice" rules={[{ required: true }]}>
            <Input
              onChange={(e) => {
                body.productPrice = e.target.value;
              }}
              placeholder="Product Price"
            />
          </Form.Item>
          <Form.Item name="productImage" rules={[{ required: true }]}>
            <Input
              onChange={(e) => {
                body.productImage = e.target.value;
              }}
              placeholder="Product Image link"
            />
          </Form.Item>
          <Form.Item name="productCategory" rules={[{ required: true }]}>
            <Select
              style={{ width: "100%" }}
              onChange={(e) => {
                body.productCategory = e;
              }}
              placeholder="Select a category"
            >
              <Option value="Men">Men</Option>
              <Option value="Women">Women</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ModalCreate;
