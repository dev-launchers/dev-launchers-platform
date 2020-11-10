import React from "react";

import IdeaGeneratorButton from "../IdeaGeneratorButton";

import { getRandomPhrase, randEntity, isPlural } from "../nlpUtils.js";

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
