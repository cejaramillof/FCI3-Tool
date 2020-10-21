  
import es from './default.es.json';
import en from './default.en.json';
import SelectTagsComponentEs from '../../components/SelectComponents/SelectTagsComponent/locales/default.es.json';
import SelectTagsComponentEn from '../../components/SelectComponents/SelectTagsComponent/locales/default.en.json';

es['es'] = {...es['es'], SelectTagsComponentEs};
en['en'] = {...en['en'], SelectTagsComponentEn};

export {
  en,
  es,
};