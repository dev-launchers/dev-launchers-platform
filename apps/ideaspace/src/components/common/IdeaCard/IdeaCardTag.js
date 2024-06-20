import React, { useState } from 'react';
// import theme from '@devlaunchers/components/styles/theme';
import { StatuBox } from './StyledIdeaCard';

const IdeaCardTag = ({ status }) => {
  const [tag, setTag] = useState('');
  // const [tagColor, setTagColor] = useState('');

  const tagColor = {
    submitted: 'bg-LightBlue-lightblue-100',
    'in-review': 'bg-Yellow-yellow-100',
    approved: 'bg-Success-success-100',
    archieved: 'bg-Blue-blue-100',
    workshopping: 'bg-Orange-orange-100',
  };

  // React.useEffect(() => {
  //   if (status == "submitted"){
  //     setTag("submitted");
  //     // setTagColor(theme.colors.LIGHT_BLUE_100);
  //   } else if (status == "applying"){
  //     setTag("in-review");
  //     // setTagColor(theme.colors.YELLOW_100);
  //   } else if (status == "approved"){
  //     setTag("approved");
  //     // setTagColor(theme.colors.SUCCESS_100);
  //   } else if (status == "archived"){
  //     setTag("archived");
  //     // setTagColor(theme.colors.BLUE_100);
  //   } else {
  //     setTag("workshopping");
  //     // setTagColor(theme.colors.ORANGE_100);
  //   }
  // }, [status]);

  return <StatuBox className={tagColor[status]}> {status} </StatuBox>;
  // return (
  //     <StatuBox style={{ background: tagColor, }}>{tag}</StatuBox>
  // )
};

export default IdeaCardTag;
