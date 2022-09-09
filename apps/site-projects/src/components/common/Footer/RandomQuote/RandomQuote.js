import React from "react";
import Wrapper from "./StyledRandomQuote";

// Retrieve all quotes from our content layer
const quotes = require("../../../../content/collections/quotes.json").data;

export default function RandomQuote() {
  // Select and display a random quote from our quotes collection
  const randomQuote = quotes[parseInt(quotes.length * Math.random(), 10)];
  return (
    <Wrapper>
      &quot;{randomQuote.body}&quot; - {randomQuote.author}
    </Wrapper>
  );
}
