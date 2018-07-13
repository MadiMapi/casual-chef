import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";

// import indexRoutes from "./routes/index.jsx";
import Router from "./routes/index.jsx"

import "./assets/scss/material-kit-react.css?v=1.1.0";

import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<Router />, document.getElementById("root"));
registerServiceWorker();

// var hist = createBrowserHistory();

// ReactDOM.render(
//   <Router history={hist}>
//     <Switch>
//       {indexRoutes.map((prop, key) => {
//         return <Route path={prop.path} key={key} component={prop.component} />;
//       })}
//     </Switch>
//   </Router>,
//   document.getElementById("root")
// );
