import React from "react";
import { Carousel } from "antd";
import "../../css/Mycarousel.css";
import sale25 from "../../img/Sale-Off25.png";
import sale50 from "../../img/Sale-Off50.png";
const IndexCarousel = () => {
  return (
    <div id="carousell">
      <Carousel>
        <div>
          <div id="reimagen1">
            <img
              src={sale25}
              alt="sale25"
              height={"100%"}
              style={{ marginLeft: "10%" }}
            />
          </div>
        </div>
        <div>
          <div id="reimagen2">
            <img
              src={sale50}
              alt="sale25"
              height={"100%"}
              style={{ marginLeft: "10%" }}
            />
          </div>
        </div>
      </Carousel>
    </div>
  );
};
export default IndexCarousel;
