//eventual location of helper functions to export throughout the app
const Heart = require('./images/cards/Heart.jpg');


export const cardIdentifier = (card) => {
    let suit;

    console.log('card identifier', card)

    if (card.split('').includes('H')) {
        suit = 'Heart';
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

    return [suit, card]
};