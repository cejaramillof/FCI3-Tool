import './styles.scss';

import {
    NavLink,
    Redirect,
    withRouter
} from 'react-router-dom'
import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeaderContentComponent from 'patterns/organisms/HeaderContentComponent';
import Menu from '../../components/CompetenceMenu';
import ParagraphReport from '../../components/ParagraphReport';
import _ from 'lodash';
import { connect } from 'react-redux';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import i18next from 'i18next';

const i18n = function (key) {
    return i18next.t(key);
}

class Report extends Component {

    constructor(props) {
        super(props);

        this.state = {
            readytoBeRedirected: false
        }
    }

    render() {
        return (!this.validateFullReport())
            ? <Redirect to={`/competences/${this.props.candidateData.user.personalData.username}`} />
            : (
                <div className="report-app-component row">
                    <div className="container__wrapper-options col-lg-3 col-md-3 col-12 col-sm-12">
                        <Menu items={this.props.menu} />
                    </div>
                    <div className="container__wrapper-content text-left col-lg-9 col-md-9 col-12 col-sm-12">
                        <div className="row">
                            <div className="col">
                                <HeaderContentComponent {...this.getHeaderContentComponentProps()} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="row wrapper-content--summary">
                                    <div className="col">
                                        <div className="card bg-light text-center">
                                            <div className="card-body">
                                                {this.getFullReport()}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row wrapper-content--call-action">
                                    <div className="col">
                                        <NavLink to={`/competences/${this.props.candidateData.user.personalData.username}`} className="btn btn-lg btn-primary btn-call-action">
                                            <FontAwesomeIcon icon={faChevronLeft} /> {i18n('Go Back To Competences')}
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
    }

    getHeaderContentComponentProps() {
        return {
            className: 'report-app-component--jumbotron',
            quotes: false,
            showProfile: true,
            subTitle: `${this.props.candidateData.user.personalData.fullname} ${i18n('by')} ${this.props.candidateData.recruiter.fullname}`,
            title: i18n('Report Summary')
        }
    }

    getFullReport() {
        let fullReport = [];
        let byCompetence = this.props.byCompetence;

        Object.keys(byCompetence).forEach((key) => {

            if (!_.isEmpty(byCompetence[key].summary)) {
                fullReport.push((<ParagraphReport content={this.getItemSummary(key)} key={key} competence={key} />));
            }

        });

        return fullReport;
    }

    validateFullReport() {
        return _.filter(this.props.byCompetence, (item) => !_.isEmpty(item.summary)).length;
    }

    getItemSummary(key) {
        return this.props.byCompetence[key].summary.map((item) => i18n(item).replace(/%user%/g, this.props.candidateData.user.personalData.fullname));
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

export default withRouter(connect(mapStateToProps)(Report));