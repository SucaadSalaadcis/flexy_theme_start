import React, { Suspense } from "react";
import { HashRouter } from "react-router-dom";
import { StrictMode } from 'react'
import Spinner from "./views/Spinner/Spinner.jsx";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<Spinner />}>
      <HashRouter>
        <App />
      </HashRouter>
    </Suspense>
  </StrictMode>,
)




