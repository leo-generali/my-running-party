import { h } from "preact";
import TimeInput from "../components/TimeInput";
import DistanceInput from "../components/DistanceInput";
import PaceResult from "../components/PaceResult";

const App = () => {
  return (
    <div>
      <form>
        <TimeInput />
        <DistanceInput />
      </form>
      <PaceResult />
    </div>
  );
};

export default App;
