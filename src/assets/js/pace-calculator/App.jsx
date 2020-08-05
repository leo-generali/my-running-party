import { h, Fragment } from "preact";
import TimeInput from "../components/TimeInput";
import DistanceInput from "../components/DistanceInput";
import { usePaceCalculatorState } from "../pace-calculator/store";

const App = () => {
  const state = usePaceCalculatorState();
  return (
    <form>
      <TimeInput />
      <DistanceInput />
      {console.log(state)}
    </form>
  );
};

export default App;
