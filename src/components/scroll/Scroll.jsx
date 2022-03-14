import React from "react";
import "./scrole.css";
import First from "../../assets/WhatsApp Image 2022-03-11 at 2.01.19 PM (1).jpeg";
import Second from "../../assets/WhatsApp Image 2022-03-11 at 2.01.19 PM.jpeg";
import Third from "../../assets/scroll2.jpeg";
import Fourth from "../../assets/scroll3.jpeg";
import Fifth from "../../assets/scroll4.jpeg";
const Scroll = () => {
  const images = [First, Second, Third, Fourth, Fifth];
  return (
    <div class="scroll-container">
      {images.map((image, index) => {
        return (
          <div class="scroll-area" key={index}>
            <img src={image} alt="" class="img-scroll" />
          </div>
        );
      })}
    </div>
  );
};

export default Scroll;
