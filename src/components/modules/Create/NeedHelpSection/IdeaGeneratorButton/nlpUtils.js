// Natural Language Processing Utilities
import natural from "natural"; // Natural language processing package
import articles from "articles"; // Article of speech package

import contentDictionary from "./contentDictionary.js";

// idea generating functions
var nounInflector = new natural.NounInflector(); // For making things plural
var articlize = articles.articlize; // For adding articles to nouns (a or an)

export function getRandomEntry(array) {
  return array[Math.floor(parseInt(Math.random() * array.length))];
}

export function isPlural(func) {
  return () => {
    let result = func();
    console.log(result);
    return nounInflector.pluralize(result);
  };
}

export function hasArticle(func) {
  return () => {
    return articlize(func());
  };
}

export function randEntity(entityType) {
  return () => {
    let entity =
      typeof entityType === "object" ? getRandomEntry(entityType) : entityType;
    return getRandomEntity(entity);
  };
}

export function getRandomEntity(entityType) {
  return getRandomEntry(contentDictionary[entityType]);
}

export function getRandomPhrase(phraseFormats) {
  let phraseEntry = getRandomEntry(phraseFormats);
  console.log(phraseEntry);
  return phraseEntry
    .map(entity => {
      return typeof entity === "function" ? entity() : entity;
    })
    .join("");
}

export function getRandomTheme() {
  return getRandomEntity("theme");
}
