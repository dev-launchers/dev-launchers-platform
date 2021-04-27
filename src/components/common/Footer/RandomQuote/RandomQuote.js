import React from "react";
import Wrapper from "./StyledRandomQuote";

// Retrieve all quotes from our content layer
let quotes = require("../../../../content/collections/quotes.json").data;

export default function RandomQuote() {
  // Select and display a random quote from our quotes collection
  let randomQuote = quotes[parseInt(quotes.length * Math.random())];
  return (
    <Wrapper>
      "{randomQuote.body}" - {randomQuote.author}
    </Wrapper>
  );
}
