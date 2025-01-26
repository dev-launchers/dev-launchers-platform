import locationMarker from './../../../../../images/icons/outlined-location-marker.svg';
import suitcase from './../../../../../images/icons/outlined-suitcase.svg';
import rocket from './../../../../../images/icons/outlined-rocket.svg';
import chainLink from './../../../../../images/icons/outlined-chain-link.svg';
import greyBulletPoint from './../../../../../images/icons/grey-bullet-point.svg';

import { Typography } from '@devlaunchers/components/components/atoms';

/**
 * MetaInfo Component
 *
 * Displays metadata about the user, such as their location, role, membership date,
 * and website. Dynamically generates elements based on the available props.
 *
 * @param {Object} props - The component props.
 * @param {string} props.location - User's location.
 * @param {string} props.role - User's role or occupation.
 * @param {string} props.membersince - Date when the user joined.
 * @param {string} props.website - User's website URL.
 *
 * @return {JSX.Element} The metadata information displayed in a styled row.
 */
function MetaInfo({ location, role, membersince, website }) {
  const metaInfoElementList = []; // Holds elements to be displayed dynamically

  const elementClassStyles = 'flex flex-row gap-2 items-center'; // Common styles for each element

  // Element for displaying the location
  const locationElement = (
    <div className={elementClassStyles}>
      <img src={locationMarker} alt="Location marker" />
      <Typography>{location}</Typography>
    </div>
  );

  // Element for displaying the role
  const roleElement = (
    <div className={elementClassStyles}>
      <img src={suitcase} alt="Suitcase icon" />
      <Typography>{role}</Typography>
    </div>
  );

  // Element for displaying the membership date
  const memberSinceElement = (
    <div className={elementClassStyles}>
      <img src={rocket} alt="Rocket icon" />
      <Typography>Member Since: {membersince}</Typography>
    </div>
  );

  // Element for displaying the website
  const websiteElement = (
    <div className={elementClassStyles}>
      <img src={chainLink} alt="Chain link icon" />
      <Typography>{website}</Typography>
    </div>
  );

  // Bullet point for separating elements
  const bulletPointElement = (
    <img src={greyBulletPoint} className="w-2" alt="Bullet point" />
  );

  // Add elements to the list based on availability
  // Uncomment the lines below to include these elements when needed
  // location && metaInfoElementList.push(locationElement);
  // role && metaInfoElementList.push(roleElement);
  membersince && metaInfoElementList.push(memberSinceElement);
  // website && metaInfoElementList.push(websiteElement);

  // Add bullet points between elements, excluding the first element
  const metaInfoElementsToShow = metaInfoElementList.flatMap((element, index) =>
    index === 0 ? element : [bulletPointElement, element]
  );

  return (
    // Container for metadata, styled as a row with a gap between items
    <div className="flex flex-row w-full text-grayscale-500 gap-2">
      {metaInfoElementsToShow.map((element, index) => (
        <React.Fragment key={index}>{element}</React.Fragment>
      ))}
    </div>
  );
}

export default MetaInfo;
