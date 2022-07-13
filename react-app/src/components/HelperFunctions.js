//eventual location of helper functions to export throughout the app

export const cardIdentifier = (card) => {
    let suit;
    let playerImage = document.createElement('img');
    let opponentImage = document.createElement('img');

    // 	img.src = ("img/cards/" + playerHand[0] + ".png");
// 	img2.src = ("img/cards/" + compHand[0] + ".png");

    if (card.split('').includes('H')) {
        suit = ' of Hearts';
        playerImage.src = ('../../public/images/cards/Heart.jpg');
        
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

// var img = document.createElement('img');
// 	var img2 = document.createElement('img');

// 	img.src = ("img/cards/" + playerHand[0] + ".png");
// 	img2.src = ("img/cards/" + compHand[0] + ".png");

// 	//adds card image to the card slot of the game board
// 	$('.playerCard').append(img).animateCss("flipInYRev");
// 	$('.compCard').append(img2).animateCss("flipInY");