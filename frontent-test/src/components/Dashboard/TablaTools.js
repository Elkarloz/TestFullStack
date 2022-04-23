import { Table, Space } from "antd";
import { useEffect, useState } from "react";
import ApiService from "../../Api/Api";

const TablaTools = ({ setDeleteModalShow, setProductId, setEditModalShow }) => {
  const { Column } = Table;

  const [product, setProduct] = useState();
  const apiService = new ApiService();
  let token = localStorage.getItem("jwt");
  const getProductId = async (id) => {
    const res = await apiService.get(`/product/${id}`, token);
    setProductId(res);
  };
  useEffect(() => {
    const getProduct = async () => {
      const res = await apiService.get("/product/");
      setProduct(res);
    };
    getProduct();
  }, []);

  return (
    <Table
      dataSource={product}
      scroll={{ y: "80vh" }}
      rowKey={(producti) => producti._id}
    >
      <Column title="Name" dataIndex="productName" key="productName" />
      <Column
        title="Image"
        dataIndex="productImage"
        key="productImage"
        render={(item, index) => (
          <img
            src={item}
            alt="productImage"
            width="200px"
            height="300px"
            key={index}
          />
        )}
      />

      <Column title="Price" dataIndex="productPrice" key="productPrice" />
      <Column title="Category" dataIndex="productCategory" key="productPrice" />
      <Column
        title="Action"
        key="action"
        render={(item, index) => (
          <Space size="middle" key={index}>
            <a
              onClick={() => {
                setEditModalShow(true);
                getProductId(item._id);
              }}
            >
              Edit{" "}
            </a>
            <a
              onClick={() => {
                setDeleteModalShow(true);
                getProductId(item._id);
              }}
            >
              Delete
            </a>
          </Space>
        )}
      />
    </Table>
  );
};

export default TablaTools;
