import { h, Fragment } from "preact";
import { usePaceCalculatorState, usePaceCalculatorDispatch } from "./store";
const App = () => {
  const state = usePaceCalculatorState();

  return (
    <div>
      <h1>Hello World</h1>
      {console.log(state)}
    </div>
  );
};

export default App;
