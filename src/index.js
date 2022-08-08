import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import "./App.css"



ReactDOM.render(<BrowserRouter> <App/></BrowserRouter>,document.getElementById("root"))