import React, { useContext, useEffect, useState } from "react";
import { Modal } from "antd";
import ApiService from "../../Api/Api";

const ModalDelete = ({ setModalDeleteShow, productId, modalDeleteShow }) => {
  const apiService = new ApiService();

  const handleOk = async () => {
    setModalDeleteShow(false);
    let token = localStorage.getItem("jwt");
    token = token.toString(token);
    const res = await apiService.delete(
      `/product/delete/${productId._id}`,
      token
    );
    alert("Product deleted");
  };

  const handleCancel = () => {
    setModalDeleteShow(false);
  };

  return (
    <>
      <Modal
        title="Basic Modal"
        visible={modalDeleteShow}
        onOk={handleOk}
        onCancel={handleCancel}
        forceRender
      >
        <p>Are you sure you want to delete this product?</p>
      </Modal>
    </>
  );
};

export default ModalDelete;
