/*
 * @Author: una fu
 * @Date: 2021-11-22 17:22:35
 * @LastEditors: una fu
 * @LastEditTime: 2021-11-23 14:26:38
 * @Description: file content
 * @FilePath: \project\project\mall-admin\src\api\index.js
 */
import request from "./config";
export const getCaptcha = async (params) => {
  const result = await request("/users/captcha", "get", params);
  console.log('result:',result);
  if (result.status == 200) {
    return result;
  }
};
