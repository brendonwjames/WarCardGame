import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavButton = ({buttonName, path}) => {

    return (
        <NavLink to={path} exact={true} activeClassName='active'><button>{buttonName}</button></NavLink>
    )
};

export default NavButton;