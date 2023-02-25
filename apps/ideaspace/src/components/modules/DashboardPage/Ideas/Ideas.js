import React from 'react';
import Link from 'next/link';
import { atoms } from '@devlaunchers/components/src/components';
import SortableDropdown from '../../../common/SortableDropdown/SortableDropdown';
import IdeaCard from './IdeaCard'
import submitImage from "../../../../images/submitButton.svg";

import {
    IdeaCardWrapper,
    SubmitButton,
} from './StyledIdeas';

const Ideas = ({
    totalCard,
}) => {
    const [sortedCards, setSortedCards] = React.useState([]);

    const dropDownStyle = { width: "13rem", borderRadius: "8px", padding: "6px 8px", fontSize: "1rem", outline: "none" };
    const defaultOptions = [<option key='-1'>Sort By</option>];
    const sortingConfigs = [
        {
            value: 'published_at',
            label: 'Date Posted',
            isAscending: false,
        },
        {
            value: 'updated_at',
            label: 'Date Updated',
            isAscending: false,
        },
        {
            value: 'mostRecentCommentTime',
            label: 'Recent Activity',
            isAscending: false,
        },
    ];

    return (
        <atoms.Box flexDirection='column' style={{ marginTop: '4rem' }}>
            <atoms.Box alignItems='center' justifyContent='space-between' width='100%'>
                <atoms.Typography type='h4' style={{ textAlign: 'left' }}>My Ideas</atoms.Typography>
                <SortableDropdown
                    sortingConfigs={sortingConfigs}
                    elements={totalCard}
                    defaultOptions={defaultOptions}
                    handleSetSortedElements={setSortedCards}
                    style={dropDownStyle}
                />
            </atoms.Box>

            <IdeaCardWrapper>
                {sortedCards.map((item) => {
                    return (
                        <IdeaCard
                            cards={item}
                            key={item.id}
                        />
                    );
                })
                }

                <Link href="/ideaspace/submit">
                    <SubmitButton style={{ cursor: 'pointer' }}>
                        <img
                            alt="submit_image"
                            src={submitImage}
                            style={{ width: "100%" }}
                        />
                    </SubmitButton>
                </Link>
            </IdeaCardWrapper>
        </atoms.Box>
    );
};

export default Ideas;