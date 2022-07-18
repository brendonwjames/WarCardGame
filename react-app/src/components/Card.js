import React from "react";

// import backCardImg from "../components/images/backCardImg.png";
import heart from "../components/images/cards/Heart.jpg";
import diamond from '../components/images/cards/Diamond.jpg';
import club from '../components/images/cards/Club.jpg';
import spade from '../components/images/cards/Spade.jpg';

const Card = ({ gameState }) => {

    // console.log(gameState, 'from the card component')

    const getCardSymbol = (suits) => {
        let symbol;
        switch (suits) {
            case "Diamond":
                return symbol = diamond;
            case "Heart":
                return symbol = heart;
            case "Club":
                return symbol = club;
            case "Spade":
                return symbol = spade;
            default:
                return symbol;
        };
    };

    return (
        <div>
            <div className="card-container">This is the card container</div>
            {gameState.player1CardInfo && <img className='player-card-image' src={getCardSymbol(gameState.player1CardInfo[0])} alt='broken'></img>}
            {gameState.player2CardInfo && <img className='player-card-image' src={getCardSymbol(gameState.player2CardInfo[0])} alt='broken'></img>}
        </div>
    );
};

export default Card;