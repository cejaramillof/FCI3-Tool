import './styles.scss';

import React, { Component } from 'react';
import { nextCompetence, updateSummary } from '../../redux/actions/index';

import CompetenceMenu from '../../components/SelectComponents/CompetenceMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeaderContentComponent from 'patterns/organisms/HeaderContentComponent';
import Menu from '../../components/CompetenceMenu';
import ReportSummary from '../../components/ReportSummary';
import SelectTagsComponent from '../../components/SelectComponents/SelectTagsComponent';
import { Trans } from 'react-i18next';
import { connect } from 'react-redux';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons';
import { withRouter } from 'react-router-dom'

const i18n = function (key) {
    return (<Trans>{key}</Trans>);
}

class WrapperApp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            renderCompetences: 'left'
        }
    }

    render() {
        return (
            <div className="wrapper-app-component d-flex justify-content-md-center">
                {this.renderCompetencesAtTop()}
                <div className="wrapper-app-component__container container-fluid text-left">
                    <div className="row container__wrapper">
                        {this.renderCompetencesVertically()}
                        <div className={this.getCentralContentClass()}>
                            <HeaderContentComponent showProfile/>
                            {this.renderSelectTagsSection()}
                            {this.renderReportSummarySection()}
                            <div className="row wrapper-content--call-action">
                                <div className="col d-flex justify-content-between">
                                    <button type="submit" className="btn btn-lg btn-primary btn-call-action" onClick={() => this.nextCompetnece()}>{i18n('NEXT-COMPETENCE')} <FontAwesomeIcon icon={faChevronRight} /></button>
                                    <button type="submit" className="btn btn-lg btn-primary btn-call-action" onClick={() => this.finish()}>{i18n('FINISH-REPORT')} <FontAwesomeIcon icon={faFileAlt} />  </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderCompetencesAtTop() {
        let content = null;

        if (this.state.renderCompetences === 'top') {
            content = (
                <div className="row justify-content-md-center">
                    <div className={`${this.getCompetenceContentClass()} justify-content-md-center full-banner`}>
                        <Menu items={this.props.menu}/>
                        <CompetenceMenu />
                    </div>
                </div>
            );
        }

        return content;
    }

    renderSelectTagsSection() {
        return (
            <div className="row wrapper-content--select-tags">
                <div className="col">
                    <SelectTagsComponent />
                </div>
            </div>
        );
    }

    renderReportSummarySection() {
        return (
            <div className="row wrapper-content--report-summary">
                <div className="col">
                    <ReportSummary lang={this.props.language} updateSummary={() => this.updateSummary()} competence={this.props.competence} byCompetence={this.props.byCompetence} candidateData={this.props.candidateData} />
                </div>
            </div>
        );
    }

    getCentralContentClass() {
        let side = this.state.renderCompetences;
        let commonCss = 'container__wrapper-content';
        return (side === 'left') ? `${commonCss} col-lg-9 col-md-9 col-12 col-sm-12` : `${commonCss} col-12`;
    }

    getCompetenceContentClass() {
        let side = this.state.renderCompetences;
        let commonCss = 'container__wrapper-competence';

        return (side === 'left') ? `${commonCss} col-lg-3 col-md-3 col-12 col-sm-12` : `${commonCss} col`;
    }

    renderCompetencesVertically() {
        let content = null;

        if (this.state.renderCompetences === 'left') {
            content = (
                    <div className={this.getCompetenceContentClass()}>
                        <Menu items={this.props.menu}/>
                        <CompetenceMenu />
                    </div>
            );
        }

        return content;
    }

    finish() {
        this.props.history.push(`/report/${this.props.candidateData.username}`);
    }

    nextCompetnece() {
        this.props.nextCompetence();
    }

    updateSummary() {
        this.props.updateSummary();
    }

}
const mapStateToProps = state => {
    return {
        competence: state.report.competenceSelected,
        byCompetence: state.report.byCompetence,
        candidateData: state.candidate.candidateData,
        language: state.report.language
    }
};

const mapDispatchToProps = { nextCompetence, updateSummary };
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WrapperApp));