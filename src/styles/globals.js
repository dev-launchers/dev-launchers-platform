import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import theme from "./theme.js";

const GlobalStyle = createGlobalStyle`
    ${normalize}

html,
body {
  padding: 0;
  margin: 0;
  /*font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;*/
  font-family: sans-serif;
  font-family: "Nunito", sans-serif;
  font-weight: lighter;
  color: ##1c1c1c;
  background-color: #f0edee;
}

html {
  display: flex;
  width: 100%;
  min-height: 100%;
  /*overflow: auto;*/
}

body {
  min-height: 100%;
  margin: 0px;
  width: 100%;
  height: 100%;
  font-size: 1.5rem;
}

#root {
  overflow-x: hidden;
}

.App {
  font-family: sans-serif;
  font-family: "Nunito Sans", sans-serif;
  text-align: left;
}

a {
  width: auto;
  display: inline;
  color: #d9d9d9;
  text-decoration: none;
  &:hover {
    color: rgb(255, 217, 0);
  }
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

h1 {
  font-family: "Abel", sans-serif;
  line-height: 1em;
  margin-top: 4%;
  margin-bottom: 4%;

  width: fit-content;
  padding: 1rem;
  background-color:${theme.colors.NEUTRAL_1};
  color:${theme.colors.NEUTRAL_2};
}

h2 {
  font-family: "Abel", sans-serif;
}

h3 {
  font-size: 2.5rem;
  font-weight: bold;
}

/*
* {
  box-sizing: border-box;
}
*
.toast-container {
}
.toast {
  background-color: white;
  color: #1c1c1c;
}
.toast-progress {
  background: black !important;
}

/* collections default to small-cards for entry elements */
.collection {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.entry {
  margin: 1.5%;
  /*border: 2px solid #1c1c1c;*/
  width: 30%;

  border-radius: 2px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
.collection--small-cards > .entry {
  /* Allows us to control card size with just the collection element's class */
  width: 30%;
}
.collection--large-cards > .entry {
  /* Allows us to control card size with just the collection element's class */
  width: 90%;
}

.entry-heading {
  width: 100%;
  font-size: 2rem;
  background-color: #1c1c1c;
}
.entry-title {
  margin-left: 4%;
}
.entry-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.entry-image-holder {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.entry-image {
  background-color: red;
  height: 10vw;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  /* padding-bottom: 42.5%; */
  cursor: pointer;
}
.entry-description {
  width: 90%;
}

/* Special collection--large-cards overrides */
.collection--large-cards > .entry > .entry-content {
  flex-direction: row;
  justify-content: space-between;
}
.collection--large-cards > .entry > .entry-content > .entry-image-holder {
  width: 30%;
  height: 100%;
}
.collection--large-cards > .entry > .entry-content > .entry-description {
  width: 70%;
}

.entry-image-holder a div {
  /* temp to push image placeholders down */
  padding-right: 15vw;
  background-color: lightgray;
}

@media (orientation: portrait) {
  html {
    /* Scale all font down */
    font-size: 75%;
  }

  .App {
  }

  h1 {
    font-size: 1.7rem;
  }

  h2 {
    font-size: 1.2rem;
  }

  .collection--small-cards > .entry {
    width: 100%;
  }
  .entry-image {
    height: 20vw;
  }
}

li {
  margin-bottom: 5px;
}
`;
export default GlobalStyle;
