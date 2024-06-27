import React, { useState } from 'react';
import { StatuBox } from './StyledIdeaCard';

const IdeaCardTag = ({ status }) => {
  let tag = status;
  if (tag == 'applying') {
    tag = 'in-review';
  }

  const tagColor = {
    submitted: 'bg-LightBlue-lightblue-100',
    'in-review': 'bg-Yellow-yellow-100',
    approved: 'bg-Success-success-100',
    archieved: 'bg-Blue-blue-100',
    workshopping: 'bg-Orange-orange-100',
  };

  return <StatuBox className={tagColor[tag]}> {tag} </StatuBox>;
};

export default IdeaCardTag;
