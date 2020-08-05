import { h } from "preact";
import { useEffect } from "preact/hooks";
import Time from "../components/Time";
import {
  usePaceCalculatorState,
  usePaceCalculatorDispatch,
} from "../pace-calculator/store";
import { convertSecondsPerMeter } from "../utils/time";

const PaceResult = () => {
  const state = usePaceCalculatorState();
  const dispatch = usePaceCalculatorDispatch();

  useEffect(() => {
    dispatch({ type: "state/CALCULATE_PACE" });
  }, [state.time, state.distance]);

  return <Time>{convertSecondsPerMeter(state.pace)}</Time>;
};

export default PaceResult;
