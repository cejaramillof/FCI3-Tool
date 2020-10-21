import React from 'react';
import Button from 'patterns/atoms/Button';


const LanguageButton = props => {
    const cssLanguage = {
        en: (props.lang === 'en') ? 'active en-active': '',
        es: (props.lang === 'es') ? 'active es-active': ''
    }
    
    return (
        <Button
            type='button'
            className={`btn btn-secondary ${props.currentLang === 'en' ? cssLanguage.en : cssLanguage.es}`} 
            disabled={!props.lang} 
            onClick={()=>{props.changeLanguage(props.lang)}}
        >
            {props.lang}
        </Button>
    )
}

export default LanguageButton;