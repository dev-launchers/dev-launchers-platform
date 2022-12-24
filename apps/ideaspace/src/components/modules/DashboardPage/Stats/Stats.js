import React from 'react';
import { atoms } from '@devlaunchers/components/src/components';

const Stats = ({
    totalData,
}) => {
    const [ideaStats, setIdeaStats] = React.useState(0);
    const [commentStats, setCommentStats] = React.useState(0);


    React.useEffect(() => {
        setIdeaStats(totalData.length);
        setCommentStats((totalData.reduce((total, card) => total = total + card.comments.length, 0)));
    }, [totalData]);

    return (
        <atoms.Box flexWrap='wrap' style={{rowGap: '1rem', columnGap: '4rem'}}>
            <atoms.Layer type="white" style={{marginTop: '1rem'}}>
                <atoms.Typography type='p' style={{fontSize: '1.4rem', margin: '1.5rem 1.9rem', textAlign: 'left'}}>
                    Ideas Created
                </atoms.Typography>
                <atoms.Typography type='p' style={{fontSize: '4rem', fontWeight: '700', lineHeight: '4rem', textAlign: 'left', margin: '2rem 1.7rem'}}>
                    {ideaStats}
                </atoms.Typography>
            </atoms.Layer>
            <atoms.Layer type="white" style={{marginTop: '1rem'}}>
                <atoms.Typography type='pLarge' style={{fontSize: '1.4rem', margin: '1.5rem 1.9rem', textAlign: 'left'}}>
                    Total Comments
                </atoms.Typography>
                <atoms.Typography type='p' style={{fontSize: '4rem', fontWeight: '700', lineHeight: '4rem', textAlign: 'left', margin: '2rem 1.7rem'}}>
                    {commentStats}
                </atoms.Typography>
            </atoms.Layer>
        </atoms.Box>
    );
};

export default Stats;