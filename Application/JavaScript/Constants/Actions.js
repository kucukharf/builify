import { actionMirror } from '../Common/Common';

export default actionMirror(true, [
  // Builder's actions
  'INITIALIZE',
  'REMOVE_LOADING_SCREEN',
  'GET_BUILDER_CONFIGURATION',
  'RECEIVE_BUILDER_CONFIGURATION',
  'PROCCESS_BUILDER_CONFIGURATION_LOCALIZATION',
  'GET_LOCALIZATION',
  'LOADED_ASSET',

  // Template's actions
  'GET_SELECTED_TEMPLATE_DATA',

  // Page's actions
  'START_NEW_PAGE',
  'LOAD_PREVIOUS_PAGE',
  'CHECK_IF_PREVIOUS_PAGE_EXISTS_IN_LOCALSTORAGE',

  // Tab's actions
  'OPEN_TAB',
  'CLOSE_TAB',
  'OPEN_SIDETAB',
  'CLOSE_SIDETAB',
  'SET_SWATCH',
  'SET_FONT',

  // Preview's actions
  'OPEN_PREVIEW',
  'CLOSE_PREVIEW',

  // Notification's actions
  'ADD_NOTIFICATION',
  'ALERT_NOTIFICATION_FOR_REMOVAL',
  'REMOVE_NOTIFICATION',
  'REMOVE_ALL_NOTIFICATIONS',

  // Colorpicker's actions
  'OPEN_COLORPICKER',
  'SET_COLOR_FROM_COLORPICKER',
  'CLOSE_COLORPICKER',

  // Tempate design's actions
  'LOAD_CONTENTBLOCK_TO_PAGE',
  'CURRENT_HOVER_BLOCK',
  'REMOVE_CONTENTBLOCK',
  'FILTER_CONTENTBLOCKS',
  'OPEN_CONTEXTMENU_TOOLBOX',
  'CLOSE_CONTEXTMENU_TOOLBOX',
  'OPEN_IMAGE_EDIT_MODAL',
  'OPEN_LINK_EDIT_MODAL',
  'CLOSE_MODAL'
]);
