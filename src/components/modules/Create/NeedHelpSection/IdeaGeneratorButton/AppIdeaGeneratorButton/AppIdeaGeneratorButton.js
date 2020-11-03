import React from "react";
import articles from "articles"; // Article of speech package

import style from "./AppIdeaGeneratorButton.module.css";
import IdeaGeneratorButton from "../IdeaGeneratorButton";
import contentDictionary from "../contentDictionary.js";

import {
  getRandomPhrase,
  randEntity,
  isPlural,
  hasArticle
} from "../nlpUtils.js";

export default function AppIdeaGeneratorButton(props) {
  return (
    <IdeaGeneratorButton contentGenerator={gamePhraseGenerator}>
      💡 Generate An App Idea!
    </IdeaGeneratorButton>
  );
}

const phraseFormats = [
  [randEntity("app"), " for ", isPlural(randEntity("job"))],
  [randEntity("app"), " for ", isPlural(randEntity("appAudience"))]
];

const gamePhraseGenerator = () => {
  return <div>{getRandomPhrase(phraseFormats)}</div>;
};
