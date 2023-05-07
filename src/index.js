import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "remixicon/fonts/remixicon.css";
import "aos/dist/aos.css"
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from "@auth0/auth0-react";
import AuthContextProvider from "./component/AuthContextProvider";
// import { ChakraProvider } from '@chakra-ui/react'


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
  domain="dev-zum4necui0sk4w4h.us.auth0.com"
  clientId="7HtmSMinb1tGjGxiFiC1cSBJ8U53x2kb"
  redirectUri={window.location.origin}
  >
    <AuthContextProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </AuthContextProvider>
  </Auth0Provider>
);
