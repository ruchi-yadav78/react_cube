// import React from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as React from "react";
import * as ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import reportWebVitals from './reportWebVitals';
import Allpages from './allpages';
import Aboutpages from './aboutpages';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Allpages />
  },
  {
    path: "/component/home/aboutpages",
    element: <Aboutpages />
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
