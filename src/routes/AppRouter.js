import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'

import NavBar from "../components/NavBar";
import QuestionnaireApp from '../components/QuestionnaireApp';
import FilterForm from '../components/FilterForm';
import Catalogue from '../components/Catalogue';
// import NotFoundPage from '../components/NotFoundPage';
//<Route component={NotFoundPage} />

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <NavBar />
            <Switch>
                <Route path="/" component={QuestionnaireApp} exact={true}/>
                    <Route path="/form" component={FilterForm} />
                    <Route path="/catalogue" component={Catalogue} />
                    <Route path="/login" component={Login} />
                </Switch>
        </div>
    </BrowserRouter>
)







export default AppRouter