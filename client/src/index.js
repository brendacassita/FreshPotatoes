import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./providers/AuthProvider";
import { initMiddleware } from 'devise-axios';
import "./components/shared/localization/i18n"

initMiddleware();


ReactDOM.render(
  
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>,
 
  document.getElementById("root")
);




// <App/> being rendered inside <AuthProvider>