const state = {
    score: {
        playerScore: 0,
        computerScore: 0,
        scoreBox: document.getElementById("score_points"),
    },

    cardSprites: {
        avatar: document.getElementById("card-image"),
        name: document.getElementById("card-name"),
        type: document.getElementById("card-type"),
    },

    fieldCards: {
        player: document.getElementById("player-infield-cards"),
        computer: document.getElementById("computer-infield-cards"),
    },

    actions:{
        button:document.getElementById("next-duel"),
    }

};

const pathImage = ".src/assets/icons/";
const cardData = [
    {
        id: 0,
        name: "Blue Eyes White Dragon",
        type: "Paper",
        img: `${pathImage}dragon.png`,
        winOf: [1],
        loseOf: [2],
    },
    {
        id: 1,
        name: "Dark magician",
        type: "Rock",
        img: `${pathImage}magician.png`,
        winOf: [2],
        loseOf: [0],
    },
    {
        id: 2,
        name: "Exodia",
        type: "Scissors",
        img: `${pathImage}exodia.png`,
        winOf: [0],
        loseOf: [1],
    },
];

function init() {
}

init();