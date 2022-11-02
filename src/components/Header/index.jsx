import logo from "../../assets/images/logo.png";
import "./Header.css";
import React from "react";

/**
 * Renders the header of the website
 * @returns
 */
function Header() {
  return (
    <header>
      <div className="App-nav">
        <img src={logo} className="App-logo" alt="logo" />
        <nav className="App-nav-items">
          <p>Accueil</p>
          <p>Profil</p>
          <p>Réglage</p>
          <p>Communauté</p>
        </nav>
      </div>
    </header>
  );
}

export default Header;
