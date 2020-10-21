import { UPDATE_COMPETENCE, UPDATE_LIST, UPDATE_TAG_COLLECTION_COMPETENCE , NEXT_COMPETENCE, UPDATE_SUMMARY, UPDATE_USER, UPDATE_LANGUAGE } from './../types';

export function updateTagList({id, tagsSelected, level}) {
  return {
      type: UPDATE_LIST,
      competence: { 
        competenceId: id,
        tagsSelected,
        level
      }
    }
}

export function nextCompetence() {
  return {
      type: NEXT_COMPETENCE
    }
}

export function updateLanguage(lang) {
  return {
    type: UPDATE_LANGUAGE,
    lang
  }
}

export function updateCompetence({ id, description }) {
  return {
      type: UPDATE_COMPETENCE,
      competence:{
        id,
        description
      }
    }
}

export function updateTagCollectionCompetence({id, tags}) {
  return {
      type: UPDATE_TAG_COLLECTION_COMPETENCE,
      competence:{
        idSelectedCC: id,
        tagsCollection: tags
      }
    }
}

export function updateUser (user) {
  return {
      type: UPDATE_USER,
      userData:{
        user
      }
    }
}


export function updateSummary () {
  return {
    type: UPDATE_SUMMARY
  }
}
