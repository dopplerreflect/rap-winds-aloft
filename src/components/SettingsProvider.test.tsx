import { reducer } from './SettingsProvider';

const InitialState = {
  displayMetric: false,
};

describe('SettingsProvider reducer', () => {
  test('toggle-displayMetric', () => {
    expect(reducer(InitialState, { type: 'toggle-displayMetric' })).toEqual({
      displayMetric: true,
    });
  });
});
