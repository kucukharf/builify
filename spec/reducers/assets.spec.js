import expect from 'unexpected';
import reducer from '../../source/javascript/reducers/assets';
import * as ActionTypes from '../../source/javascript/actions/constants';

describe('Assets reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {}),
      'to equal',
      []
    );
  });

  it('should handle DELETE_ALL_ASSETS', () => {
    expect(
      reducer(undefined, {
        type: ActionTypes.DELETE_ALL_ASSETS
      }),
      'to equal',
      []
    );
  });
});
