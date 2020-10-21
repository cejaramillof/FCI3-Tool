import './styles.scss';

import React from "react";
import {
    Route,
    Redirect,
    Router,
    Switch,
} from "react-router-dom";
import { createBrowserHistory } from "history";

import InternalLayout from 'components/Layout/InternalLayout';
import MenuOptions from 'config/menuOptions.json';
import { connect } from 'react-redux';

// Pages
import Competences from 'pages/Competences';
import HomePage from 'pages/HomePage';
import Login from 'pages/Login';
import Profile from 'pages/Profile/index';

//
import Authorization from 'HOC/Authorization';
import * as ROLES from 'HOC/Authorization/roles';
//
import Report from 'pages/Report/index';

const history = createBrowserHistory();

// AuthPages
const AuthHomePage = Authorization([ROLES.ADMIN, ROLES.RECRUITER], HomePage, Login);
//

function App({lang}) {
    return (
        <Router history={history}>
            <Switch>
                <Redirect exact path="/" to="/home" />
                <Route path="/home" component={AuthHomePage} />
                <Route path="/competences/:username">
                    <InternalLayout lang={lang}>
                        <Competences lang={lang} menu={MenuOptions.COMPETENCES} />
                    </InternalLayout>
                </Route>
                <Route path="/report/:username/">
                    <InternalLayout lang={lang}>
                        <Report lang={lang} menu={MenuOptions.REPORT} />
                    </InternalLayout>
                </Route>
                <Route path="/profile/:username/">
                    <InternalLayout lang={lang}>
                        <Profile lang={lang} menu={MenuOptions.REPORT} />
                    </InternalLayout>
                </Route>
            </Switch>
        </Router>
    );
}

const mapStateToProps = state => ({
    lang: state.report.language
})

export default connect(
    mapStateToProps, 
    null
)(App);
