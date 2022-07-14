import React from "react";

// import backCardImg from "../style/images/backCardImg.png";
import heart from "../components/images/cards/Heart.jpg";
// import diamond from "../style/images/diamond.png";
// import club from "../style/images/club.png";
// import spade from "../style/images/spade.png";

const Card = ({ gameState }) => {

    console.log(gameState, 'from the card component')

    const { suits, card, front, color } = { gameState };

    const getCardSymbol = (suits) => {
        let symbol;
        switch (suits) {
            //   case "Diamond":
            //     return symbol = diamond;
            case "Heart":
                return symbol = heart;
            //   case "Club":
            //     return symbol = club;
            //   case "Spade":
            //     return symbol = spade;
            default:
                return symbol;
        };
    };

    if (front === true) {
        const cardSymbol = getCardSymbol(suits);
        return (
            <div className="card-container" style={{ color: `${color}` }}>
                <div style={{ position: "absolute", top: 5, left: 5 }}>
                    <div style={{ maxWidth: 20 }}>{card}</div>
                    <img src={cardSymbol} alt="suit-symbol" style={{ maxWidth: 20 }} />
                </div>
                <div>
                    <img src={cardSymbol} alt="suit-symbol" style={{ height: 40, position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
                </div>
                <div style={{ position: "absolute", bottom: 5, right: 5, transform: "rotate(-180deg)" }}>
                    <div style={{ maxWidth: 20 }}>{card}</div>
                    <img src={cardSymbol} alt="suit-symbol" style={{ maxWidth: 20 }} />
                </div>
            </div>
        );
    } else {
        return (
            <div className="card-container">This is the card container</div>
        );
    };
};


export default Card;