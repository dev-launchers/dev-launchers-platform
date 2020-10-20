import React from "react";
import natural from "natural"; // Natural language processing package
import articles from "articles"; // Article of speech package

import style from "./GameIdeaGeneratorButton.module.css";
import IdeaGeneratorButton from "../IdeaGeneratorButton";
import contentDictionary from "../contentDictionary.js";

import { randEntity, isPlural, hasArticle } from "../nlpUtils.js";

export default function GameIdeaGeneratorButton(props) {
  return (
    <IdeaGeneratorButton phraseFormats={phraseFormats}>
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
