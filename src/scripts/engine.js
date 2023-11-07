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

    actions: {
        button: document.getElementById("next-duel"),
    }

};

const playerSide = {
    player1: "player-cards",
    computer: "computer-cards",
}
const pathImage = "./src/assets/icons/";
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

async function getRandomCardId() {
    const randomIndex = Math.floor(Math.random() * cardData.length);
    return cardData[randomIndex].id;
}

async function drawSelectCard(idCard){
    state.cardSprites.avatar.src = cardData[idCard].img;
    state.cardSprites.name.innerText = cardData[idCard].name;
    state.cardSprites.type.innerText = `Attribute: ${cardData[idCard].type}`;
}

async function createCardImage(idCard, fieldSide) {
    const cardImage = document.createElement("img");
    cardImage.setAttribute("height", "100px");
    cardImage.setAttribute("src", "./src/assets/icons/card-back.png");
    cardImage.setAttribute("data-id", idCard);
    cardImage.classList.add("card");

    if (fieldSide === playerSide.player1) {
        cardImage.addEventListener("click", () => {
            setCardField(cardImage.getAttribute("data-id"));
        });

        cardImage.addEventListener("mouseover", () => {
            drawSelectCard(idCard);
        });
    }

    return cardImage;
}

async function drawCards(cardNumber, fieldSide) {
    for (let i = 0; i < cardNumber; i++) {
        const randomIdCard = await getRandomCardId();
        const cardImage = await createCardImage(randomIdCard, fieldSide);
        document.getElementById(fieldSide).appendChild(cardImage);
    }
}

function init() {
    drawCards(5, playerSide.player1);
    drawCards(5, playerSide.computer);
}

init();