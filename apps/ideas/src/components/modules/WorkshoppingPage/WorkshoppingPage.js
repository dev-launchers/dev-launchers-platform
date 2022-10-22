import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useLocation } from 'react-router-dom'
import CommentList from './DisplayComments';
import CommentForm from './CommentForm';
import IdeaOverview from './IdeaOverview';
import LeaderInfo from './LeaderInfo';
import { env } from '../../../utils/EnvironmentVariables';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularIndeterminateLoader from '../Loader/CircularIndeterminateLoader'

import axios from 'axios';

import {
  Container,
  Form,
  Comments
} from './StyledComments.js';

function WorkshoppingPage(props) {
  const [data, setData] = useState(
    {
      ideaName:'',
      discord:'',
      description:'',
      email:'',
      created_at: '',
      comments: [''],
    }
  );
  // const location = useLocation();
  // const pathname = location.pathname;
  // const ideaId = pathname.slice(14, 19);
  const router = useRouter()
  const { ideaId } = router.query;

  const [handleChange, setHandleChange] = useState('');
  const [handleTextChange, setHandleTextChange] = useState('');
  const [loading, setLoading] = React.useState(true);


  useEffect(() => {
    if (ideaId) {
      axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/idea-cards/${ideaId}`)
        .then(response => {
          if (response.status === 200 ) {
            setLoading(false)
            setData(response.data)
          }
        })
    }
  }, [ideaId])



  return (
      <Container>
        <div >

        {loading === true ? 
          <CircularIndeterminateLoader 
            text="Loading..."
            color="white"
          />
          : 
          ""
        }
          <div>
            <IdeaOverview selectedCard={data} />
          </div>

          <Form>
            <CommentForm setHandleChange={setHandleChange} data={data} setData={setData} handleChange={handleChange} setHandleTextChange={setHandleTextChange} handleTextChange={handleTextChange} selectedCard={data} />
          </Form>

          <Comments>
            <CommentList data={data} selectedCard={data} />
          </Comments>
        </div>

        <div>
          <div>
            <LeaderInfo selectedCard={data} />
          </div>
        </div>
      </Container>
  );
}

export default WorkshoppingPage;