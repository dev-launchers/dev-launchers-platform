import React from 'react';
import Grid from '@mui/material/Grid';
import {
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
        <Grid container item sm={12} md={12} lg={12} columnSpacing={8}>
            <Grid item sm={5} md={4} lg={3}>
                <StatsBox>
                    <StatsTitle>Ideas Created &nbsp; &nbsp;</StatsTitle>
                    <StatsCount>{ideaStats}</StatsCount>
                </StatsBox>
            </Grid>
            <Grid item sm={5} md={4} lg={3}>
                <StatsBox>
                    <StatsTitle>Total Comments</StatsTitle>
                    <StatsCount>{commentStats}</StatsCount>
                </StatsBox>
            </Grid>
        </Grid>

    );
};

export default Stats;