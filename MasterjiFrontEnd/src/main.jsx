import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { AuthProvider } from "../src/Components/Store/Auth.jsx";
import store from './Components/Redux-react/Store/UseStore.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
 <React.StrictMode>
   <AuthProvider>
    <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
    </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
