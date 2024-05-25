import { Typography } from '@devlaunchers/components/components/atoms';
import greyBulletPoint from './../../../../../images/icons/grey-bullet-point.svg';

function Headers({ title, subtitle, username }) {
  return title || subtitle ? (
    <div className="flex flex-col gap-3">
      <div className="flex flex-row gap-2 items-center">
        <Typography type="h2" className="m-0 p-0">
          {title}
        </Typography>
        <div className="flex flex-row gap-2 text-grayscale-500 items-center">
          <img src={greyBulletPoint} className="w-2" />
          <Typography type="pLarge">{`@${username}`}</Typography>
        </div>
      </div>
      {subtitle ? <Typography type="pLarge">{subtitle}</Typography> : null}
    </div>
  ) : (
    <> </>
  );
}

export default Headers;
