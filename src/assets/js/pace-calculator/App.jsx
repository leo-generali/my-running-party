import { h, Fragment } from "preact";
import { usePaceCalculatorState, usePaceCalculatorDispatch } from "./store";
import TimeInput from "../components/TimeInput";

const App = () => {
  return (
    <form>
      <TimeInput />
    </form>
  );
};

export default App;
