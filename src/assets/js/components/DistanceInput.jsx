import { h, Fragment } from "preact";
import { useEffect } from "preact/hooks";
import {
  usePaceCalculatorState,
  usePaceCalculatorDispatch,
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

const DistanceInput = () => {
  const state = usePaceCalculatorState();
  const dispatch = usePaceCalculatorDispatch();

  useEffect(() => {
    const distance = state.inputDistance;
    dispatch({
      type: "state/UPDATE_STATE",
      payload: distance,
      stateType: "distance",
    });
  }, [state.inputDistance]);

  return (
    <fieldset>
      <legend>Distance</legend>
      <Input
        id="distance"
        name="distance"
        value={state.inputDistance}
        onInput={(evt) => {
          dispatch({
            type: "input/UPDATE_DISTANCE",
            payload: evt.target.value,
          });
        }}
      />
    </fieldset>
  );
};

export default DistanceInput;
