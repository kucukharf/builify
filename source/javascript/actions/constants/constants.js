import keyMirror from 'ttkeymirror';

export default keyMirror([
  // Builder's actions
  'INITIALIZE',
  'REMOVE_LOADING_SCREEN',
  'GET_BUILDER_CONFIGURATION',
  'RECEIVE_BUILDER_CONFIGURATION',
  'RECEIVE_ASIDE_CONFIGURATION',
  'PROCCESS_BUILDER_CONFIGURATION_LOCALIZATION',
  'GET_LOCALIZATION',
  'GET_ICONPACKS',
  'ADD_ICONPACK_SOURCES_TO_HEAD',
  'GET_IMAGESLIBRARY',
  'UPLOADED_IMAGE',
  'LOGIC_INITIALIZED',
  'GET_FONTS',

  // Template's actions
  'GET_TEMPLATE_DATA',

  // Page's actions
  'SET_PAGE_TITLE',
  'START_NEW_PAGE',
  'LOAD_PREVIOUS_PAGE',
  'DO_PREVIOUS_PAGES_EXIST_IN_STORAGE',
  'GET_CURRENT_PAGE_DATA',
  'SAVE_CURRENT_PAGE',
  'DOWNLOAD_PAGES',
  'RESTART_PAGE',
  'SET_PAGE_TITLE',
  'SET_PAGE_FILENAME',

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
  'SET_PREVIEW_MODE',
  'PREVIEW_MODE_ROTATE',

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
  'BLOCK_WAS_RENDERED_TO_PAGE',
  'UPDATE_CONTENTBLOCK_SOURCE',
  'CONTENTBLOCK_WAS_UPDATED',
  'CURRENT_HOVER_BLOCK',
  'REMOVE_CONTENTBLOCK',
  'CLONE_ITEM',
  'CHANGE_BASE_FONT_SIZE',
  'CHANGE_BASELINE_VALUE',

  // Checkbox's actions
  'TOGGLE_BASELINE',

  // Modal's/Dialog's actions
  'SELECT_IMAGE',
  'OPEN_CONTENTBLOCK_SETTINGS',
  'SORT_CONTENTBLOCKS',
  'FILTER_CONTENTBLOCKS',
  'OPEN_CONTEXTMENU_TOOLBOX',
  'CLOSE_CONTEXTMENU_TOOLBOX',
  'OPEN_IMAGE_EDIT_MODAL',
  'OPEN_LINK_EDIT_MODAL',
  'OPEN_VIDEO_EDIT_MODAL',
  'OPEN_COUNTDOWN_EDIT_MODAL',
  'OPEN_ICON_EDIT_MODAL',
  'OPEN_CONTENTBLOCK_SOURCE_EDIT_MODAL',
  'OPEN_PREVIOUS_PAGES_SELECT_MODAL',
  'OPEN_DOWNLOAD_MODAL',
  'OPEN_RESTART_MODAL',
  'CLOSE_MODAL'
]);