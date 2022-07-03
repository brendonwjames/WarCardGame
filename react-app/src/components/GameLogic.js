import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Tabletop from "./Tabletop";

const GameLogic = () => {
    const dispatch = useDispatch();
    const player1 = useSelector(state => state.session.user);

    const [player1Cards, setPlayer1Cards] = useState([]);
    const [player2Cards, setPlayer2Cards] = useState([]);
    const [activeGame, setActiveGame] = useState(false);
    const [cardsToWin, setCardsToWin] = useState([]);
    const [currentCard1, setCurrentCard1] = useState();
    const [currentCard2, setCurrentCard2] = useState();
    const [player1CardInfo, setPlayer1CardInfo] = useState('C4');
    const [player2CardInfo, setPlayer2CardInfo] = useState('D1');


    const deck = [
        'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10', 'C11', 'C12', 'C13', 'C14',
        'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'S9', 'S10', 'S11', 'S12', 'S13', 'S14',
        'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'H10', 'H11', 'H12', 'H13', 'H14',
        'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10', 'D11', 'D12', 'D13', 'D14'
    ];

    function dealCards(deck) {
        setActiveGame(true);
        setPlayer1Cards(deck.slice(0, 26));
        setPlayer2Cards(deck.slice(26));
        setCardsToWin([]);
    };

    function checkWin(player1Cards, player2Cards) {
        if (player1Cards.length === 52) {
            alert('Player 1 has won the game!');
            setActiveGame(false);
        };
        if (player2Cards.length === 52) {
            alert('Player 2 has won the game!');
            setActiveGame(false);
        };
    };

    function addToPlayersDeck(playerDeck, cardsToWin) {
        cardsToWin.map((card) => (
            playerDeck.push(card)
        ));

        console.log('P1:', player1Cards);
        console.log('P2:', player2Cards);
    };

    function shuffle(deck) {
        let count = deck.length;
        while (count) {
            deck.push(deck.splice(Math.floor(Math.random() * count), 1)[0]);
            count -= 1;
        };
        console.log('SHUFFLED:', deck);

        dealCards(deck);
    };

    useEffect(() => {
        console.log('P1 CARDS:', 'COUNT:', player1Cards);
        console.log('P2 CARDS:', 'COUNT:', player2Cards);

    }, [dealCards, playRound]);

    function playRound(p1Card, p2Card) {
        p1Card = player1Cards.shift();
        p2Card = player2Cards.shift();

        cardsToWin.push(p1Card); 
        cardsToWin.push(p2Card);

        console.log('CURRENT CARDS:', cardsToWin);

        console.log('NUMBER 1:', parseInt(cardsToWin[cardsToWin.length - 2].slice(1)));
        console.log('NUMBER 2:', parseInt(cardsToWin[cardsToWin.length - 1].slice(1)));

        setCurrentCard1(parseInt(cardsToWin[cardsToWin.length - 2].slice(1)));
        setCurrentCard2(parseInt(cardsToWin[cardsToWin.length - 1].slice(1)));

        setPlayer1CardInfo(cardsToWin[cardsToWin.length - 2]);
        setPlayer2CardInfo(cardsToWin[cardsToWin.length - 1]);

        if (currentCard1 === currentCard2) {
            alert('WAR!!');
            cardsToWin.push(player1Cards.shift());
            cardsToWin.push(player2Cards.shift());

            if (player1Cards.length === 0) {
                alert('Player 2 Wins!');
                setActiveGame(false);
            };

            if (player2Cards.length ===0) {
                alert('Player 1 Wins!');
                setActiveGame(false);
            };
            console.log('WARCARDS TO WIN:', cardsToWin);
        };

        if (currentCard1 !== currentCard2) {
            if (currentCard1 > currentCard2) {
                addToPlayersDeck(player1Cards, cardsToWin)
            } else {
                addToPlayersDeck(player2Cards, cardsToWin)
            };
            setCardsToWin([]);
        };

        checkWin(player1Cards, player2Cards);
    };




    return (
        <>
            {!activeGame && <button onClick={() => shuffle(deck)}>New Game</button>}
            {activeGame && 
                <div>
                    <button onClick={() => playRound(player1Cards, player2Cards)}>Play Round</button>
                    <Tabletop gameState={{ player1Cards, player2Cards, player1CardInfo, player2CardInfo }} />
                </div>}
        </>
    )

}

export default GameLogic;