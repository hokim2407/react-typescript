
import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App";
import "../public/css/index.css";

createRoot(document.getElementById("root") as HTMLElement).render(<App />);
