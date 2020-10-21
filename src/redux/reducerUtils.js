import util from '../lib/utils';
import _ from 'lodash';
import Data from '../config/dataModel.json';

const getData = function () {
    return Data;
}

const getAttributeByCompetence = function (competence, attribute) {
    return _.get(Data, `competences['${competence}']['${attribute}']`, '');
}

const getInitialCompetenceSelected = function (tagsCollection) {
    let firstCompetence = Object.keys(Data.competences)[0];
    return {
        id: firstCompetence,
        description: getAttributeByCompetence(firstCompetence, 'description'),
        tagsCollection: tagsCollection[firstCompetence].tagsCollection
    }
}

const getAllTags = function (firstCompetence, suffle) {
    let allTags = [];
    let data = _.get(Data, `competences[${firstCompetence}].levels`, []);

    data.forEach((value, key) => {
        allTags = [...allTags, ...value.tagsCollection];
    })

    return (suffle) ? util.shuffleArray(allTags) : allTags;
}

const getNextCompetence = function (state) {
    const competencesKeys = Object.keys(state.response.competences);
    const competenceIdx = competencesKeys.indexOf(state.competenceSelected.id) + 1;
    const nextCompetence = (state.response.competences[competencesKeys[competenceIdx]]) ? competencesKeys[competenceIdx] : competencesKeys[0];
    return getCompetenceItems(['tagsSelected'], nextCompetence);
}

const getCompetenceItems = function (omitFields, sKey) {
    let competences = {};

    if (sKey) {
        competences = getCompetenceItem(omitFields, sKey);
    } else {
        _.forEach(Data.competences, (value, key) => {
            competences[key] = getCompetenceItem(omitFields, key);
        });
    }

    return competences;
}

const getCompetenceItem = function (omitFields, key) {
    return _.omit({
        tagsSelected: [],
        tagsCollection: getAllTags(key, true),
        id: key,
        description: Data.competences[key].description,
        summary:'',
        selected: false,
        level: null,
    }, omitFields);
}

const getInitialMenu = function () {
    const menu = _.valuesIn(getCompetenceItems(['tagsSelected', 'tagsCollection']));
    menu[0].selected = true;
    return menu;
}

const getActiveMenu = function (menu, id, stateSelected) {

    const newMenu = [...menu];

    newMenu.forEach((item) => {
        item.selected = false;
    })

    const idxMenu = _.findIndex(newMenu, ['id', id]);

    newMenu[idxMenu].selected = true;
    newMenu[idxMenu].level =  (stateSelected && _.isNumber(stateSelected.level)) ? stateSelected.level : null;

    return newMenu

}

const getConnector = function () {
    const connectors = getData().connectors;
    const maxNumber = connectors.length;
    const idxRamdom = Math.floor(Math.random() * Math.floor(maxNumber))
    return connectors[idxRamdom];
}

const getInitializer = function () {
    const initialPrragraph = getData().initialParagraph;
    const maxNumber = initialPrragraph.length;
    const idxRamdom = Math.floor(Math.random() * Math.floor(maxNumber))
    return initialPrragraph[idxRamdom];
}

const getSummary = function (allComments) {
    let mergedComments = [];
    allComments = (allComments) ? allComments : [];
    const result = _.uniq(allComments.map(({ comments }) => comments));
    let counter = 0;

    result.forEach((item, key) => {
        let commentStr = result[key];

        mergedComments.push(' ');
        mergedComments.push((counter === 0) ? getInitializer() : getConnector());
        mergedComments.push(' ');
        mergedComments.push(commentStr);

        counter++;
    })

    return (allComments.length > 0) ? mergedComments : [];
}

export default {
    getInitialMenu: getInitialMenu,
    getActiveMenu: getActiveMenu,
    getCompetenceItems: getCompetenceItems,
    getData: getData,
    getInitialCompetenceSelected: getInitialCompetenceSelected,
    getNextCompetence: getNextCompetence,
    getSummary: getSummary
}