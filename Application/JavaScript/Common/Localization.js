import { getProperty } from './Common';
import stripJSONComments from 'strip-json-comments';
import languageData from '../Data/Builder/Localization.json';

let languageSetting = 'en';

export function setLanguage (language) {
  languageSetting = language;
}

export function getLanguage () {
  return languageSetting;
}

export function getString (query) {
  if (!query) {
    return;
  }

  let result = getProperty(languageData, languageSetting.toString() + '.' + query);

  if (typeof result !== 'undefined') {
    return result;
  } else {
    //console.warn('Localization - "' + query + '" query not found!');
    return query;
  }
}

export function getLocalization (callback) {
  callback(JSON.parse(stripJSONComments(JSON.stringify(languageData))));
}
