import './styles.scss';

import { faExpandAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ParagraphReport = ({content, competence}) => {
    return (
        <div className="paragraph-report-component" data-info={competence} >
            <p>
                {content}
            </p>
            <div className="paragraph-actions">
                <button className="btn btn-primary btn-sm"><FontAwesomeIcon icon={faPencilAlt} /></button>
                <button className="btn btn-primary btn-sm"><FontAwesomeIcon icon={faExpandAlt} /></button>
            </div>
        </div>
    )
}

export default ParagraphReport;