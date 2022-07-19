import React from "react";
import heart from "../components/images/cards/Heart.jpg";
import diamond from '../components/images/cards/Diamond.jpg';
import club from '../components/images/cards/Club.jpg';
import spade from '../components/images/cards/Spade.jpg';
import background from '../components/images/cards/DefaultBackground.jpg';
import './Card.css';

const Card = ({ gameState }) => {

    const getCardSymbol = (suits) => {
        let symbol = background;
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

    const imgState = gameState.player1CardInfo.length ? 'player-card-image' : 'card-back'

    return (
        <div className='player-cards-container'>
            <div className='individual-card'>
                {<img className={imgState} src={getCardSymbol(gameState.player1CardInfo[0])} alt={background}></img>}
                {gameState.player1CardInfo && <img className='bottom-card-image' src={getCardSymbol(gameState.player1CardInfo[0])} alt={background}></img>}
            </div>
            <div className='individual-card'>
                {<img className={imgState} src={getCardSymbol(gameState.player2CardInfo[0])} alt={background}></img>}
                {gameState.player2CardInfo && <img className='bottom-card-image' src={getCardSymbol(gameState.player2CardInfo[0])} alt={background}></img>}
            </div>
        </div>
    );
};

export default Card;