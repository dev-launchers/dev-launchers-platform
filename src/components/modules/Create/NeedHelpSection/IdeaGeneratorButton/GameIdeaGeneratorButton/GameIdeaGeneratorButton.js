import React from "react";

import IdeaGeneratorButton from "../IdeaGeneratorButton";

import {
  getRandomPhrase,
  getRandomTheme,
  randEntity,
  isPlural,
  hasArticle
} from "../nlpUtils.js";

export default function GameIdeaGeneratorButton(props) {
  return (
    <IdeaGeneratorButton contentGenerator={appPhraseGenerator}>
      💡 Generate A Game Concept!
    </IdeaGeneratorButton>
  );
}

const phraseFormats = [
  [
    randEntity("game"),
    " game ",
    randEntity("agentPreposition"),
    " ",
    isPlural(randEntity("job"))
  ],

  // BLANK game PREPOSITION a LOCATION
  [randEntity("game"), " game in ", hasArticle(randEntity("inLocation"))],
  [randEntity("game"), " game on ", hasArticle(randEntity("onLocation"))],

  // BLANK game for JOB PREPOSITION a LOCATION
  [
    randEntity("game"),
    " game ",
    randEntity("agentPreposition"),
    " ",
    isPlural(randEntity("job")),
    " in ",
    hasArticle(randEntity("inLocation"))
  ],
  [
    randEntity("game"),
    " game ",
    randEntity("agentPreposition"),
    " ",
    isPlural(randEntity("job")),
    " on ",
    hasArticle(randEntity("onLocation"))
  ],

  // BLANK game for JOB PREPOSITION a LOCATION
  [
    randEntity("game"),
    " game in ",
    hasArticle(randEntity("inLocation")),
    " ",
    randEntity("agentPreposition"),
    " ",
    isPlural(randEntity(["job", "animal", "food"]))
  ],
  [
    randEntity("game"),
    " game on ",
    hasArticle(randEntity("onLocation")),
    " ",
    randEntity("agentPreposition"),
    " ",
    isPlural(randEntity(["job", "animal", "food"]))
  ]
];

const appPhraseGenerator = () => {
  return (
    <div>
      <div style={{ fontSize: "3rem" }}>{getRandomTheme()}</div>
      {getRandomPhrase(phraseFormats)}
    </div>
  );
};
