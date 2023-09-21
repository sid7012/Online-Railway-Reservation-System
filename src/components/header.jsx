import React, { useEffect, useState } from "react";//managing component state and side effects
import "./Header.css";


function Header() {
  const [openLinks, sehrefpenLinks] = useState(false);

  const onLogOutClick = () => {
    window.sessionStorage.clear();//This defines a function onLogOutClick that clears the session storage. This is intended for logging out users when they click the "LogOut" link.
  }

  //When openLinks is true, the id is set to "open", and when openLinks is false, the id is set to "close"
  //Data stored in sessionStorage is limited to a single browser tab or window and remains accessible as long as that tab or window is open. 
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <h1 style={{ color: "white", fontFamily: "Georgia, serif" }}>Online Railway Reservation</h1>
        <div className="hiddenLinks">
          <a href="/"> Home </a>
          <a href="/menu"> Menu </a>
          <a href="/about"> About </a>
          <a href="/contact"> Contact </a>
          <a href="/signin"> Admin </a>
          <a href="/signin"> User </a>
        </div>
      </div>
      <div className="rightSide">
        <a href="/home"> Home </a>
        {
          sessionStorage.loginStatus === 1 ?
            (<a href="/adminfunctinality"> Dashboard </a>) :
            sessionStorage.loginStatus === 2 ?
              (<a href="/userfunctinality"> Dashboard </a>) : ""
        }
        <a href="/signin"> User Login </a>
        <a href="/signin"> Admin Login </a>
        {
          sessionStorage.loginStatus === 1 ?
            (<a onClick={onLogOutClick}// If loginStatus is 1, it displays the "Dashboard" and "LogOut" links for administrators
              href="/signin"> LogOut </a>) :
            sessionStorage.loginStatus === 2 ?
              (<a onClick={onLogOutClick}//If loginStatus is 2, it displays the same links for regular users
                href="/signin"> LogOut </a>) : ""
        }
      </div>
    </div>
  );
}

export default Header;
