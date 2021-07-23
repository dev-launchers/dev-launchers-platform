// Natural Language Processing Utilities
import pluralize from "pluralize";
// import natural from "natural"; // Natural@0.6.3 language processing package
import articles from "articles"; // Article of speech package

import contentDictionary from "./contentDictionary";

// idea generating functions
// var nounInflector = new natural.NounInflector(); // For making things plural
const { articlize } = articles; // For adding articles to nouns (a or an)

export function getRandomEntry(array) {
  return array[Math.floor(parseInt(Math.random() * array.length, 10))];
}

export function isPlural(func) {
  return () => {
    const result = func();
    return pluralize(result);
  };
}

export function hasArticle(func) {
  return () => articlize(func());
}

export function getRandomEntity(entityType) {
  return getRandomEntry(contentDictionary[entityType]);
}

export function randEntity(entityType) {
  return () => {
    const entity =
      typeof entityType === "object" ? getRandomEntry(entityType) : entityType;
    return getRandomEntity(entity);
  };
}

export function getRandomPhrase(phraseFormats) {
  const phraseEntry = getRandomEntry(phraseFormats);
  return phraseEntry
    .map((entity) => (typeof entity === "function" ? entity() : entity))
    .join("");
}

export function getRandomTheme() {
  return getRandomEntity("theme");
}
