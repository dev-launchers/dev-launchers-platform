import { Typography } from '@devlaunchers/components/components/atoms';
import greyBulletPoint from './../../../../../images/icons/grey-bullet-point.svg';

/**
 * Headers Component
 *
 * Displays the main header for a profile, including the title (e.g., name),
 * username (with a bullet point separator), and optionally a subtitle.
 *
 * @param {Object} props - The component props.
 * @param {string} props.title - The primary header, typically the user's name.
 * @param {string} props.subtitle - A secondary line of text below the title (e.g., tagline).
 * @param {string} props.username - The user's unique username.
 *
 * @return {JSX.Element} The rendered header UI, or an empty fragment if no title or subtitle is provided.
 */
function Headers({ title, subtitle, username }) {
  return title || subtitle ? (
    // Container for the header with vertical spacing
    <div className="flex flex-col gap-3">
      {/* Row for title and username */}
      <div className="flex flex-row gap-2 items-center">
        {/* Title (e.g., user name) */}
        <Typography type="h2" className="m-0 p-0">
          {title}
        </Typography>

        {/* Username with bullet point separator, displayed if username exists */}
        {username ? (
          <div className="flex flex-row gap-2 text-grayscale-500 items-center">
            {/* Bullet point icon */}
            <img src={greyBulletPoint} className="w-2" alt="Bullet Point" />
            {/* Username */}
            <Typography type="pLarge">{`@${username}`}</Typography>
          </div>
        ) : null}
      </div>

      {/* Subtitle, if provided */}
      {/* Uncomment to include the subtitle */}
      {/* {subtitle ? <Typography type="pLarge">{subtitle}</Typography> : null} */}
    </div>
  ) : (
    // Render nothing if neither title nor subtitle is provided
    <> </>
  );
}

export default Headers;
