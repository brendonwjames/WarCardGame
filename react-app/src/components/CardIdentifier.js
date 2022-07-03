import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const CardIdentifier = (card) => {

    if (card.includes('H')) {
        card = card.slice(1) + 'of Hearts';
    };

    if (card.includes('D')) {
        card = card.slice(1) + 'of Diamonds';
    };

    if (card.includes('S')) {
        card = card.slice(1) + 'of Spades';
    };

    if (card.includes('C')) {
        card = card.slice(1) + 'of Clubs';
    };
}

export default CardIdentifier;