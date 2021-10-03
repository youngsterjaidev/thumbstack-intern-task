import { render } from "react-dom";
import { Router } from "@reach/router";

import App from "./App";
import Bill from "./Bill";

const Main = () => {
  return (
    <Router>
      <App path="/" />
      <Bill path="/bill" />
    </Router>
  );
};

const rootElement = document.getElementById("root");
render(<Main />, rootElement);
