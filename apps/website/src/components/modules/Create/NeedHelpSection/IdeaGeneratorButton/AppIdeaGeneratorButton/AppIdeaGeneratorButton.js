import React from "react";

import IdeaGeneratorButton from "../IdeaGeneratorButton";

import { getRandomPhrase, randEntity, isPlural } from "../nlpUtils";

const phraseFormats = [
  [randEntity("app"), " for ", isPlural(randEntity("job"))],
  [randEntity("app"), " for ", isPlural(randEntity("appAudience"))],
];

const gamePhraseGenerator = () => <div>{getRandomPhrase(phraseFormats)}</div>;

export default function AppIdeaGeneratorButton() {
  return (
    <IdeaGeneratorButton contentGenerator={gamePhraseGenerator}>
      💡 Generate An App Idea!
    </IdeaGeneratorButton>
  );
}
