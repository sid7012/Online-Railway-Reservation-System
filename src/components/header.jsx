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
        <h1 style={{color:"white", fontFamily:"cursive"}}>Online Railway Reservation</h1>
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
        <a href="/signin"> User Login </a>
        <a href="/signin"> Admin Login </a>
        <a href="/searchingTrain"> search Train </a>
        <a href="/links"> links </a>
        
        <a onClick={onLogOutClick}
          href="/signin"> LogOut </a>
        
        
        {/* <buthrefn onClick={hrefggleNavbar}>
          <ReorderIcon />
        </buthrefn> */}
      </div>
    </div>
  );
}

export default Header;
