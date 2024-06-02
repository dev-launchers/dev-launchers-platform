import React, { useState } from 'react';
import { StatuBox } from './StyledIdeaCard';
import { orange } from '@mui/material/colors';

const IdeaCardTag = ({ status }) => {
  const [tag, setTag] = useState('');
  const [tagColor, setTagColor] = useState('');

  React.useEffect(() => {
    // const rootStyles = getComputedStyle(document.documentElement);
    // const primaryColorValue = rootStyles.getPropertyValue('--orange-orange-100').trim();
    // const lightBlueColorValue = rootStyles.getPropertyValue('--light-blue-lightblue-100').trim();
    // const yellowColorValue = rootStyles.getPropertyValue('--yellow-yellow-100').trim();
    // const successColorValue = rootStyles.getPropertyValue('--success-success-100').trim();
    // const blueColorValue = rootStyles.getPropertyValue('--blue-blue-100').trim();

    if (status === 'submitted') {
      setTag('submitted');
      setTagColor('--light-blue-lightblue-100');
    } else if (status === 'applying') {
      setTag('in-review');
      setTagColor('--yellow-yellow-100');
    } else if (status === 'approved') {
      setTag('approved');
      setTagColor('--success-success-100');
    } else if (status === 'archived') {
      setTag('archived');
      setTagColor('--blue-blue-100');
    } else {
      setTag('workshopping');
      setTagColor('--orange-orange-100');
    }
  }, [status]);

  return <div className={tagColor}> {tag} </div>;
};

export default IdeaCardTag;
