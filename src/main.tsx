import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from "./App";
import ScrollToTop from "./components/ScrollToTop";


ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path="/" caseSensitive element={<App />} />
			</Routes>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
