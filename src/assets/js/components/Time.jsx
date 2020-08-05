import { h, Fragment } from "preact";

const Time = ({ children, format = "mm:ss" }) => {
  return (
    <Fragment>{new Date(children * 1000).toISOString().substr(14, 5)}</Fragment>
  );
};

export default Time;
