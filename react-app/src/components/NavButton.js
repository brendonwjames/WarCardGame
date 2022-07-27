import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavButton = ({className, buttonName, path}) => {

    return (
        <NavLink className={className} to={path} exact={true} activeClassName='active'>
            <button className={className}>{buttonName}</button>
        </NavLink>
    )
};

export default NavButton;