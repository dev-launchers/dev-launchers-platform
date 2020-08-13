import React from "react";
import natural from "natural"; // Natural language processing package
import articles from "articles"; // Article of speech package

import Modal from "../../../../components/common/Modal";

export default function IdeaGenerator(props) {
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
                    fontWeight: "bold"
                }}
            >
                <div style={{ fontSize: "3rem" }}>{getRandomTheme()}</div>
                {getRandomPhrase()}
            </div>
        );
        openModal();
    };

    return (
        <div style={{ margin: "3%" }}>
            <Modal
                modalContent={modalContent}
                modalIsOpen={modalIsOpen}
                openModal={openModal}
                closeModal={closeModal}
            ></Modal>
            <div style={{ width: "100%", backgroundColor: "transparent", textAlign: "left", padding: "1%" }}>
                <button
                    onClick={openIdeaModal}
                    style={{
                        fontSize: "2.5rem",
                        paddingLeft: "5%",
                        paddingRight: "5%",
                        cursor: "pointer",
                        border: "none",
                        backgroundColor: "rgb(230,230,255)"
                    }}
                >
                    Generate A Game Idea! 💡
                </button>
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
    game: ["Platformer", "RPG", "Pong", "Virtual Pet", "Clicker", "Arcade"],
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
    location: [
        "Jungle",
        "Toilet",
        "Tree",
        "Space",
        "Dog House",
        "Swimming Pool",
        "Mountain Top",
        "Beach",
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
        "Island",
        "Church",
        "Airplane",
        "Prison",
        "Bar",
        "Rooftop",
        "Hell"
    ],
    animal: ["Sheep", "Snake", "Porcuppine", "Wolf", "Dog", "Puppy", "Cat", "Kitten", "Ocelot", "Eagle", "Chicken"],
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
    [randEntity("game"), " game in ", hasArticle(randEntity("location"))],
    [randEntity("game"), " game for ", isPlural(randEntity("job")), " in ", hasArticle(randEntity("location"))],
    [
        randEntity("game"),
        " game in ",
        hasArticle(randEntity("location")),
        " with ",
        isPlural(randEntity(["job", "animal"]))
    ],
    [
        randEntity("game"),
        " game in ",
        hasArticle(randEntity("location")),
        " with ",
        isPlural(randEntity(["job", "animal"])),
        " centered around ",
        isPlural(randEntity(["job", "animal", "food", "location"]))
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
        let entity = typeof entityType === "object" ? getRandomEntry(entityType) : entityType;
        return getRandomEntity(entity);
    };
}
function getRandomEntity(entityType) {
    return getRandomEntry(entityDictionary[entityType]);
}

function getRandomPhrase() {
    let phraseEntry = getRandomEntry(phraseFormats);
    return phraseEntry
        .map(entity => {
            return typeof entity === "function" ? entity() : entity;
        })
        .join("");
}
function getRandomTheme() {
    return getRandomEntity("theme");
}
