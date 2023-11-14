import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import Router from "./Router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* "Mount" this app under the /inbox URL pathname. All routes and links
        are relative to this name. */}
    <BrowserRouter basename="router">
      <Router/>
    </BrowserRouter>
  </React.StrictMode>
);