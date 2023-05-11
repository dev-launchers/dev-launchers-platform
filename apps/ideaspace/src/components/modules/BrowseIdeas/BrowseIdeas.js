import React from 'react'
import CircularIndeterminateLoader from '../Loader/CircularIndeterminateLoader'
import { atoms } from '@devlaunchers/components/src/components';
import IdeaCard from '../../common/IdeaCard/IdeaCard';
import BackButton from '../../common/BackButton/BackButton';
import Dropdown from '@devlaunchers/components/components/organisms/Dropdown';
import { agent } from '@devlaunchers/utility';
import { cleanDataList } from '../../../utils/StrapiHelper';
import {
  PageWrapper,
  HeadWapper,
  Headline,
  StyledRanbow,
  IdeaCardWrapper,
  FilterDiv
} from './StyledBrowseIdeas';

function BrowseIdeas() {
  const [cards, setCards] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

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
      new URLSearchParams(`populate=*&pagination[pageSize]=1000`)));

    const getCards = ideaCards.map((item) => {  
      if (item?.comments?.data) {
        item.comments = cleanDataList(item.comments.data);
        return {
          ...item,
          mostRecentCommentTime: new Date(
            item.comments[0]?.updated_at
          )?.getTime(),
        };
      }
      return {
        ...item,
        mostRecentCommentTime: new Date()?.getTime(),
      };
    });

    setLoading(false);
    setCards(getCards);
  }, []);

  return (
    <>
      <HeadWapper>
        <Headline>Browse Ideas</Headline>
        <StyledRanbow>
          <atoms.Layer hasRainbowBottom />
        </StyledRanbow>
        <BackButton />
        <atoms.Typography type='h4' >
          Want to help developing an idea?<br />
          <atoms.Typography type='p' style={{ fontSize: '1.3rem' }}> Check out these ideas submitted by other Dev Launchers!</atoms.Typography>
        </atoms.Typography>
      </HeadWapper>

      <PageWrapper>
        {loading === true ? (
          <CircularIndeterminateLoader text="Loading..." color="black" />
        ) : (
          <div>
          <FilterDiv>
            <Dropdown
              width="lg"
              isOpen
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
              {cards.map((item) => {
                return (
                  <IdeaCard
                    key={item.id}
                    cards={item}
                    cardType="browse"
                  />
                );
              })}
            </IdeaCardWrapper>
          </div>
        )}
      </PageWrapper>
    </>
  );
}

export default BrowseIdeas;
