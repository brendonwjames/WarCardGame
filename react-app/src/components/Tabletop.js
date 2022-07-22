import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import './Tabletop.css';

const Tabletop = ({ gameState }) => {
    const player1 = useSelector(state => state.session.user);

    return (
        <div className='page-container'>
            {gameState.warState && <div className='war-message'>WAR!!</div>}
            {!gameState.warState && <div className='war-message'>Regular Play</div>}
            <div className='players'>
                <div className='player-box'>
                    <div>{player1.username} Card Count</div>
                    <div>{gameState.player1Cards.length}</div>
                    <div>Card Played</div>
                    {gameState.player1CardInfo && <div>{gameState.player1CardInfo[1]} of {gameState.player1CardInfo[0]}s</div>}
                </div>
                <div className='player-box'>
                    <div>Computer Player Card Count</div>
                    <div>{gameState.player2Cards.length}</div>
                    <div>Card Played</div>
                    {gameState.player2CardInfo && <div>{gameState.player2CardInfo[1]} of {gameState.player2CardInfo[0]}s</div>}
                </div>
            </div>
            <Card gameState={gameState}/>
        </div>
    );
};

export default Tabletop;