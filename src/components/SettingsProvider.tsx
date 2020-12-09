import { createContext, useContext, useReducer } from 'react';

type Action = { type: 'toggle-displayMetric' };

type State = {
  displayMetric: boolean;
};

const InitialState: State = {
  displayMetric: false,
};

function reducer(state: State, action: Action): State {
  console.log(state, action);
  switch (action.type) {
    case 'toggle-displayMetric':
      return {
        ...state,
        displayMetric: !state.displayMetric,
      };
    default:
      throw new Error();
  }
}

export const SettingsContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({ state: InitialState, dispatch: () => {} });
export const useSettings = () => useContext(SettingsContext);

const SettingsProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, InitialState);

  return (
    <SettingsContext.Provider value={{ state, dispatch }}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
