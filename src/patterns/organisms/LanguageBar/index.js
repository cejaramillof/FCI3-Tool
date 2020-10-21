import React, { useState } from 'react';
import LanguageButton from '../../molecules/LanguageButton';
import { connect } from 'react-redux';
import { updateLanguage } from '../../../redux/actions/index'
import i18n from 'i18n';

function LanguageBar(props) {
    const [lang, setLg] = useState(i18n.language);

    const changeLanguage =  (lang) => {
        props.updateLanguage(lang);
        i18n.changeLanguage(lang);
        setLg(lang);
    }

    return (
        <div className="col-sm-12 col-md-3 col-lg-3 d-none d-sm-block">
            <div className="btn-group language-selector" role="group" aria-label="Third group">
                <LanguageButton lang="en" changeLanguage={changeLanguage} />
                <LanguageButton lang="es" changeLanguage={changeLanguage} />
            </div>
        </div>
    )

}

const mapDispatchToProps = { updateLanguage };

export default connect(
    null, 
    mapDispatchToProps
)(LanguageBar);

