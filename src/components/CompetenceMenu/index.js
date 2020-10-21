import './styles.scss'

import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Trans } from 'react-i18next';

const i18n = function (key) {
    return (<Trans>{key}</Trans>);
}

class CompetenceMenu extends Component {
    static defaultProps = {
        items: [],
        side: 'left'
    };
    render() {
        return (
            <div className={this.getComponentClass()}>
                <div className={this.getSideClass()}>
                    {this.props.items.map((link, index) => this.renderLink(link, index))}
                </div>
            </div>
        );
    }

    renderLink({ id, link, url, selected}, index) {
        let commonClass = `btn btn-outline-secondary btn-lg btn-menu-component`;
        let cssName = (selected) ? `${commonClass} active` : `${commonClass}`;
        let keyWord = link.replace(/\s/g, '');

        return (
            <Link
                className={cssName}
                to={url}
                key={keyWord}>
                <span>{i18n(link)}</span>
            </Link>
        );
    }

    getComponentClass() {
        let commonClass = 'form-group menu-component';
        return (this.props.side === 'left') ? `${commonClass} menu-component--left` : `${commonClass} menu-component--top`;
    }

    getSideClass() {
        return (this.props.side === 'left') ? 'menu-component--group btn-group-vertical' : 'd-flex justify-content-center';
    }

    clickNavigate(url) {
        this.props.history.push(url);
    }
}


export default withRouter(CompetenceMenu);
