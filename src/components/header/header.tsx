import React, { useState } from "react";
import "./header.css";

interface HeaderProps {
  isMainPage: boolean;
}
function Header({ isMainPage }: HeaderProps) {
  // const [click, setClick] = useState(false);
  return (
    <div className="header">
      {isMainPage && (
        <div className="header-container">
          <ul>
            <li className="nav-item">
              <a href="/">Home</a>
            </li>
            <li className="nav-item">
              <a href="/">About</a>
            </li>
            <li className="nav-item">
              <a href="/">Terms and Condition</a>
            </li>
            <li className="nav-item">
              <a href="/">FAQ's</a>
            </li>
          </ul>
        </div>
      )}
      <div className="header-title">
        <span>Accessible Personal</span>
        <br />
        <span>Identity Recognition</span>
      </div>
      {isMainPage && (
        <div className="right-container">
          <ul>
            <li className="nav-item-right">
              <a href="/login">Logout</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
export default Header;
