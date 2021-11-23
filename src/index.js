/*
 * @Author: una fu
 * @Date: 2021-11-11 09:26:02
 * @LastEditors: una fu
 * @LastEditTime: 2021-11-23 13:27:35
 * @Description: file content
 * @FilePath: \project\project\mall-admin\src\index.js
 */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { Provider } from "react-redux";
import store from "./store/store.js";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
