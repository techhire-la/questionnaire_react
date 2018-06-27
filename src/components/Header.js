import React from 'react';
import {Link, NavLink} from 'react-router-dom'


const Header = () => (

    <div className="nav_header">
        <div className="header__container">
            <h1 className="header__title">YPI Referral Tool</h1>
            <NavLink className="header__subtitle" to="/" activeClassName="is-active" exact={true}>Home</NavLink> |
            <NavLink className="header__subtitle" to="/form" activeClassName="is-active"> Questions </NavLink> |
            <NavLink className="header__subtitle" to="/catalogue" activeClassName="is-active"> Catalogue</NavLink>
        </div>

    </div>




)


export default Header




// <header>
    // <h1>YPI Referral Tool</h1>
    //
    // <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink> |
    //     <NavLink to="/form" activeClassName="is-active">Form</NavLink> |
    //     <NavLink to="/catalogue" activeClassName="is-active">Catalogue</NavLink>
//</header>