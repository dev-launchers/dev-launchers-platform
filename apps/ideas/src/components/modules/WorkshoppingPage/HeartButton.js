// test file for the like button on the workshopping page
// source: https://stackoverflow.com/a/53685236

import React, { useState, useEffect } from "react";

const HeartButton = () => {
  const emptyHeartString = '\u2661'+'Like';
  const fullHeartString = '\u2665'+'479';

  const [buttonText, setButtonText] = useState(emptyHeartString); //same as creating your state variable where "empty heart" is the default value for buttonText and setButtonText is the setter function for your state variable instead of setState

  return (
    <button onClick={() => setButtonText(buttonText === fullHeartString ? emptyHeartString : fullHeartString)}>{buttonText}</button> // toggles between "empty heart" and "full heart"
  )
};

export default HeartButton;