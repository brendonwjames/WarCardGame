import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const NewGame = () => {
    const dispatch = useDispatch();
    const player1 = useSelector(state => state.session.user);


    const [player1Cards, setPlayer1Cards] = useState([]);
    const [player2Cards, setPlayer2Cards] = useState([]);
    const [activeGame, setActiveGame] = useState(false);

    const deck = [
    'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10', 'C11', 'C12', 'C13', 'C14',
    'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'S9', 'S10', 'S11', 'S12', 'S13', 'S14',
    'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'H10', 'H11', 'H12', 'H13', 'H14',
    'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10', 'D11', 'D12', 'D13', 'D14'];

    function dealCards(deck) {
        setActiveGame(true);
        setPlayer1Cards(deck.slice(0,26));
        setPlayer2Cards(deck.slice(26));
    };

    function checkWin(player1Cards, player2Cards) {
        if (player1Cards.length === 52) {
            alert('Player 1 has won the game!');
            setActiveGame(false);
        }
        if (player2Cards.length === 52) {
            alert('Player 2 has won the game!');
            setActiveGame(false);
        };
    };

    function shuffle(deck) {
        let count = deck.length;
        while(count) {
          deck.push(deck.splice(Math.floor(Math.random() * count), 1)[0]);
          count -= 1;
        };
        console.log('SHUFFLED:', deck);

        dealCards(deck);
    };

    useEffect(() => {
        console.log('P1 CARDS:', 'COUNT:',player1Cards);
        console.log('P2 CARDS:', 'COUNT:', player2Cards);

    }, [dealCards]);

    function playRound(p1Card, p2Card) {
        p1Card = player1Cards.shift();
        p2Card = player2Cards.shift();

        let currentCards = [p1Card, p2Card];
        console.log('CURRENT CARDS:', currentCards);

        currentCards.map((card) => (
            player2Cards.push(card)
        ));

        console.log(player1Cards);
        console.log(player2Cards);

        checkWin(player1Cards, player2Cards);
    };




return (
    <>
        {!activeGame && <button onClick={() => shuffle(deck)}>New Game</button>}
        {activeGame && <button onClick={() => playRound(player1Cards, player2Cards)}>Play Round</button>}
    </>
)

}

export default NewGame;