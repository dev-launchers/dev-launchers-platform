import React from 'react'
import CircularIndeterminateLoader from '../Loader/CircularIndeterminateLoader'
import IdeaCard from './IdeaCard/IdeaCard'
import axios from "axios";
import { env } from "../../../utils/EnvironmentVariables";
import Grid from '@mui/material/Grid';

import {PageWrapper, CardsWrapper} from './StyledBrowseIdeas'



function BrowseIdeas() {
  const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [loading, setLoading] = React.useState(true);


  React.useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/idea-cards`,  
      {
        withCredentials: true,
      }
    )
      .then(response => {
        const getCards = response.data.map((item) => {
          return item;
        });

        setLoading(false)
        setCards(getCards);
      });
  }, []);

  return (
    <PageWrapper>
      <CardsWrapper>
        {cards.map((item) => {
          return <IdeaCard key={item.id} cards={item} setSelectedCard={setSelectedCard} />
        })}
      </CardsWrapper>
        {loading === true ? 
          <CircularIndeterminateLoader 
            text="Loading..."
            color="white"
          />
          : 
          ""
        }
    </PageWrapper>
  )
}

export default BrowseIdeas;
