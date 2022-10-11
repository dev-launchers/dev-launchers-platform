import render from 'dom-serializer';
import React from 'react';
import SubmitIdea from '../components/SubmitIdea/SubmitIdea';
import Grid from '@mui/material/Grid';

import ReactGA from "react-ga";






export default function WelcomePage() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>

        <div id="welcomeWrapper">
          <h1 style={{width:"100%",textAlign:"center"}}>
            IdeaSpace (Beta)
          </h1>
          <SubmitIdea />
        </div>

      </Grid>
    </Grid>
  )
}