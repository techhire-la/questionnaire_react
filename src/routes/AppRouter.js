import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'

import Header from "../components/Header";
import QuestionnaireApp from '../components/QuestionnaireApp';
import FilterForm from '../components/FilterForm';
import Catalogue from '../components/Catalogue';
// import NotFoundPage from '../components/NotFoundPage';
//<Route component={NotFoundPage} />

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={QuestionnaireApp} exact={true}/>
                    <Route path="/form" component={FilterForm} />
                    <Route path="/catalogue" component={Catalogue} />
                </Switch>
        </div>
    </BrowserRouter>
)







export default AppRouter