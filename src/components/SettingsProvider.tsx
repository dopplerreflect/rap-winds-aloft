import { createContext, useContext, useEffect, useReducer } from 'react';
import { Settings, Action } from '../types';

const InitialState: Settings = JSON.parse(
  localStorage.getItem('settings') || 'null'
) || {
  displayMetric: false,
};

export const reducer = (state: Settings, action: Action): Settings => {
  switch (action.type) {
    case 'toggle-displayMetric':
      return {
        ...state,
        displayMetric: !state.displayMetric,
      };
    default:
      return state;
  }
};

export const SettingsContext = createContext<{
  state: Settings;
  dispatch: React.Dispatch<Action>;
}>({ state: InitialState, dispatch: () => {} });
export const useSettings = () => useContext(SettingsContext);

const SettingsProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, InitialState);

  useEffect(() => {
    localStorage.setItem('settings', JSON.stringify(state));
  }, [state]);

  return (
    <SettingsContext.Provider value={{ state, dispatch }}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
