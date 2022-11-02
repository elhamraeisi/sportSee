import yoga from "../../assets/images/yoga-icon.png";
import swiming from "../../assets/images/swiming-icon.png";
import cycling from "../../assets/images/cycling-icon.png";
import bodybuilding from "../../assets/images/bodybuilding-icon.png";
import "./Sidebar.css";
import React from "react";

/**
 * Renders side bar menu of website
 * @returns
 */
function Sidebar() {
  return (
    <nav className="left-side">
      <div className="icon-column">
        <img src={yoga} className="icon" alt="yoga-icon" />
        <img src={swiming} className="icon" alt="swiming-icon" />
        <img src={cycling} className="icon" alt="cycling-icon" />
        <img src={bodybuilding} className="icon" alt="bodybuilding-icon" />

        <div className="copyright">
          <p>Copiryght, SportSee 2020</p>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
