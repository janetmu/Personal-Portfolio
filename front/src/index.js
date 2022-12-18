import React from "react";
//import ReactDOM from 'react-dom';
import { createRoot } from "react-dom/client";

import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";

import App from "./App";

const root = createRoot(document.getElementById("root")); // createRoot(container!) if you use TypeScript
root.render(<App />);
