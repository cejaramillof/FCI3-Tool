import { NEXT_COMPETENCE, UPDATE_COMPETENCE, UPDATE_LANGUAGE, UPDATE_LIST, UPDATE_SUMMARY, UPDATE_TAG_COLLECTION_COMPETENCE } from '../types';

import i18n from './../../i18n';
import reducerUtils from '../reducerUtils';

const byCompetence = reducerUtils.getCompetenceItems(['description']);

const initialState = {
    competenceSelected: reducerUtils.getInitialCompetenceSelected(byCompetence),
    byCompetence: byCompetence,
    menu: reducerUtils.getInitialMenu(),
    response: reducerUtils.getData(),
    language: i18n.language
};

export default function competencesReducers(state = initialState, actions) {
    switch (actions.type) {
        case UPDATE_LANGUAGE:
        const { lang } = actions;
        
        return {
            ...state,
            language: lang
        };

        case UPDATE_LIST:
            const { competenceId, tagsSelected, level } = actions.competence;

            const updatingCompetence = {
                ...state.byCompetence,
                [competenceId]: {
                    ...state.byCompetence[competenceId],
                    tagsSelected: tagsSelected,
                    level: level,
                    summary: reducerUtils.getSummary(tagsSelected)
                }
            }

            const UpdateListState = {
                ...state,
                competenceSelected: {
                    ...state.competenceSelected
                },
                byCompetence: updatingCompetence,
                menu: reducerUtils.getActiveMenu(state.menu, competenceId, updatingCompetence[competenceId])
            };

            return UpdateListState;

        case UPDATE_COMPETENCE:
            const { id, name, description } = actions.competence;

            const byCompetenceUC = {
                ...state.byCompetence
            };

            const updateCompetenceState = {
                ...state,
                byCompetence: byCompetenceUC,
                competenceSelected: {
                    id,
                    name,
                    description,
                    tagsCollection: state.byCompetence[id].tagsCollection
                },
                menu: reducerUtils.getActiveMenu(state.menu, id, byCompetenceUC[id])
            };

            return updateCompetenceState

        case NEXT_COMPETENCE:
            const competenceSelected = reducerUtils.getNextCompetence(state);
            const byCompetenceNC = {
                ...state.byCompetence
            };

            const nextCompetenceState = {
                ...state,
                byCompetence: byCompetenceNC,
                competenceSelected: competenceSelected,
                menu: reducerUtils.getActiveMenu(state.menu, competenceSelected.id,  byCompetenceNC[competenceSelected.id])
            };

            return nextCompetenceState;

        case UPDATE_TAG_COLLECTION_COMPETENCE:
            const { idSelectedCC , tagsCollection } = actions.competence;
            const updateTagCollectionCompetenceState = {
                ...state,
                byCompetence: {
                    ...state.byCompetence
                },
                competenceSelected: {
                    ...state.competenceSelected,
                    tagsCollection
                },
                menu: reducerUtils.getActiveMenu(state.menu, idSelectedCC, state.byCompetence[idSelectedCC])
            };

            return updateTagCollectionCompetenceState;

        case UPDATE_SUMMARY:
                const currentCompetenceId = state.competenceSelected.id;
                const updateSummaryState = {
                    ...state,
                    competenceSelected: {
                        ...state.competenceSelected
                    },
                    byCompetence: {
                        ...state.byCompetence,
                        [currentCompetenceId]: {
                            ...state.byCompetence[currentCompetenceId],
                            summary: reducerUtils.getSummary(state.byCompetence[currentCompetenceId]['tagsSelected'])
                        }
                    },
                    language: i18n.language
                };

                return updateSummaryState;
        default:
            return state;
    }
}