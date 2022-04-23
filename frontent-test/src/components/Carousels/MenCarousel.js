import { Carousel, Row, Col, Image } from "antd";
import React, { useEffect, useState } from "react";
import ApiService from "../../Api/Api";
import "../../css/WomenCarousel.css";

const MenCarousel = () => {
  const [product, setProduct] = useState([]);
  const apiService = new ApiService();

  useEffect(() => {
    const getProduct = async () => {
      const res = await apiService.get("/product/");

      setProduct(res);
    };

    getProduct();
  }, []);

  return (
    <div style={{ paddingBottom: "5%" }}>
      <div id="men">
        <div>
          <Row justify="space-around">
            {product.map(
              (item) =>
                item.productCategory === "Men" && (
                  <Col span={7} style={{ paddingTop: "5%" }} key={item._id}>
                    <h1>{item.productName}</h1>
                    <Image
                      src={item.productImage}
                      alt="menswear"
                      height={300}
                    />
                    <h1>{item.productPrice + "$"}</h1>
                  </Col>
                )
            )}
          </Row>
        </div>
      </div>
    </div>
  );
};
export default MenCarousel;
