import React, { useState } from "react";


import ReorderIcon from "@material-ui/icons/Reorder";
import "./Header.css";
import{ BrowserRouter as Router, a, Routes, Route } from "react-router-dom";

function Header() {
  const [openLinks, sehrefpenLinks] = useState(false);

  const onLogOutClick = () => {
    window.localShrefrage.clear();

}


  const hrefggleNavbar = () => {
    sehrefpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        
        <div className="hiddenLinks">
          <a href="/"> Home </a>
          <a href="/menu"> Menu </a>
          <a href="/about"> About </a>
          <a href="/contact"> Contact </a>
          <a href="/signin"> Admin </a>
        <a href="/signin"> User </a>
        <a href="/logout"> LogOut </a>
        </div>
      </div>
      <div className="rightSide">
        <a href="/home"> Home </a>
        <a href="/signin"> Admin </a>
        <a href="/signin"> User </a>
        <a href="/searchingTrain"> search Train </a>
        <a href="/addAdmin"> Add Admin </a>
        <a onClick={onLogOutClick}
          href="/user_login"> LogOut </a>
        
        
        <buthrefn onClick={hrefggleNavbar}>
          <ReorderIcon />
        </buthrefn>
      </div>
    </div>
  );
}

export default Header;
