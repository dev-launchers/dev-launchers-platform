import React, { useState } from 'react';
import Wrapper from './StyledRandomQuote';

// Retrieve all quotes from our content layer
const quotes =
  require('@devlaunchers/components/content/collections/quotes.json').data;

export default function RandomQuote() {
  // Select and display a random quote from our quotes collection
  const [randomNum, setRandomNum] = useState(0);
  React.useEffect(() => {
    setRandomNum(parseInt(quotes.length * Math.random(), 10));
  }, []);
  const randomQuote = quotes[randomNum];
  return (
    <Wrapper>
      &quot;{randomQuote.body}&quot; - {randomQuote.author}
    </Wrapper>
  );
}
