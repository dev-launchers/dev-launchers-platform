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
  StyledRanbow,
  IdeaCardWrapper,
  FilterDiv,
} from './StyledBrowseIdeas';
import { HeadWapper, Headline } from '../../common/CommonStyles';

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
      value: 'createdAt',
      label: 'Recent Ideas',
      isAscending: false,
    },
    {
      value: 'votes',
      label: 'Most Upvotes',
      isAscending: false,
    },
    {
      value: 'votes',
      label: 'Least Upvotes',
      isAscending: true,
    },
  ];

  const sortCards = (selectedSortCriterion) => {
    let selectedSortingConfig = sortingConfigs.find(
      (configOption) => configOption.label === selectedSortCriterion
    );
    if (!selectedSortingConfig) return;

    const cardsClone = JSON.parse(JSON.stringify(cards));
    cardsClone.sort((a, b) => {
      const valueA = a[selectedSortingConfig.value];
      const valueB = b[selectedSortingConfig.value];
      if (selectedSortingConfig.isAscending) {
        return valueA - valueB;
      } else {
        return valueB - valueA;
      }
    });
    setCards(cardsClone);
  };

  React.useEffect(async () => {
    const ideaCards = cleanDataList(
      await agent.Ideas.get(
        new URLSearchParams(`populate=*&pagination[pageSize]=1000`)
      )
    );

    const getCards = await Promise.all(
      ideaCards.map(async (item) => {
        const params = `?populate=deep&filters[objectId][$eq]=${item.id}`;
        const likes = await agent.Likes.get(new URLSearchParams(params));

        if (item?.comments?.data) {
          item.comments = cleanDataList(item.comments.data);

          //add current time to created time to ensure ideas without comment will be listed first when sorted by recent activity
          const totalMillis =
            new Date().getTime() + new Date(item.createdAt).getTime();
          const formatedCombinedTime = new Date(totalMillis).toISOString();

          const recentCommentedTime =
            item.comments.length > 0
              ? new Date(item.comments[item.comments.length - 1]?.updatedAt)
              : new Date(formatedCombinedTime);

          return {
            ...item,
            mostRecentCommentTime: recentCommentedTime,
            votes: likes.length,
          };
        }
        return {
          ...item,
          mostRecentCommentTime: new Date(item.updatedAt)?.getTime(),
          votes: likes.length,
        };
      })
    );

    setLoading(false);
    setCards(getCards);
    setSourceCards(getCards);
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
        <BackButton backRoute={'/ideaspace'} />
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
                    text: 'Most Upvotes',
                  },
                  {
                    disabled: false,
                    text: 'Least Upvotes',
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
