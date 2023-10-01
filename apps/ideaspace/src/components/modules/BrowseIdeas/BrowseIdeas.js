import React from 'react';
import CircularIndeterminateLoader from '../Loader/CircularIndeterminateLoader';
import { atoms } from '@devlaunchers/components/src/components';
import IdeaCard from '../../common/IdeaCard/IdeaCard';
import BackButton from '../../common/BackButton/BackButton';
import Dropdown from '@devlaunchers/components/components/organisms/Dropdown';
import { agent } from '@devlaunchers/utility';
import { cleanDataList } from '../../../utils/StrapiHelper';
import useResponsive from '@devlaunchers/components/src/hooks/useResponsive';

import {
  PageWrapper,
  HeadWapper,
  Headline,
  StyledRanbow,
  IdeaCardWrapper,
  FilterDiv,
} from './StyledBrowseIdeas';

function BrowseIdeas() {
  const [cards, setCards] = React.useState([]);
  const [sourceCards, setSourceCards] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const { isMobile } = useResponsive();

  const sortingConfigs = [
    {
      value: 'mostRecentCommentTime',
      label: 'Recent Activity',
      isAscending: false,
    },
    {
      value: 'updated_at',
      label: 'Recent Ideas',
      isAscending: false,
    },
    {
      value: 'hourCommitmentMin',
      label: 'Time Commitment',
      isAscending: true,
    },
  ];

  const sortCards = (selectedSortCriterion) => {
    let selectedSortingConfig = sortingConfigs.filter(
      (configOption) => configOption.label === selectedSortCriterion
    );
    const cardsClone = JSON.parse(JSON.stringify(cards));
    if (selectedSortingConfig[0].isAscending) {
      cardsClone.sort((a, b) => {
        return a[selectedSortingConfig[0].value] <
          b[selectedSortingConfig[0].value]
          ? -1
          : a[selectedSortingConfig[0].value] >
            b[selectedSortingConfig[0].value]
          ? 1
          : 0;
      });
    } else {
      cardsClone.sort((a, b) => {
        return a[selectedSortingConfig[0].value] >
          b[selectedSortingConfig[0].value]
          ? -1
          : a[selectedSortingConfig[0].value] <
            b[selectedSortingConfig[0].value]
          ? 1
          : 0;
      });
    }
    setCards(cardsClone);
  };

  React.useEffect(async () => {
    const ideaCards = cleanDataList(await agent.Ideas.get(
      new URLSearchParams(`populate=deep&pagination[pageSize]=1000`)));

    const getCards = ideaCards.map((item) => {  
      if (item?.comments?.data) {
        item.comments = cleanDataList(item.comments.data);

        const recentCommentedTime = item.comments.length > 0 ? new Date(
          item.comments[0]?.updatedAt
        ) :  new Date(item.updatedAt);

        return {
          ...item,
          mostRecentCommentTime: recentCommentedTime
        };
      }
      return {
        ...item,
        mostRecentCommentTime: new Date(item.updatedAt)?.getTime(),
      };
    });

    setLoading(false);
    setCards(getCards);
  }, []);

  React.useEffect(() => {
    setCards(sourceCards.filter((item) => item?.status !== 'archived'));
    if (defaultShownCardNum >= sourceCards.length) {
      setButtonDisplay({ display: 'none' });
    } else {
      setButtonDisplay({ display: '' });
    }
  }, [sourceCards]);

  const defaultShownCardNum = 30;
  const [buttonDisplay, setButtonDisplay] = React.useState();
  const [displayCardAmount, setDisplayCardAmount] =
    React.useState(defaultShownCardNum);
  const loadMore = () => {
    setDisplayCardAmount(displayCardAmount + defaultShownCardNum);
    if (displayCardAmount + defaultShownCardNum >= cards.length) {
      setButtonDisplay({ display: 'none' });
    }
  };

  return (
    <>
      <HeadWapper>
        <Headline>Browse Ideas</Headline>
        <StyledRanbow>
          <atoms.Layer hasRainbowBottom />
        </StyledRanbow>
        <BackButton />
        <atoms.Typography type="h4">
          Want to help develop an idea?
          <br />
          <atoms.Typography type="p" style={{ fontSize: '1.3rem' }}>
            {' '}
            Check out these ideas submitted by other Dev Launchers!
          </atoms.Typography>
        </atoms.Typography>
      </HeadWapper>

      <PageWrapper>
        {loading === true ? (
          <CircularIndeterminateLoader text="Loading..." color="black" />
        ) : (
          <div>
            <FilterDiv>
              <Dropdown
                width={isMobile ? 'sm' : 'lg'}
                isOpen={false}
                options={[
                  {
                    disabled: false,
                    text: 'Recent Activity',
                  },
                  {
                    disabled: false,
                    text: 'Recent Ideas',
                  },
                  {
                    disabled: false,
                    text: 'Time Commitment',
                  },
                ]}
                recieveValue={(value) => {
                  sortCards(
                    Object.entries(value).filter(([key, value]) => {
                      return value;
                    })[0][0]
                  );
                }}
                title="Sort By"
                type="radio"
              />
            </FilterDiv>

            <IdeaCardWrapper>
              {cards.slice(0, displayCardAmount).map((item) => {
                return (
                  <IdeaCard key={item.id} cards={item} cardType="browse" />
                );
              })}
            </IdeaCardWrapper>

            <atoms.Button
              buttonSize="standard"
              buttonType="primary"
              onClick={loadMore}
              style={buttonDisplay}
            >
              load more
            </atoms.Button>
          </div>
        )}
      </PageWrapper>
    </>
  );
}

export default BrowseIdeas;
