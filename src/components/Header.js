import React from 'react';
import {Link, NavLink} from 'react-router-dom'


const Header = () => (

    <header>
        <h1>YPI Referral Tool</h1>

        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink> |
        <NavLink to="/form" activeClassName="is-active">Form</NavLink> |
        <NavLink to="/catalogue" activeClassName="is-active">Catalogue</NavLink>

    </header>
)


export default Header