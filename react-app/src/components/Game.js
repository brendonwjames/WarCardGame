import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Tabletop from "./Tabletop";
import { updateWins } from "../store/session";
import { cardIdentifier } from "./HelperFunctions";
import './Game.css';

const Game = () => {
    const dispatch = useDispatch();
    const player1 = useSelector(state => state.session.user);

    const [player1Cards, setPlayer1Cards] = useState([]);
    const [player2Cards, setPlayer2Cards] = useState([]);
    const [activeGame, setActiveGame] = useState(false);
    const [playerHasWon, setPlayerHasWon] = useState('');
    const [cardsToWin, setCardsToWin] = useState([]);
    const [player1CardInfo, setPlayer1CardInfo] = useState('');
    const [player2CardInfo, setPlayer2CardInfo] = useState('');
    const [warState, setWarState] = useState(false);


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

    function handleWin(email, username, wins, id) {
        const editedWin = { username, email, wins };
        dispatch(updateWins(id, editedWin));
    };

    function checkWin(player1Cards, player2Cards) {
        if (player1Cards.length === 52) {
            alert('Player 1 has won the game!');
            let email = player1.email;
            let username = player1.username;
            let wins = player1.wins;
            let id = player1.id;
            handleWin(email, username, wins, id);
            setActiveGame(false);
        };

        if (player2Cards.length === 52) {
            alert('The computer player has won the game!');

            async function fetchComputer() {
                const response = await fetch(`/api/users/1`);
                const computer = await response.json();
                return computer
            };

            fetchComputer().then(computer => {
                handleWin(computer.email, computer.username, computer.wins, computer.id);
            });

            setActiveGame(false);
        };
    };

    function addToPlayersDeck(playerDeck, cardsToWin) {
        cardsToWin.map((card) => (
            playerDeck.push(card)
        ));
        // console.log('P1:', player1Cards);
        // console.log('P2:', player2Cards);
    };

    function shuffle(deck) {
        let count = deck.length;
        while (count) {
            deck.push(deck.splice(Math.floor(Math.random() * count), 1)[0]);
            count -= 1;
        };
        // console.log('SHUFFLED:', deck);
        dealCards(deck);
    };

    function playRound(p1Card, p2Card) {
        p1Card = player1Cards.shift();
        p2Card = player2Cards.shift();

        cardsToWin.push(p1Card);
        cardsToWin.push(p2Card);

        // console.log('CURRENT CARDS:', cardsToWin);

        // console.log('NUMBER 1:', parseInt(cardsToWin[cardsToWin.length - 2].slice(1)));
        // console.log('NUMBER 2:', parseInt(cardsToWin[cardsToWin.length - 1].slice(1)));

        let currentCard1 = (parseInt(cardsToWin[cardsToWin.length - 2].slice(1)));
        let currentCard2 = (parseInt(cardsToWin[cardsToWin.length - 1].slice(1)));

        setPlayer1CardInfo(cardIdentifier(cardsToWin[cardsToWin.length - 2]));
        setPlayer2CardInfo(cardIdentifier(cardsToWin[cardsToWin.length - 1]));

        if (currentCard1 === currentCard2) {
            setWarState(true);
            cardsToWin.push(player1Cards.shift());
            cardsToWin.push(player2Cards.shift());

            if (player1Cards.length === 0) {
                alert('Player 2 Wins!');
                setActiveGame(false);
            };

            if (player2Cards.length === 0) {
                alert('Player 1 Wins!');
                setActiveGame(false);
            };
            // console.log('WARCARDS TO WIN:', cardsToWin);
        };

        if (currentCard1 !== currentCard2) {
            if (currentCard1 > currentCard2) {
                addToPlayersDeck(player1Cards, cardsToWin)
                setPlayerHasWon(<div>{player1.username} has won {cardsToWin.length} cards</div>)
            } else {
                addToPlayersDeck(player2Cards, cardsToWin)
                setPlayerHasWon(<div>Computer has won {cardsToWin.length} cards</div>)
            };

            setCardsToWin([]);
            setWarState(false);
        };

        checkWin(player1Cards, player2Cards);
    };

    return (
        <div className='game-page-container'>
            <img src="./images/cards/SiteBackground.jpeg" id="bg" alt=""></img>
            <div className='left-tabletop'>
                {activeGame && playerHasWon}
            </div>
            {activeGame &&
                <div className='game-info-container'>
                    <Tabletop gameState={{ player1Cards, player2Cards, player1CardInfo, player2CardInfo, warState, cardsToWin }} />
                </div>}
                {!activeGame && <button onClick={() => shuffle(deck)}>Play Game</button>}
                {activeGame && <button onClick={() => playRound(player1Cards, player2Cards)}>Play Round</button>}
        </div>
    )
}

export default Game;