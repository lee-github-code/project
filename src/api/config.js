/*
 * @Author: una fu
 * @Date: 2021-11-22 17:23:17
 * @LastEditors: una fu
 * @LastEditTime: 2021-11-22 18:24:46
 * @Description: file content
 * @FilePath: \project\project\mall-admin\src\api\config.js
 */
import axios from "axios";
//这是api的配置文件
export const SERVER =
  process.env.NODE_ENV == "production" ? "http://api.sortmall.com" : "";
export const VERSION = "v1";

/**
 * 目标 根据配置文件生成一个对象,这个对象的每一个属性是一个方法名,属性的值是一个api的调用方法
 * @param {object} apiConfig
 */
const request = (url, type = "get", params) => {
  const urls = SERVER + "/" + VERSION + url || "";
  const method = type || "get";
  //发送请求
  return new Promise((resolve, rejcect) => {
    const options = {
      method: method,
      url: urls,
      data: params,
    };
    axios(options)
      .then((result) => {
        resolve(result);
      })
      .catch((e) => {
        rejcect(e);
      });
  });
};

export default request;
