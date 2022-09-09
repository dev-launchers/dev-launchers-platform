import React, { useEffect, useState } from 'react';
import Wrapper from './StyledRandomQuote';

// Retrieve all quotes from our content layer
const quotes = require('../../../../content/collections/quotes.json').data;

export default function RandomQuote() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const randomQuote = quotes[parseInt(quotes.length * Math.random(), 10)];
    setQuote(randomQuote);
  }, []);

  return <Wrapper>{`"${quote.body}" - ${quote.author}`}</Wrapper>;
}
