import { Carousel, Row, Col, Image } from "antd";
import React, { useEffect, useState } from "react";
import ApiService from "../../Api/Api";
import "../../css/WomenCarousel.css";

const WomenCarousel = () => {
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
    <div style={{ paddingLeft: "5%", marginTop: "5%", paddingRight: "35%" }}>
      <div id="women">
        <div>
          <Row justify="space-around">
            {product.map(
              (item) =>
                item.productCategory === "Women" && (
                  <Col span={7} style={{ paddingTop: "5%" }} key={item._id}>
                    <h1>{item.productName}</h1>
                    <Image
                      src={item.productImage}
                      alt="womenswear"
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
export default WomenCarousel;
