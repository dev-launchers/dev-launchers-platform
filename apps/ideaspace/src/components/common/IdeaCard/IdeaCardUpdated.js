import React, { useState } from 'react';
import { atoms } from '@devlaunchers/components/src/components';
import timeSvg from '../../../images/time.svg';

const IdeaCardUpdated = ({
    updatedAt
}) => {
    const [updated, setUpdated] = useState('');

    React.useEffect(() => {
        const toBeOneSecond = 1000;
        const secondsInDay = 86400;
        const secondsInMonth = secondsInDay * 30;
        const secondsInYear = secondsInMonth * 12;
        const secondsInHour = 3600;
        const secondsInMinute = 60;

        const difftime = (new Date() - new Date(updatedAt)) / toBeOneSecond;

        if (difftime > secondsInYear) {
            const years = parseInt(difftime / secondsInYear);
            if (years > 1) {
                setUpdated(years + ' years ago');
            } else {
                setUpdated(years + ' year ago');
            }
        } else if (difftime > secondsInMonth) {
            const months = parseInt(difftime / secondsInMonth);
            if (months > 1) {
                setUpdated(months + ' months ago');
            } else {
                setUpdated(months + ' month ago');
            }
        } else if (difftime > secondsInDay) {
            const days = parseInt(difftime / secondsInDay);
            if (days > 1) {
                setUpdated(days + ' days ago');
            } else {
                setUpdated(days + ' day ago');
            }
        } else if (difftime > secondsInHour) {
            const hours = parseInt(difftime / secondsInHour);
            if (hours > 1) {
                setUpdated(hours + ' hours ago');
            } else {
                setUpdated(hours + ' hour ago');
            }
        } else {
            const minutes = parseInt(difftime % secondsInHour / secondsInMinute);
            if (minutes > 1) {
                setUpdated(minutes + ' minutes ago');
            } else {
                setUpdated('1 minute ago');
            }
        }

    }, []);

    return (
        <atoms.Box alignItems='center' style={{ marginTop: '0.5rem' }} >
          <img alt='timeSvg' src={timeSvg} />
          <atoms.Typography type='p'>
            &nbsp;UPDATED:&nbsp;{updated}
          </atoms.Typography>
        </atoms.Box>
    )
};

export default IdeaCardUpdated;