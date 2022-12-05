import React from 'react';
import {
    StatSection,
    StatsBox,
    StatsTitle,
    StatsCount,
} from './StyledStats';

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
        <StatSection>
            <StatsBox>
                <StatsTitle>Ideas Created</StatsTitle>
                <StatsCount>{ideaStats}</StatsCount>
            </StatsBox>
            <StatsBox>
                <StatsTitle>Total Comments</StatsTitle>
                <StatsCount>{commentStats}</StatsCount>
            </StatsBox>
        </StatSection>

    );
};

export default Stats;