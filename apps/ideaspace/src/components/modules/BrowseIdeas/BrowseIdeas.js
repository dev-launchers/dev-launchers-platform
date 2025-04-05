import React from 'react';
import CircularIndeterminateLoader from '../Loader/CircularIndeterminateLoader';
import { atoms } from '@devlaunchers/components/src/components';
import IdeaCard from '../../common/IdeaCard/IdeaCard';
import BackButton from '../../common/BackButton/BackButton';
import { DropdownMenu } from '@devlaunchers/components/src/components/DropdownMenu';
import { DropdownMenuTrigger } from '@devlaunchers/components/components/DropdownMenu';
import { DropdownMenuContent } from '@devlaunchers/components/components/DropdownMenu';
import { DropdownMenuRadioGroup } from '@devlaunchers/components/components/DropdownMenu';
import { DropdownMenuRadioItem } from '@devlaunchers/components/components/DropdownMenu';
import { ChevronDown } from 'lucide-react';
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
  const [selectedSortCriterionLabel, setSelectedSortCriterionLabel] =
    React.useState('Default');
  const [cards, setCards] = React.useState([]);
  const [sourceCards, setSourceCards] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const { isMobile } = useResponsive();

  const sortingConfigs = [
    {
      value: 'default',
      label: 'Default',
      isAscending: false,
    },
    {
      value: 'mostRecentCommentTime',
      label: 'Recent Activity',
      isAscending: false,
    },
    {
      value: 'createdAt',
      label: 'Recently Posted',
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

    setSelectedSortCriterionLabel(selectedSortingConfig.label);

    if (selectedSortingConfig.value === 'default') {
      setCards(sourceCards);
      return;
    }

    const cardsClone = JSON.parse(JSON.stringify(cards));
    cardsClone.sort((a, b) => {
      let valueA = a[selectedSortingConfig.value];
      let valueB = b[selectedSortingConfig.value];

      if (selectedSortingConfig.value === 'mostRecentCommentTime') {
        valueA = Math.max(
          new Date(a.mostRecentCommentTime).getTime(),
          new Date(a.createdAt).getTime()
        );
        valueB = Math.max(
          new Date(b.mostRecentCommentTime).getTime(),
          new Date(b.createdAt).getTime()
        );
      } else if (selectedSortingConfig.value === 'createdAt') {
        valueA = new Date(valueA).getTime();
        valueB = new Date(valueB).getTime();
      }

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

        let mostRecentCommentTime = new Date(item.createdAt).getTime();

        if (item?.comments?.data) {
          item.comments = cleanDataList(item.comments.data);

          if (item.comments.length > 0) {
            const lastCommentTime = new Date(
              item.comments[item.comments.length - 1]?.updatedAt
            ).getTime();
            mostRecentCommentTime = Math.max(
              mostRecentCommentTime,
              lastCommentTime
            );
          }
        }

        return {
          ...item,
          mostRecentCommentTime,
          votes: likes.length,
        };
      })
    );

    setLoading(false);
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
              <DropdownMenu>
                <DropdownMenuTrigger
                  asChild
                  size={isMobile ? 'medium' : 'large'}
                >
                  <div className="group">
                    {selectedSortCriterionLabel}
                    <ChevronDown className="group-data-open:rotate-180" />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  size={isMobile ? 'medium' : 'large'}
                  className="bg-white"
                >
                  <DropdownMenuRadioGroup
                    value={selectedSortCriterionLabel}
                    onValueChange={(value) => sortCards(value)}
                    asChild
                  >
                    <div className="flex flex-col gap-2">
                      {sortingConfigs.map((config) => (
                        <DropdownMenuRadioItem
                          key={config.label}
                          value={config.label}
                        >
                          {config.label}
                        </DropdownMenuRadioItem>
                      ))}
                    </div>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
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
