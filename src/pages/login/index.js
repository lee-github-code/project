/*
 * @Author: una fu
 * @Date: 2021-11-11 10:33:23
 * @LastEditors: una fu
 * @LastEditTime: 2021-11-23 14:32:06
 * @Description: file content
 * @FilePath: \project\project\mall-admin\src\pages\login\index.js
 */

import { LoginForm, ProFormText, ProFormCaptcha } from "@ant-design/pro-form";
import {
  MobileOutlined,
  LockOutlined,
  AlipayCircleOutlined,
  TaobaoCircleOutlined,
  WeiboCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { message, Space } from "antd";
import React, { useState } from "react";
import { getCaptcha } from "api";
import { useSelector, useDispatch } from "react-redux";
import { userDispatch } from "./store.js";

const iconStyles = {
  marginLeft: "16px",
  color: "rgba(0, 0, 0, 0.2)",
  fontSize: "24px",
  verticalAlign: "middle",
  cursor: "pointer",
};

const login = () => {
  const [data, setData] = useState(null);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.login.user);

  const handleSumit = (result) => {
    // 请求接口
    getCaptcha(result).then((res) => {
      if (res.status !== 200) {
        message.error("请求错误");
        return;
      }
      setData(res.data);
      dispatch(userDispatch(res.data));

      message.success(`登陆成功,欢迎用户${res.data.username}`);
    });
  };

  return (
    <LoginForm
      logo="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
      title="Github"
      subTitle="全球最大同性交友网站"
      actions={
        <Space>
          其他登录方式
          <AlipayCircleOutlined style={iconStyles} />
          <TaobaoCircleOutlined />
          <WeiboCircleOutlined />
        </Space>
      }
      onFinish={handleSumit}
    >
      <ProFormText
        fieldProps={{
          size: "large",
          prefix: <UserOutlined className={"prefixIcon"} />,
        }}
        name="username"
        placeholder={"用户名"}
        rules={[
          {
            required: true,
            message: "请输入用户名！",
          },
        ]}
      />
      <ProFormText.Password
        fieldProps={{
          size: "large",
          prefix: <LockOutlined className={"prefixIcon"} />,
        }}
        name="password"
        placeholder={"密码"}
        rules={[
          {
            required: true,
            message: "请输入密码！",
          },
        ]}
      />
      <ProFormText
        fieldProps={{
          size: "large",
          prefix: <MobileOutlined className={"prefixIcon"} />,
        }}
        name="mobile"
        placeholder={"手机号"}
        rules={[
          {
            required: true,
            message: "请输入手机号！",
          },
          {
            pattern: /^1\d{10}$/,
            message: "手机号格式错误！",
          },
        ]}
      />
      <ProFormCaptcha
        fieldProps={{
          size: "large",
          prefix: <LockOutlined className={"prefixIcon"} />,
        }}
        captchaProps={{
          size: "large",
        }}
        placeholder={"请输入验证码"}
        captchaTextRender={(timing, count) => {
          if (timing) {
            return `${count} ${"获取验证码"}`;
          }
          return "获取验证码";
        }}
        name="captcha"
        rules={[
          {
            required: true,
            message: "请输入验证码！",
          },
        ]}
        onGetCaptcha={async () => {
          message.success("获取验证码成功！验证码为：1234");
        }}
      />
    </LoginForm>
  );
};
export default login;
