import { h, createContext } from "preact";
import { useReducer, useContext } from "preact/hooks";

export const PaceCalculatorStateContext = createContext();
export const PaceCalculatorDispatchContext = createContext();

const initialState = {
  time: 0,
  distance: 0,
  unit: "mi",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "update-time": {
      return { ...state, time: action.payload };
    }
    case "decrement": {
      return { count: state.count - 1 };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export const CountProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <PaceCalculatorStateContext.Provider value={state}>
      <PaceCalculatorDispatchContext.Provider value={dispatch}>
        {children}
      </PaceCalculatorDispatchContext.Provider>
    </PaceCalculatorStateContext.Provider>
  );
};

export const usePaceCalculatorState = () => {
  const context = useContext(PaceCalculatorStateContext);
  if (context === undefined) {
    throw new Error(
      "usePaceCalculatorState must be used within the PaceCalculatorProvider"
    );
  }
  return context;
};

export const usePaceCalculatorDispatch = () => {
  const context = useContext(PaceCalculatorDispatchContext);
  if (context === undefined) {
    throw new Error(
      "usePaceCalculatorDispatch must be used within the PaceCalculatorProvider"
    );
  }
  return context;
};
