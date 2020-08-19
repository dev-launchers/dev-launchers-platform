import React from "react";
import natural from "natural"; // Natural language processing package
import articles from "articles"; // Article of speech package

import style from "./GameIdeaGeneratorButton.module.css";
import IdeaGeneratorButton from "../IdeaGeneratorButton";
import contentDictionary from "../contentDictionary.js";

export default function GameIdeaGeneratorButton(props) {
  const gamePhraseGenerator = () => {
    return (
      <div>
        <div style={{ fontSize: "3rem" }}>{getRandomTheme()}</div>
        {getRandomPhrase()}
      </div>
    );
  };

  return (
    <IdeaGeneratorButton contentGenerator={gamePhraseGenerator}>
      💡 Generate A Game Concept!
    </IdeaGeneratorButton>
  );
}

// idea generating functions
var nounInflector = new natural.NounInflector(); // For making things plural
var articlize = articles.articlize; // For adding articles to nouns (a or an)

const phraseFormats = [
  [randEntity("game"), " game for ", isPlural(randEntity("job"))],

  // BLANK game PREPOSITION a LOCATION
  [randEntity("game"), " game in ", hasArticle(randEntity("inLocation"))],
  [randEntity("game"), " game on ", hasArticle(randEntity("onLocation"))],

  // BLANK game for JOB PREPOSITION a LOCATION
  [
    randEntity("game"),
    " game for ",
    isPlural(randEntity("job")),
    " in ",
    hasArticle(randEntity("inLocation"))
  ],
  [
    randEntity("game"),
    " game for ",
    isPlural(randEntity("job")),
    " on ",
    hasArticle(randEntity("onLocation"))
  ],

  // BLANK game for JOB PREPOSITION a LOCATION
  [
    randEntity("game"),
    " game in ",
    hasArticle(randEntity("inLocation")),
    " with ",
    isPlural(randEntity(["job", "animal", "food"]))
  ],
  [
    randEntity("game"),
    " game on ",
    hasArticle(randEntity("onLocation")),
    " with ",
    isPlural(randEntity(["job", "animal", "food"]))
  ]
];

function getRandomEntry(array) {
  return array[Math.floor(parseInt(Math.random() * array.length))];
}

// Curried function: makes entity plural
function isPlural(func) {
  return () => {
    let result = func();
    console.log(result);
    return nounInflector.pluralize(result);
  };
}
// Curried function: adds article to entity
function hasArticle(func) {
  return () => {
    return articlize(func());
  };
}

function randEntity(entityType) {
  return () => {
    let entity =
      typeof entityType === "object" ? getRandomEntry(entityType) : entityType;
    return getRandomEntity(entity);
  };
}
function getRandomEntity(entityType) {
  return getRandomEntry(contentDictionary[entityType]);
}

function getRandomPhrase() {
  let phraseEntry = getRandomEntry(phraseFormats);
  console.log(phraseEntry);
  return phraseEntry
    .map(entity => {
      return typeof entity === "function" ? entity() : entity;
    })
    .join("");
}
function getRandomTheme() {
  return getRandomEntity("theme");
}
