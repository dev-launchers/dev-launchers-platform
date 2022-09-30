import React from "react";
import CircularIndeterminateLoader from "../Loader/CircularIndeterminateLoader";
import IdeaCard from "./IdeaCard";
import StyledIdeaCards from "./StyledIdeaCards/StyledIdeaCards";
import { TextCardTitleBox } from "./StyledIdeaCard";
import StyledCardsWrapper from "../CardsWrapper/StyledCardsWrapper";
import axios from "axios";
import { env } from "../../utils/EnvironmentVariables";
import ProjectFilter from "./ProjectFilter/ProjectFilter";
import Grid from "@mui/material/Grid";

function IdeaCardList() {
  const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [lastUpdatedSortOrder, setLastUpdatedSortOrder] = React.useState("");
  const [sortedCards, setSortedCards] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`${env().API_URL}/idea-cards`, {
        withCredentials: true,
      })
      .then((response) => {
        const getCards = response.data.map((item) => {
          return item;
        });

        setLoading(false);
        console.log(JSON.stringify(getCards, null, 2));
        setCards(getCards);
      });
  }, []);

  const handleSetFilteredCards = (filteredCardList) => {
    setSortedCards(filteredCardList);
  };

  const sortIdeaCards = (order, criteria) => {
    console.log(`lastUpdatedSortOrder is ${criteria}`);
    let ideaCardsClone = JSON.parse(JSON.stringify(cards));
    if (order === "ascending") {
      ideaCardsClone.sort((a, b) => {
        return a[criteria] < b[criteria]
          ? -1
          : a[criteria] > b[criteria]
          ? 1
          : 0;
      });
    } else {
      ideaCardsClone.sort((a, b) => {
        return a[criteria] > b[criteria]
          ? -1
          : a[criteria] < b[criteria]
          ? 1
          : 0;
      });
    }
    console.log(ideaCardsClone);
    ideaCardsClone.forEach((element) => {
      console.log(element);
    });
    handleSetFilteredCards(ideaCardsClone);
  };

  const handleSetLastUpdatedSortOrderChange = (e) => {
    if (e.target.id === "clearSort") {
      setLastUpdatedSortOrder("");
      const emptyArray = [];
      setSortedCards(emptyArray);
      return;
    }
    setLastUpdatedSortOrder(e.target.value);
    sortIdeaCards(e.target.value, "updated_at");
  };

  return (
    <StyledIdeaCards>
      {loading === true ? (
        ""
      ) : (
        <ProjectFilter
          handleSetLastUpdatedSortOrderChange={
            handleSetLastUpdatedSortOrderChange
          }
          lastUpdatedSortOrder={lastUpdatedSortOrder}
        />
      )}
      <StyledCardsWrapper>
        {sortedCards.length > 0
          ? sortedCards.map((item) => {
              return (
                <IdeaCard
                  key={item.id}
                  cards={item}
                  setSelectedCard={setSelectedCard}
                />
              );
            })
          : cards.map((item) => {
              return (
                <IdeaCard
                  key={item.id}
                  cards={item}
                  setSelectedCard={setSelectedCard}
                />
              );
            })}
        {loading ? (
          <CircularIndeterminateLoader text="Loading..." color="black" />
        ) : (
          ""
        )}
      </StyledCardsWrapper>
    </StyledIdeaCards>
  );
}

export default IdeaCardList;