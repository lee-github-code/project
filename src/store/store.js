/*
 * @Author: una fu
 * @Date: 2021-11-23 13:16:28
 * @LastEditors: una fu
 * @LastEditTime: 2021-11-23 13:28:41
 * @Description: file content
 * @FilePath: \project\project\mall-admin\src\store\store.js
 */
import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "pages/login/store.js";

export default configureStore({
  reducer: {
    login: loginReducer,
  },
});
