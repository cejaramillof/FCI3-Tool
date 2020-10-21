import './styles.scss';

import React, { Component } from 'react';
import { updateCompetence, updateTagCollectionCompetence, updateTagList } from '../../../redux/actions/index';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MessagesComponent from './../../MessagesComponent';
import _ from 'lodash';
import { connect } from 'react-redux';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import i18next from 'i18next';
import ButtonGroupTag from 'patterns/molecules/ButtonGroupTag';
import util from 'lib/utils';
import Small from 'patterns/atoms/Small';

const i18n = function (key) {
    return i18next.t(key);
}

class SelectTagsComponent extends Component {

    static defaultProps = {
        competence: {},
        label: 'Select a behavior for',
        smallLabel: 'Please be sure that you are choosing the tags accordingly to your candidate profile',
    };

    render() {
        return (
            <div className="select-tags form-group">
                <label {...this.getLabelProps()}><FontAwesomeIcon icon={faTags} /> {i18n(this.props.label) + ' ' + this.getCompetenceName()}</label>
                <Small {...this.getSmallProps()}>{i18n(this.props.smallLabel)}</Small>
                <div className="select-tags__buttons">
                    {this.renderButtonSection()}
                </div>
            </div>
        );
    }

    renderButtonSection() {
        let tagsCollection = _.get(this.props, 'competence.tagsCollection', false);
        let tagsCollectionIsValid = (tagsCollection && tagsCollection.length > 0);

        let Component = (tagsCollectionIsValid) ? (tagsCollection.map((item, key) => {
            const { tags, level } = item;
            return (tags.length > 0) ? this.renderButtonTag({ tags, level, key }) : null;
        })) : null;

        return (_.isNull(Component) || Component.includes(null)) ? this.renderWarningMessage() : Component;
    }

    renderWarningMessage() {
        return <MessagesComponent type='warning' message={i18n('Tag Collection is Empty!')} />
    }

    renderButtonTag = ({ tags, level, key }) => {
        return <ButtonGroupTag level={level} {...this.getButtonProps({ tags, key })} />;
    }

    getButtonProps({ tags, key }) {
        const keyTag = `${util.sanitizeText(this.getCompetenceName())}_${util.sanitizeText(tags[0].text)}`;

        return {
            key: keyTag,
            onClickTag: (idx) => this.handleClick(key, idx),
            tags,
            lang: this.props.langugage
        }
    }

    getLabelProps() {
        return {
            className: "select-tags__label"
        }
    }

    getSmallProps() {
        return {
            id: "emailHelp",
            className: "select-tags__small form-text text-muted"
        }
    }

    getCompetenceName() {
        return this.props.competence.id;
    }

    handleClick(key, idx) {
        const updatedTags = this.getUpdatedTags(key, idx);
        const updatedTagsSelected = this.getTagsSelected(updatedTags);
        const updatedTagsLevel = this.getLevelBySelectedTags(updatedTagsSelected);

        this.props.updateTagList({
            id: this.props.competence.id,
            tagsSelected: updatedTagsSelected,
            level: updatedTagsLevel
        });
        this.props.updateTagCollectionCompetence({
            id: this.props.competence.id,
            tags: updatedTags
        });
    }

    getLevelBySelectedTags(tagsSelected) {

        const extractLevels = (accumulator, currentValue) => {
            return accumulator + currentValue.level;
        }

        const totalLevelsSelected = tagsSelected.length;
        const sumLevels = tagsSelected.reduce(extractLevels, 0);
        const averageLevels = Math.round(sumLevels / totalLevelsSelected);

        return averageLevels;
    }

    getUpdatedTags(key, idx) {
        let updatedTags = [...this.props.competence.tagsCollection];

        updatedTags[key].tags[idx].selected = !updatedTags[key].tags[idx].selected;
        updatedTags[key].tags[idx].level = updatedTags[key].level;
        updatedTags[key].tags[idx].comments = updatedTags[key].comments[idx] || updatedTags[key].comments[0];

        return updatedTags;
    }

    getTagsSelected(newTags) {
        let tagsSelected = [];
        let tagsCollection = (newTags.length > 0) ? newTags : this.props.competence.tagsCollection;

        tagsCollection.forEach((itemTag) => {
            let founded = itemTag.tags.filter((item) => item.selected);
            if (founded.length > 0) {
                tagsSelected = [...tagsSelected, ...founded];
            }
        })

        return tagsSelected;
    }
}

const mapStateToProps = state => ({
    competence: state.report.competenceSelected,
    language: state.report.language
});

const mapDispatchToProps = { updateTagList, updateCompetence, updateTagCollectionCompetence };
export default connect(mapStateToProps, mapDispatchToProps)(SelectTagsComponent);
