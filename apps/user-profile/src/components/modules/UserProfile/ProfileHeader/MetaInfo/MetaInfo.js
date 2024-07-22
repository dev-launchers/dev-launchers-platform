import locationMarker from './../../../../../images/icons/outlined-location-marker.svg';
import suitcase from './../../../../../images/icons/outlined-suitcase.svg';
import rocket from './../../../../../images/icons/outlined-rocket.svg';
import chainLink from './../../../../../images/icons/outlined-chain-link.svg';
import greyBulletPoint from './../../../../../images/icons/grey-bullet-point.svg';

import { Typography } from '@devlaunchers/components/components/atoms';

function MetaInfo({ location, role, membersince, website }) {
  const metaInfoElementList = [];

  const elementClassStyles = 'flex flex-row gap-2 items-center';

  const locationElement = (
    <div className={elementClassStyles}>
      <img src={locationMarker}></img>
      <Typography>{location}</Typography>
    </div>
  );

  const roleElement = (
    <div className={elementClassStyles}>
      <img src={suitcase}></img>
      <Typography>{role}</Typography>
    </div>
  );

  const memberSinceElement = (
    <div className={elementClassStyles}>
      <img src={rocket}></img>
      <Typography>Member Since: {membersince}</Typography>
    </div>
  );

  const websiteElement = (
    <div className={elementClassStyles}>
      <img src={chainLink}></img>
      <Typography>{website}</Typography>
    </div>
  );

  const bulletPointElement = <img src={greyBulletPoint} className="w-2"></img>;

  // location && metaInfoElementList.push(locationElement);
  // role && metaInfoElementList.push(roleElement);
  membersince && metaInfoElementList.push(memberSinceElement);
  // website && metaInfoElementList.push(websiteElement);

  const metaInfoElementsToShow = metaInfoElementList.flatMap((element, index) =>
    index == 0 ? element : [bulletPointElement, element]
  );

  return (
    <div className="flex flex-row w-full text-grayscale-500 gap-2 ">
      {metaInfoElementsToShow.map((element) => element)}
    </div>
  );
}

export default MetaInfo;
