import React from "react";
import "./Header.css";

const Header = ({ black }) => {
 
  return (
    <header className={black ? "black" : ""}>
      <div className="header--logo">
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
            alt="Netflix - Logo"
          />
        </a>
      </div>

      <div className="header--profile">
        <img src="https://i.imgur.com/prnpovw.png" alt="icone do usuário" />
      </div>
    </header>
  );
};

export default Header;
