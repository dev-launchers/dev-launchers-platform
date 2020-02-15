import React from "react";
import ReactDOM from "react-dom";

import style from "./RandomQuote.module.css";

// Retrieve all quotes from our content layer
let quotes = require("../../../../content/collections/quotes.json").data;

export default function RandomQuote() {
  // Select and display a random quote from our quotes collection
  let randomQuote = quotes[parseInt(quotes.length * Math.random())];
  return (
    <div className={style.RandomQuote}>
      "{randomQuote.body}" - {randomQuote.author}
    </div>
  );
}
