import React from "react";
import "./headerComp.css"; 
import logoImage from "../photo/logo.png"; 

function HeaderComp() {
  return (
    <div className="header">
      <logo><img src={logoImage} alt="Logo" /></logo>
      <h1>iphone</h1>
      <h1>ipad</h1>
      <h1>watch</h1>
      <h1>vision</h1>
      <h1>support</h1>
    </div>
  );
}
export default HeaderComp;