import './styles.scss';

import React, { Component } from 'react';

import SearchBar from 'patterns/molecules/SearchBar'
import LogoImg from './img/talent_app.png';
import { withRouter } from 'react-router-dom';
import LanguageBar from 'patterns/organisms/LanguageBar';

class NavigationBar extends Component {

    render() {
        return (
            <div className="navigation_bar_component d-flex justify-content-center">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark navigation_bar_component__nav col-sm-12 col-12 justify-content-between">
                    <a className="navbar-brand col-sm-12 col-md-3 col-lg-3" href="/home">
                        <img src={LogoImg} alt="TalentApp" className="navigation_bar_component__logo"></img>
                    </a>
                    {this.renderSearchBar()}
                </nav>
            </div>
        );
    }


    renderSearchBar() {
        return (this.props.searchBar) ? (<form className="form-inline">
            <SearchBar onSearch={userData => this.handleNextStep(userData)} shortMode/>
            <LanguageBar lang={this.props.lang}/>
        </form>) : null;
    }

    handleNextStep = ({ username }) => {
        const { history } = this.props;
        if (history) history.push(`/competences/${username}${Math.floor((Math.random() * 10) + 1)}`);
    }
}

export default withRouter(NavigationBar);