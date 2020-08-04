import { h, createContext } from "preact";
import { useReducer, useContext } from "preact/hooks";

export const PaceCalculatorStateContext = createContext();
export const PaceCalculatorDispatchContext = createContext();

const initialState = {
  // Raw Values
  time: 0,
  distance: 0,
  pace: 0,
  unit: "mi",

  // Mask Values
  hours: "00",
  minutes: "00",
  seconds: "00",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "input/INPUT_TIME": {
      if (action.payload.length > 2) return { ...state };

      if (userCanModifyInput(action.payload))
        return { ...state, [action.inputType]: action.payload };
    }
    case "data/UPDATE_TIME": {
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

const userCanModifyInput = (payload) => {
  const isZero = parseInt(payload, 10) === 0;
  const isNumber = !!parseInt(payload, 10);
  const isEmpty = payload.length === 0;

  return isZero || isNumber || isEmpty;
};
