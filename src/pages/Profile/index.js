import './styles.scss';
import React, { Component } from 'react';
import HeaderContentComponent from 'patterns/organisms/HeaderContentComponent';
import InputNumber from 'patterns/molecules/InputNumber';
import Menu from '../../components/CompetenceMenu';
import ProfileComponent from 'patterns/molecules/ProfileComponent';
import { connect } from 'react-redux';
import i18next from 'i18next';
import {
    withRouter
} from 'react-router-dom'
import InputRange from 'patterns/molecules/InputRange';

const i18n = function (key) {
    return i18next.t(key);
}

class Profile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            rangeValue: 0
        }
    }

    render() {
        return (
            <div className="profile-app-component row">
                <div className="container__wrapper-options col-lg-3 col-md-3 col-12 col-sm-12">
                    <Menu items={this.props.menu} />
                </div>
                <div className="container__wrapper-content text-left col-lg-9 col-md-9 col-12 col-sm-12">
                    <div className="row">
                        <div className="col">
                            <HeaderContentComponent
                                quotes={false}
                                subTitle={i18n(`You are editing candidate's profile`)}
                                title={i18n(`Edit Candidate's Profile`)}
                                className="report-app-component--jumbotron"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="row wrapper-content--summary">
                                <div className="col">
                                    <div className="card bg-light text-left">
                                        <div className="card-body">
                                            <ProfileComponent user={this.props.candidateData.user} showAdditionalInfo />
                                            <form className="profile-app-component--form">
                                                <div className="form-row">
                                                    <div className="form-group col-md-6">
                                                        <InputNumber id="experienceYears" labelText={i18n(`Year's of Experience`)} />
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <label htmlFor="fitGlobant">{i18n(`Fit to Globant`)}</label>
                                                        <select id="fitGlobant" className="form-control">
                                                            <option>Choose an option</option>
                                                            <option>Yes</option>
                                                            <option>No</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <InputRange  {...this.getInputRangeProps()}/>
                                                <div className="form-group">
                                                    <label htmlFor="educationLevel">{i18n(`Education Level`)}</label>
                                                    <div className="custom-control custom-radio">
                                                        <input type="radio" id="education1" name="education" className="custom-control-input" />
                                                        <label className="custom-control-label" htmlFor="education1">No higher Education</label>
                                                    </div>
                                                    <div className="custom-control custom-radio">
                                                        <input type="radio" id="education2" name="education" className="custom-control-input" />
                                                        <label className="custom-control-label" htmlFor="education2">University studies in progress</label>
                                                    </div>
                                                    <div className="custom-control custom-radio">
                                                        <input type="radio" id="education3" name="education" className="custom-control-input" />
                                                        <label className="custom-control-label" htmlFor="education3">University studies complete</label>
                                                    </div>
                                                    <div className="custom-control custom-radio">
                                                        <input type="radio" id="education4" name="education" className="custom-control-input" />
                                                        <label className="custom-control-label" htmlFor="education4">Post-graduate studies</label>
                                                    </div>
                                                    <div className="custom-control custom-radio">
                                                        <input type="radio" id="education5" name="education" className="custom-control-input" />
                                                        <label className="custom-control-label" htmlFor="education5">Abandoned studies</label>
                                                    </div>
                                                    <div className="custom-control custom-radio">
                                                        <input type="radio" id="education6" name="education" className="custom-control-input" />
                                                        <label className="custom-control-label" htmlFor="education6">Independent coursework</label>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="educationLevel">{i18n(`Why is the candidate interested in Globant ?`)}</label>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" id="careerPath" name="careerPath" className="custom-control-input" />
                                                        <label className="custom-control-label" htmlFor="careerPath">Career Path</label>
                                                    </div>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" id="training" name="training" className="custom-control-input" />
                                                        <label className="custom-control-label" htmlFor="training">Training/Stay relevant</label>
                                                    </div>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" id="benefits" name="benefits" className="custom-control-input" />
                                                        <label className="custom-control-label" htmlFor="benefits">Benefits</label>
                                                    </div>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" id="clients" name="clients" className="custom-control-input" />
                                                        <label className="custom-control-label" htmlFor="clients">Clients</label>
                                                    </div>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" id="travels" name="travels" className="custom-control-input" />
                                                        <label className="custom-control-label" htmlFor="travels">Travels Relocation Posibilities</label>
                                                    </div>
                                                    <label htmlFor="inputCity">Other</label>
                                                    <input type="text" className="form-control" id="inputCity" />
                                                </div>
                                                <div className="form-row">
                                                    <div className="form-group col-sm-12 col-md-6 col-lg-6">
                                                        <label htmlFor="lookingChange">{i18n(`Why is the candidate is looking a change?`)}</label>
                                                        <input type="text" min="0" className="form-control" id="lookingChange" />
                                                    </div>
                                                    <div className="form-group col-sm-12 col-md-6 col-lg-">
                                                        <label htmlFor="overallImpresions">{i18n(`Overall impressions`)}</label>
                                                        <input type="text" min="0" className="form-control" id="overallImpresions" />
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row wrapper-content--call-action">
                                <div className="col">
                                    <button type="submit" className="btn btn-lg btn-primary btn-call-action">Update Profile</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    handleChangeRange(e) {
        this.setState({
            rangeValue: e
        })
    }

    getInputRangeProps = () => {
        return {
            id: "englishLevel",
            labelText: i18n("English Level"),
            tags: ['Elementary', 'Pre Intermediate', 'Intermediate', 'Upper Intermediate', 'Advanced'],
            defaultValue: this.state.rangeValue,
            valueRange: (e) => { this.handleChangeRange(e) }
        }
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

export default withRouter(connect(mapStateToProps)(Profile));

