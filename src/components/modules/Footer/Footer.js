import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import style from "./Footer.module.css";
import logoMonogramImage from "../../../images/logo-monogram.png";

export default class Footer extends React.Component {
  constructor() {
    super();
    this.state = { color: "red" };
  }
  render() {
    return (
      <div className={style.footer}>
        <div className={style.quoteArea}>{this.getRandomQuote()}</div>
          <Link to={"/"} className="nav-link">
        <img
          className={style.footerLogo}
          src={logoMonogramImage}
        /></Link>
        <div className={style.footerNav}>
          <Link to={"/create"} className="nav-link">
            <div className={style.navEntry}>CREATE</div>
          </Link>
          <Link to={"/learn"} className="nav-link">
            <div className={style.navEntry}>LEARN</div>
          </Link>
          <Link to={"/play"} className="nav-link">
            <div className={style.navEntry}>PLAY</div>
          </Link>
          <Link to={"/earn"} className="nav-link">
            <div className={style.navEntry}>EARN</div>
          </Link>
          <Link to={"/support-us"} className="nav-link">
            <div className={style.navEntry}>SUPPORT US</div>
          </Link>
        </div>
        <div className={style.orgInfoArea}>
          Terms of Service | Privacy Policy | ©Dev Launchers, 2020.
        </div>
      </div>
    );
  }

  getRandomQuote() {
    const quotes = [
      "Technology, like art, is a soaring exercise of the human imagination. – Daniel Bell",
      "Innovation is the outcome of a habit, not a random act. – Sukant Ratnakar",
      "Any sufficiently advanced technology is indistinguishable from magic. – Arthur C. Clarke",
      "The technology you use impresses no one. The experience you create with it is everything. – Sean Gerety",
      "Technology is best when it brings people together. – Matt Mullenweg",
      "Technology is nothing. What’s important is that you have a faith in people, that they’re basically good and smart, and if you give them tools, they’ll do wonderful things with them. – Steve Jobs"
    ];
    return quotes[parseInt(quotes.length * Math.random())];
  }
}

/*
Other Possible Quotes:







*/
