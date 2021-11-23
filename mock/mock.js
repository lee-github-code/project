/*
 * @Author: una fu
 * @Date: 2021-11-22 17:50:37
 * @LastEditors: una fu
 * @LastEditTime: 2021-11-23 14:27:53
 * @Description: file content
 * @FilePath: \project\project\mall-admin\mock\mock.js
 */
import Mock from "mockjs";

export default Mock.mock("/v1/users/captcha", "get", (options) => {
  let params = JSON.parse(options.body);
  console.log("options:", params);
  return {
    ...params,
  };
});
