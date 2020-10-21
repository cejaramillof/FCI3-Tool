import './styles.scss';

import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import _ from 'lodash';
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons';
import i18next from 'i18next';

const i18n = function (key) {
    return i18next.t(key);
}

class ReportSummary extends Component {

    static defaultProps = {
        competence: {
            id: 'FOCUSED'
        },
        userData: {
            firstName: 'Glober'
        },
        updateSummary: _.noop
    };

    render() {
        return (
            <div className="card bg-light report-summary-component">
                <div className="card-header d-flex justify-content-between">
                    {this.getMessage()}
                    {this.renderRefreshButton()}
                </div>
                <div className="card-body">
                    {this.getSummary().map((item)=> this.getItemSummary(item))}
                </div>
            </div>
        );
    }

    renderRefreshButton () {
        let summary = this.getSummaryByCompetence();
        return (_.isEmpty(summary)) ? null : <button type="button" className="btn btn-success btn-sm" onClick={() => this.updateSummary()}><FontAwesomeIcon icon={faRedoAlt} /></button>;
    }

    updateSummary() {
        const updateSummary = (this.props.updateSummary) ? this.props.updateSummary : _.noop;
        updateSummary();
    }

    getSummary () {
        let summary = this.getSummaryByCompetence();
        return (_.isEmpty(summary)) ? [i18n('You must select a tag in the behavior section')] : summary;
    }

    getItemSummary (item) {
        return i18n(item).replace(/%user%/g, this.props.candidateData.user.personalData.fullname);
    }

    getSummaryByCompetence () {
        let competenceId = this.props.competence.id;
        return _.get(this.props, `byCompetence[${competenceId}].summary`, []);
    }

    getMessage() {
        let seletecItems = _.get(this.props, `byCompetence[${this.props.competence.id}].tagsSelected`, []).length;
        return (seletecItems > 0) ? (<div className="card-header--message"><span>{i18n('You are selected')}</span> <span className="badge badge-success">{seletecItems}</span> <span>{i18n('behavior for')} {i18n(this.props.competence.id)}</span></div>) : (<div className="card-header--message">{i18n('Please select almost one behavior tag to update your evaluation')}</div>)
    }
}

export default ReportSummary;
