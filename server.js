/*
 * @Author: una fu
 * @Date: 2021-11-22 17:41:39
 * @LastEditors: una fu
 * @LastEditTime: 2021-11-22 17:43:30
 * @Description: file content
 * @FilePath: \project\mall-admin\server.js
 */
// 引进express
const express = require("express");
// 引进mockjs
const Mock = require("mockjs");

// 准备服务对象
const app = express();

// 监听路由
app.get("/users/captcha", (req, res) => {
  // 准备随机数据
  var data = Mock.mock({
    code: 200,
    data: {
      username: "",
      password: "",
    },
  });
  res.end(JSON.stringify(data));
});

// 开启服务
app.listen(3000);
