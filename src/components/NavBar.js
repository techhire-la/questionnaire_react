import React from 'react';
import {Link, NavLink} from 'react-router-dom'
import { Header, Image, Item, Responsive, Segment, Form } from 'semantic-ui-react'


const NavBar = () => (

<div className="nav_header">
    <div className="header__container">
        <h1 className="header__title">Internal Referral Information System</h1>
        <div className="centerLinks">
            <NavLink className="header__subtitle" to="/" activeClassName="is-active" exact={true}>Home</NavLink> |
            <NavLink className="header__subtitle" to="/form" activeClassName="is-active"> Questions </NavLink> |
            <NavLink className="header__subtitle" to="/catalogue" activeClassName="is-active"> Catalogue</NavLink>
        </div>

    </div>

</div>





)


export default NavBar




// <header>
    // <h1>YPI Referral Tool</h1>
    //
    // <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink> |
    //     <NavLink to="/form" activeClassName="is-active">Form</NavLink> |
    //     <NavLink to="/catalogue" activeClassName="is-active">Catalogue</NavLink>
//</header>


// <div className="nav_header">
//     <div className="header__container">
//         <h1 className="header__title">YPI internal referral information system</h1>
//         <NavLink className="header__subtitle" to="/" activeClassName="is-active" exact={true}>Home</NavLink> |
//         <NavLink className="header__subtitle" to="/form" activeClassName="is-active"> Questions </NavLink> |
//         <NavLink className="header__subtitle" to="/catalogue" activeClassName="is-active"> Catalogue</NavLink>
//     </div>
//
// </div>