import {
  RECEIVE_BUILDER_CONFIGURATION,
  PROCESS_TEMPLATE_SELECTION
} from '../Constants/ActionTypes';
import { setLanguage } from '../Common/Localization';

export default function handle (state = {}, action) {
  if (typeof action === 'undefined' || !action) {
    console.log('Warning: no action defined!');
    return;
  }

  switch (action.type) {
    case RECEIVE_BUILDER_CONFIGURATION:
      return action.data;

    case PROCESS_TEMPLATE_SELECTION:
      return action.template;

    default:
      return state;
  }
};