import './styles.scss';

import React, { Component } from 'react';

import Image from 'patterns/atoms/Image';
import ImageLogo from './img/logo_globant.jpeg';

class Footer extends Component {
    render() {
        return (
            <footer className="footer-component">
                <div className="row justify-content-between footer-component--wrapper">
                    <div className="col-sm-12 col-md-4 col-8 wrapper-text">Talent Application for Competence Evaluations @2020</div>
                    <div className="col-sm-12 col-md-4 col-4 wrapper-logo">
                        <Image image={ImageLogo} alt='Logo Globant' />
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
