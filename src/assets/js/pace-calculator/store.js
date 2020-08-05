import { h, createContext } from "preact";
import { useReducer, useContext } from "preact/hooks";
import { secondsToDisplay } from "../utils/time";

export const PaceCalculatorStateContext = createContext();
export const PaceCalculatorDispatchContext = createContext();

const initialState = {
  // Raw Values
  time: 0, // in seconds
  distance: 1609, // in meters
  pace: 0, // meters/second
  unit: "mi",

  // Input Values
  inputHours: "00",
  inputMinutes: "00",
  inputSeconds: "00",
  inputDistance: "1609",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "input/UPDATE_TIME": {
      if (action.payload.length > 2) return { ...state };

      if (userCanModifyInput(action.payload)) {
        return {
          ...state,
          [action.inputType]: action.payload,
        };
      }
    }

    case "input/UPDATE_DISTANCE": {
      if (userCanModifyInput(action.payload)) {
        return {
          ...state,
          inputDistance: action.payload,
          distance: action.payload,
        };
      }
    }

    case "state/UPDATE_STATE": {
      return { ...state, [action.stateType]: action.payload };
    }

    case "state/CALCULATE_PACE": {
      return { ...state, pace: state.time / state.distance };
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
  const isEmpty = payload.length === 0;

  return isZero || isEmpty || isNumeric(payload);
};

const isNumeric = (num) => !isNaN(num);
