import { h, Fragment } from "preact";
import { useEffect } from "preact/hooks";
import {
  usePaceCalculatorState,
  usePaceCalculatorDispatch,
} from "../pace-calculator/store";

const Input = ({ id, name, value, onInput }) => {
  return (
    <Fragment>
      <label className="sr-only" htmlFor={id}>
        {name}
      </label>
      <input
        id={id}
        name={name}
        className="text-black"
        pattern="[0-9]*"
        onInput={onInput}
        type="text"
        value={value}
      />
    </Fragment>
  );
};

const TimeInput = () => {
  const state = usePaceCalculatorState();
  const dispatch = usePaceCalculatorDispatch();

  useEffect(() => {
    const time =
      Number(state.inputHours) * 3600 +
      Number(state.inputMinutes) * 60 +
      Number(state.inputSeconds);
    dispatch({ type: "state/UPDATE_STATE", payload: time, stateType: "time" });
  }, [state.inputHours, state.inputMinutes, state.inputSeconds]);

  return (
    <fieldset>
      <legend>Time</legend>
      <Input
        id="hours"
        name="hours"
        value={state.inputHours}
        onInput={(evt) => {
          dispatch({
            type: "input/UPDATE_TIME",
            payload: evt.target.value,
            inputType: "inputHours",
          });
        }}
      />
      <Input
        id="minutes"
        name="minutes"
        value={state.inputMinutes}
        onInput={(evt) => {
          dispatch({
            type: "input/UPDATE_TIME",
            payload: evt.target.value,
            inputType: "inputMinutes",
          });
        }}
      />
      <Input
        id="seconds"
        name="seconds"
        value={state.inputSeconds}
        onInput={(evt) => {
          dispatch({
            type: "input/UPDATE_TIME",
            payload: evt.target.value,
            inputType: "inputSeconds",
          });
        }}
      />
    </fieldset>
  );
};

export default TimeInput;
