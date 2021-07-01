import React from "react";

import "./_Icons.css";

import FacebookSvg from "../images/icon-facebook.svg";
import InstagramSvg from "../images/icon-instagram.svg";
import PinterestSvg from "../images/icon-pinterest.svg";
import twitterSvg from "../images/icon-twitter.svg";

function Icons() {
  return (
    <div className="icons">
      <a href={FacebookSvg} alt="facebook" />
      <a href={InstagramSvg} alt="instagram" />
      <a href={PinterestSvg} alt="pintrest" />
      <a href={twitterSvg} alt="twitter" />
    </div>
  );
}

export default Icons;
