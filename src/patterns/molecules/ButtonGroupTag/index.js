import './styles.scss';

import React from 'react';
import Button from 'patterns/atoms/Button';
import { withTranslation } from 'react-i18next';
import util from 'lib/utils';

const ButtonGroupTag = props => {
    return (
        <span className="button-group-tag">
            {props.tags.map((tag, key) => renderButtonGroupTag({ props, tag, key }))}
        </span>
    );
}

const renderButtonGroupTag = ({ props, tag, key }) => {
    return (
        <Button
            key={util.sanitizeText(tag.text)}
            className={getClassName(tag.selected)}
            onClick={() => handleTagClick({ props, key })}>
            {props.t(tag.text)}
            {renderBadge(props)}
        </Button>
    );
}

const renderBadge = ({ showBadge, level }) => {
    return (showBadge && (level !== 'none')) ? <span className="badge badge-light">{level}</span> : null;
}

const getClassName = (selected) => {
    const commonClassName = 'btn btn-sm button-tag rounded-full';

    return (selected) ? `${commonClassName} btn-outline-success active` : `${commonClassName} btn-outline-light`;
}

const handleTagClick = ({ props, key }) => {
    let click = props.onClickTag;

    if (click) {
        click(key);
    }
}

export default withTranslation()(ButtonGroupTag);
