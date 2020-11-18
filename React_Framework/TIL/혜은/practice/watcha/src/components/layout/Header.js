import React, { Component } from "react";
import logo from "assets/images/Logo.svg";

class Header extends Component {
  render() {
    return (
      <header className="appHeader appHeader--fixed container">
        <h1 className="appHeader__brand">
          <a className="linkA appHeader__homeLink" href="./index.html">
            <img
              className="img appHeader__logo"
              src={logo}
              alt="왓챠(WATCHA)"
              width={99}
              height={40}
            />
          </a>
        </h1>
        <a
          className="linkA appHeader__signInLink"
          href="https://watcha.com/sign_in"
        >
          로그인
        </a>
      </header>
    );
  }
}

export default Header;
