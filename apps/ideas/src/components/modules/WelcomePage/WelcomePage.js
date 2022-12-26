import React, { useState } from 'react';
import './WelcomePage.css';
//import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid';

import submitButtonImage from '../../../images/submit-image.png';
import helpButtonImage from '../../../images/help-image.png';

import {
  Button,
  Description,
  ButtonArea,
  StyledLink,
  WelcomeNavigationButtonImage
} from './StyledWelcomePage';

function WelcomePage() {
  // return (
  //   <Grid container spacing={2}>
  //     <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>

  //       <div id="welcomeWrapper">
  //         <h1 style={{width:"100%",textAlign:"center"}}>
  //           IdeaSpace (Beta)
  //         </h1>
  //         <SubmitIdea />
  //       </div>

  //     </Grid>
  //   </Grid>
  // )

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <h1 style={{textAlign:"center",marginLeft:"auto",marginRight:"auto"}}>
          IdeaSpace (Beta)
        </h1>
        <Description>
          Have an idea for a development project?
          <br />
          Want to help develop an idea?
          <br />
          Let’s get started!
        </Description>

        <ButtonArea>
          <StyledLink href="/ideaspace/submit">
            <Button>
              <div
                style={{ height: '20%', display: 'flex', alignItems: 'center' }}
              >
                Submit Your Idea!
              </div>
              <WelcomeNavigationButtonImage src={submitButtonImage} />
            </Button>
          </StyledLink>

          <StyledLink href="/ideaspace/browse">
            <Button>
              <div
                style={{ height: '20%', display: 'flex', alignItems: 'center' }}
              >
                Help Dev Launchers Members With Their Ideas!
              </div>
              <WelcomeNavigationButtonImage src={helpButtonImage} />
            </Button>
          </StyledLink>
        </ButtonArea>
      </Grid>
    </Grid>
  );
}

export default WelcomePage;
