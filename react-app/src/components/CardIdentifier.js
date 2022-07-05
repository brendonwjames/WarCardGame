const cardIdentifier = (card) => {
    let suit;


    if (card.split('').includes('H')) {
        suit = ' of Hearts';
    }

    if (card.split('').includes('D')) {
        suit = ' of Diamonds';
    }

    if (card.split('').includes('S')) {
        suit = ' of Spades';
    }

    if (card.split('').includes('C')) {
        suit = ' of Clubs';
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

    return card + suit;
};

export default cardIdentifier;