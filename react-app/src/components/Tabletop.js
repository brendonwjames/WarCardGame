import React from "react";
import './Tabletop.css';

const Tabletop = ({ gameState }) => {

    return (
        <div className='page-container'>
            {gameState.warState && <div className='war-message'>WAR!!</div>}
            {!gameState.warState && <div className='war-message'>Regular Play</div>}
            <div className='players'>
                <div className='player-box'>
                    <div>Player One Card Count: {gameState.player1Cards.length}</div>
                    <div>Card Played</div>
                    <div> {gameState.player1CardInfo}</div>
                </div>
                <div className='player-box'>
                    <div>Player Two Card Count: {gameState.player2Cards.length}</div>
                    <div>Card Played</div>
                    <div>{gameState.player2CardInfo}</div>
                </div>
            </div>
        </div>
    );
};

export default Tabletop;