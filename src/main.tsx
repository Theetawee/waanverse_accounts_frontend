import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import { registerSW } from "virtual:pwa-register";

registerSW({ immediate: true });


if (process.env.NODE_ENV === "production") {
    disableReactDevTools();
}

import './index.css'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

      <App />

  </React.StrictMode>,
)
