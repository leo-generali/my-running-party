import { h, render } from "preact";
import App from "./pace-calculator/App";
import { CountProvider } from "./pace-calculator/store";

render(
  <CountProvider>
    <App />
  </CountProvider>,
  document.getElementsByClassName("js-pace-calculator-container")[0]
);
