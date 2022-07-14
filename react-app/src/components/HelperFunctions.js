//eventual location of helper functions to export throughout the app
const Heart = require('./images/cards/Heart.jpg');


export const cardIdentifier = (card) => {
    let suit;
    let playerImage = document.createElement('img');

    // 	img.src = ("img/cards/" + playerHand[0] + ".png");
// 	img2.src = ("img/cards/" + compHand[0] + ".png");

    if (card.split('').includes('H')) {
        suit = 'Heart';
        // playerImage.src = ();
        // // console.log(playerImage.src);
        // let src = document.getElementById('img')
        // src.appendChild(playerImage);
    }

    if (card.split('').includes('D')) {
        suit = 'Diamond';
    }

    if (card.split('').includes('S')) {
        suit = 'Spade';
    }

    if (card.split('').includes('C')) {
        suit = 'Club';
    }

    if (parseInt(card.slice(1)) === 11) {
        card = 'Jack';
    }

    else if (parseInt(card.slice(1)) === 12) {
        card = 'Queen';
    }

    else if (parseInt(card.slice(1)) === 13) {
        card = 'King';
    }

    else if (parseInt(card.slice(1)) === 14) {
        card = 'Ace';
    }

    else {
        card = parseInt(card.slice(1).toString())
    };

    // return card + suit;
    return suit
};