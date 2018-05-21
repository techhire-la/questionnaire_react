import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'

import Header from "../components/Header";
import QuestionnaireApp from '../components/QuestionnaireApp';
import FilterForm from '../components/FilterForm';
import Catalogue from '../components/EditExpensePage';
import NotFoundPage from '../components/NotFoundPage';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={QuestionnaireApp} exact={true}/>
                    <Route path="/form" component={FilterForm} />
                    <Route path="/catalogue" component={Catalogue} />
                    <Route component={NotFoundPage} />
                </Switch>
        </div>
    </BrowserRouter>
)







export default AppRouter