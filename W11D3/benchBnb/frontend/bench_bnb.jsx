
import React from "react";
import ReactDOM from "react-dom";
import { login } from './actions/session_actions';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  const root = document.getElementById("root");
  window.login = login;
  // window.store = store; 
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});