import './styles.scss';

import SearchBar from 'patterns/molecules/SearchBar';
import NavigationBar from '../../components/Shared/NavigationBar/index';
import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";

const WrapperApp = () => {

    const history = useHistory();
    const handleNextStep = ({ username }) => {
        history.push(`/competences/${username}`);
    }

    return (
            <>
                <NavigationBar searchBar={false}/>
                <div className="home-page-container d-flex justify-content-md-center">
                    <div className="col-sm-12 col-md-12 col-lg-9 col-10 home-page-container__candidate">
                        <div className="candidate-component">
                            <SearchBar onSearch={userData => handleNextStep(userData)}/>
                        </div>
                    </div>
                </div>
            </>
    );
}

export default connect()(WrapperApp);