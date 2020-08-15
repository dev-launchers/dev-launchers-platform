import React from "react";
import natural from "natural"; // Natural language processing package
import articles from "articles"; // Article of speech package

import Modal from "../../../../../components/common/Modal";

import style from "./IdeaGeneratorButton.module.css";

export default function IdeaGeneratorButton(props) {
  // Modal state management
  const [modalContent, setModalContent] = React.useState("content");
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  const openIdeaModal = () => {
    setModalContent(
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "5rem",
          backgroundColor: "rgb(255,255,255)",
          fontWeight: "bold",
          textAlign: "center"
        }}
      >
        <div style={{ fontSize: "3rem" }}>{getRandomTheme()}</div>
        {getRandomPhrase()}
      </div>
    );
    openModal();
  };

  return (
    <div className={style.ideaGeneratorButton}>
      <Modal
        modalContent={modalContent}
        modalIsOpen={modalIsOpen}
        openModal={openModal}
        closeModal={closeModal}
      ></Modal>
      <div style={{ width: "100%", height: "100%" }} onClick={openIdeaModal}>
        💡 Generate A Game Concept!
      </div>
    </div>
  );
}

// idea generating functions

const entityDictionary = {
  theme: [
    "Happy",
    "Sad",
    "Atmospheric",
    "Action Packed",
    "Playful",
    "Serious",
    "Sinister",
    "Comedic",
    "Romantic",
    "Relaxing",
    "Immersive",
    "Mobile"
  ],
  game: [
    "Platformer",
    "RPG",
    "Pong",
    "Virtual Pet",
    "Clicker",
    "Arcade",
    "Simulation",
    "Action",
    "Action-Adventure",
    "Strategy",
    "Sports",
    "Puzzle",
    "Shooter",
    "Fighting",
    "Beat Em Up",
    "Stealth",
    "Survival",
    "Rhythm",
    "Horror",
    "Metroidvania",
    "Text-Based",
    "Visual Novel",
    "Rouguelike",
    "Sandbox",
    "Tower Defense",
    "Battle Arena",
    "Racing",
    "Trivia",
    "Casual",
    "Party"
  ],
  job: [
    "Nun",
    "Developer",
    "Executive",
    "Hiring Manager",
    "Pilot",
    "Teacher",
    "CEO",
    "Ringmaster",
    "Trapeze Artist",
    "Lion Tamer",
    "Dog Trainer",
    "Plumber",
    "Electrician",
    "Optometrist",
    "Carpenter",
    "Student",
    "Hitman",
    "Dentist",
    "Principal",
    "Linguist",
    "Builder",
    "Youtuber",
    "Streamer",
    "Chef",
    "Graphic Designer",
    "Waiter",
    "Bartender",
    "Dog Walker",
    "Writer",
    "Reporter",
    "Weatherman",
    "Coach",
    "President",
    "Scientist",
    "Car Salesman",
    "Baby Sitter",
    "Entrepreneur",
    "Baby"
  ],
  inLocation: [
    "Jungle",
    "Toilet",
    "Tree",
    "Space",
    "Dog House",
    "Swimming Pool",
    "City",
    "Hospital Room",
    "College",
    "Dungeon",
    "Bedroom",
    "Grotto",
    "Cave",
    "Field",
    "Police Car",
    "Jail",
    "Shopping Center",
    "Football Stadium",
    "Apartment",
    "Chipotle",
    "Dog Park",
    "Forest",
    "Graveyard",
    "Church",
    "Airplane",
    "Prison",
    "Bar"
  ],
  onLocation: ["Mountain Top", "Beach", "Island", "Rooftop"],
  animal: [
    "Sheep",
    "Snake",
    "Porcuppine",
    "Wolf",
    "Dog",
    "Puppy",
    "Cat",
    "Kitten",
    "Ocelot",
    "Eagle",
    "Chicken"
  ],
  food: [
    "Pizza",
    "Mac n Cheese",
    "Oatmeal",
    "Spaghetti",
    "Salad",
    "Ice Cream",
    "Popcorn",
    "Potatoe",
    "Corn",
    "Cucumber",
    "Tomatoe",
    "Sunflower Seed",
    "Chicken",
    "Pierogi"
  ],
  verbs: ["Drink"],
  adjectives: ["Drunk"]
};

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
  return getRandomEntry(entityDictionary[entityType]);
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
