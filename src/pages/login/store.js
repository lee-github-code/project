/*
 * @Author: una fu
 * @Date: 2021-11-23 13:20:00
 * @LastEditors: una fu
 * @LastEditTime: 2021-11-23 14:15:47
 * @Description: file content
 * @FilePath: \project\project\mall-admin\src\pages\login\store.js
 */
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
  },
  reducers: {
    userDispatch: (state, params) => {
      state.user = params.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { userDispatch } = userSlice.actions;

export default userSlice.reducer;
