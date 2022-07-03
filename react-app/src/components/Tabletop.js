import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Tabletop = ({ gameState }) => {

    return (
        <>
            This is the Tabletop component
            <div>Player One Card Count: {gameState.player1Cards.length}</div>
            <div>Player Two Card Count: {gameState.player2Cards.length}</div>
            <div>Player One has played the {gameState.player1CardInfo}</div>
            <div>Player Two has played the {gameState.player2CardInfo}</div>
        </>
    )

}

export default Tabletop;