import "./styles.css";
import { useEffect } from 'react';
//import { Route, Switch, HashRouter } from 'react-router-dom';
import { Route, Switch, Router }  from 'next/router'
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/globals";
import SubmitIdeaForm from './components/SubmitIdea/SubmitIdeaForm';
import WelcomePage from './components/welcomepage.js';
import WorkshoppingPage from './components/WorkshoppingPage/WorkshoppingPage.js';
import Nav from './components/Nav/nav';
import SubmitForm from './components/submitform';
import React, { useState } from 'react';
import IdeaCardList from "./components/Card/IdeaCardList"
import Header from "./components/common/Header";
import RainbowBar from "./components/common/RainbowBar";

import theme from "./styles/theme";
import { initGA, logPageView } from './analytics/Analytics';


export default function App() {
  const [selectedCard, setSelectedCard] = useState({});


  useEffect(() => {
    initGA();
    logPageView();

  }, []);



  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Header />
          <RainbowBar />
          <Nav />
          <Switch>
            <Route exact path="/" component={WelcomePage} />
            <Route exact path="/form" component={SubmitIdeaForm}>
              <SubmitIdeaForm />
            </Route>
            <Route exact path="/test" component={SubmitForm}>
              <SubmitForm />
            </Route>
            <Route exact path="/cards">
              <IdeaCardList/>
            </Route>
            <Route exact path="/workshopping/:id">
              <WorkshoppingPage ideaName={selectedCard.ideaName} selectedCard={selectedCard} />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </div >
  );
}
