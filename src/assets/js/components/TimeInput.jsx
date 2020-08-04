import { h, Fragment } from "preact";
import { useEffect } from "preact/hooks";
import {
  usePaceCalculatorState,
  usePaceCalculatorDispatch,
  updateMaskedTime,
} from "../pace-calculator/store";

const Input = ({ id, name, value, onInput }) => {
  return (
    <Fragment>
      <label className="sr-only" htmlFor="id">
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
      Number(state.hours) * 3600 +
      Number(state.minutes) * 60 +
      Number(state.seconds);
  }, [state.hours, state.minutes, state.seconds]);

  return (
    <fieldset>
      <legend>Time</legend>
      <Input
        id="hours"
        name="hours"
        value={state.hours}
        onInput={(evt) => {
          dispatch({
            type: "input/INPUT_TIME",
            payload: evt.target.value,
            inputType: evt.target.name,
          });
        }}
      />
      <Input
        id="minutes"
        name="minutes"
        value={state.minutes}
        onInput={(evt) => {
          dispatch({
            type: "input/INPUT_TIME",
            payload: evt.target.value,
            inputType: evt.target.name,
          });
        }}
      />
      <Input
        id="seconds"
        name="seconds"
        value={state.seconds}
        onInput={(evt) => {
          dispatch({
            type: "input/INPUT_TIME",
            payload: evt.target.value,
            inputType: evt.target.name,
          });
        }}
      />
    </fieldset>
  );
};

export default TimeInput;
