import React, { useState } from 'react';
import './submitIdea.css'
//import { Link } from 'react-router-dom'
import Link from 'next/link';
import { Router } from 'next/router';
import SubmitIdeaForm from '../SubmitIdea/SubmitIdeaForm'
import Grid from '@mui/material/Grid';

import submitButtonImage from "../../images/submit-image.png";
import helpButtonImage from "../../images/help-image.png";

import {
  Wrapper,
  Headline,
  Button,
  Test,
  Description,
  ButtonArea,
  StyledLink
} from './styledSubmitIdea';


function SubmitIdea() {

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Description>
          Have an idea for a development project?<br />
          Want to help develop an idea?<br />
          Let’s get started!
        </Description>

        <ButtonArea>
          <StyledLink href="/ideas/form">
            <Button>
              <div style={{height:"20%", display:"flex", alignItems:"center"}}>
                Submit Your Idea!
              </div>
              <img src={submitButtonImage} style={{height:"70%"}} />
            </Button>
          </StyledLink>


          <StyledLink href="/ideas/cards">
            <Button>
              <div style={{height:"20%", display:"flex", alignItems:"center"}}>
                Help Dev Launchers Members With Their Ideas!
              </div>
              <img src={helpButtonImage} style={{height:"70%"}} />
            </Button>
          </StyledLink>
        </ButtonArea>
      </Grid>
    </Grid>
  );
  

}

export default SubmitIdea;