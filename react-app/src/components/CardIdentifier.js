import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const cardIdentifier = (card) => {

    if (card.split('').includes('H')) {
        card = card.slice(1) + 'of Hearts';
    };

    if (card.split('').includes('D')) {
        card = card.slice(1) + 'of Diamonds';
    };

    if (card.split('').includes('S')) {
        card = card.slice(1) + 'of Spades';
    };

    if (card.split('').includes('C')) {
        card = card.slice(1) + 'of Clubs';
    };

    return card;
};

export default cardIdentifier;