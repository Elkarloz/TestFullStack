import React, { useContext, useEffect } from "react";

import { Form, Input, Button, Modal, Select } from "antd";
import ApiService from "../../Api/Api";

const ModalEdit = ({
  setModalEditShow,
  productId,
  modalEditShow,
  setProduct,
}) => {
  const body = {
    productName: "",
    productImage: "",
    productPrice: "",
    productCategory: "",
  };

  const [form] = Form.useForm();

  const { Option } = Select;

  const apiService = new ApiService();

  const handleOk = async () => {
    setModalEditShow(false);

    if (body.productName === "") {
      body.productName = productId.productName;
    }
    if (body.productImage === "") {
      body.productImage = productId.productImage;
    }
    if (body.productPrice === "") {
      body.productPrice = productId.productPrice;
    }
    if (body.productCategory === "") {
      body.productCategory = productId.productCategory;
    }
    let token = localStorage.getItem("jwt");
    token = token.toString(token);
    const res = await apiService.put(
      `/product/update/${productId._id}`,
      body,
      token
    );

    alert("Product updated successfully");
  };

  const handleCancel = () => {
    setModalEditShow(false);
  };

  useEffect(() => {
    if (productId !== undefined) {
      form.setFieldsValue({
        productName: productId.productName,
        productImage: productId.productImage,
        productPrice: productId.productPrice,
        productCategory: productId.productCategory,
      });
    }
  }, [productId]);

  return (
    <>
      <Modal
        title="Basic Modal"
        visible={modalEditShow}
        onOk={handleOk}
        onCancel={handleCancel}
        forceRender
      >
        {productId !== undefined && (
          <Form form={form}>
            <Form.Item name="productName" rules={[{ required: true }]}>
              <Input
                onChange={(e) => {
                  body.productName = e.target.value;
                }}
              />
            </Form.Item>
            <Form.Item name="productPrice" rules={[{ required: true }]}>
              <Input
                onChange={(e) => {
                  body.productPrice = e.target.value;
                }}
              />
            </Form.Item>
            <Form.Item name="productImage" rules={[{ required: true }]}>
              <Input
                onChange={(e) => {
                  body.productImage = e.target.value;
                }}
              />
            </Form.Item>
            <Form.Item name="productCategory" rules={[{ required: true }]}>
              <Select
                style={{ width: 120 }}
                onChange={(e) => {
                  body.productCategory = e;
                }}
              >
                <Option value="Men">Men</Option>
                <Option value="Women">Women</Option>
              </Select>
            </Form.Item>
          </Form>
        )}
      </Modal>
    </>
  );
};

export default ModalEdit;
