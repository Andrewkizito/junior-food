//Importing helper functions
import React from "react";
import ReactDOM from "react-dom/client";

//Importing root app
import App from "./App";

//Importing config
import { Amplify } from "aws-amplify";
import config from "./aws-exports.js";

console.log(config);

//Importing global styles
import "./index.css";

Amplify.configure(config);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
