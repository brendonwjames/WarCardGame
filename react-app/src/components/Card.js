import React from "react";

// import backCardImg from "../components/images/backCardImg.png";
import heart from "../components/images/cards/Heart.jpg";
import diamond from '../components/images/cards/Diamond.jpg';
import club from '../components/images/cards/Club.jpg';
import spade from '../components/images/cards/Spade.jpg';
import './Card.css';

const Card = ({ gameState }) => {

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
        <div className='player-cards-container'>
            <div className='individual-card'>
                {gameState.player1CardInfo && <img className='player-card-image' src={getCardSymbol(gameState.player1CardInfo[0])} alt='broken'></img>}
            </div>
            <div className='individual-card'>
                {gameState.player2CardInfo && <img className='player-card-image' src={getCardSymbol(gameState.player2CardInfo[0])} alt='broken'></img>}
            </div>
        </div>
    );
};

export default Card;