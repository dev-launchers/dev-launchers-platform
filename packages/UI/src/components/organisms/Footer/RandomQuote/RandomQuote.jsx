import React, { useEffect, useState } from 'react';
import Wrapper from './StyledRandomQuote';

const quotes = JSON.parse(`
{
  "_comment": "",
  "_model": {
    "author": "<string>",
    "body": "<string>"
  },

  "data": [
    {
      "author": "Daniel Bell",
      "body": "Technology, like art, is a soaring exercise of the human imagination."
    },
    {
      "author": "Sukant Ratnakar",
      "body": "Innovation is the outcome of a habit, not a random act."
    },
    {
      "author": "Arthur C. Clarke",
      "body": "Any sufficiently advanced technology is indistinguishable from magic."
    },
    {
      "author": "Sean Gerety",
      "body": "The technology you use impresses no one. The experience you create with it is everything."
    },
    {
      "author": "Matt Mullenweg",
      "body": "Technology is best when it brings people together."
    },
    {
      "author": "Steve Jobs",
      "body": "Technology is nothing. What’s important is that you have a faith in people, that they’re basically good and smart, and if you give them tools, they’ll do wonderful things with them."
    }
  ]
}
`).data;

export default function RandomQuote() {
  const [randomNum, setRandomNum] = useState(
    parseInt(quotes.length * Math.random(), 10)
  );
  useEffect(() => {
    setRandomNum(parseInt(quotes.length * Math.random(), 10));
  }, []);

  const randomQuote = quotes[randomNum];
  return (
    <Wrapper>
      &quot;{randomQuote?.body}&quot; - {randomQuote?.author}
    </Wrapper>
  );
}
