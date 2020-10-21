import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCompetence } from '../../../redux/actions/index';
import { Trans } from 'react-i18next';
import Icon from 'patterns/molecules/Icon';
import Small from 'patterns/atoms/Small';
import './styles.scss'

const i18n = function (key) {
    return (<Trans>{key}</Trans>);
}

const iconTypes = [
    'need-work-on-this',
    'cool',
    'you-rock'
];

class CompetenceMenu extends Component {
    static defaultProps = {
        items: [],
        side: 'left'
    };

    //TODO: check why this is running twice
    render() {
        return (
            <div className={this.getComponentClass()}>
                <div className={this.getSideClass()}>
                    {this.props.items.map((link, index) => this.renderLink(link, index))}
                </div>
                <Small id="nameDesc" className="form-text text-muted d-flex justify-content-center">Please select one competence evaluated in your candidate's interview.</Small>
            </div>
        );
    }

    renderLink({ id, level, selected}, index) {
        let levelClass = (_.isUndefined(level)) ? '' : `btn-competence__level-${level}`;
        let commonClass = `btn btn-outline-secondary btn-lg btn-competence ${levelClass}`;
        let cssName = (selected) ? `${commonClass} active` : `${commonClass}`;
        let keyWord = id + index;

        return (
            <button
                type="button"
                className={cssName}
                key={keyWord}
                onClick={this.clickOnCompetence.bind(this, index)}>
                <span>{i18n(id)}</span>
                {this.renderIcon(level)}
            </button>
        );
    }

    renderIcon(type) {
        let iconType = iconTypes[type] || null;

        return (iconType) ?
            <Icon cssIcon={ iconType } /> :
            null;
    }

    getComponentClass() {
        let commonClass = 'form-group select-competence';
        return (this.props.side === 'left') ? `${commonClass} select-competence--left` : `${commonClass} select-competence--top`;
    }

    getSideClass() {
        return (this.props.side === 'left') ? 'select-competence--group btn-group-vertical' : 'd-flex justify-content-center';
    }

    clickOnCompetence(index) {
        this.props.updateCompetence(this.props.items[index]);
    }
}

const mapStateToProps = state => {
    return {
        items: state.report.menu,
        candidateData: state.candidate.candidateData,
        language: state.report.language
    }
};

const mapDispatchToProps = { updateCompetence };
export default connect(mapStateToProps, mapDispatchToProps)(CompetenceMenu);
