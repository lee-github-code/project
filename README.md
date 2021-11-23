# project
包含react版本的admin，手动webpack配置
#启动 npm start
2021/11/23 为项目添加mock 和 store  
  mock目的：拦截ajax请求返回mock数据，使用方法：
  1.npm install mockjs
  
  2.创建mock.js ，需要注意的是第一个参数url最前方加/ 根路径
    import Mock from "mockjs";
    //1.不需要拦截请求参数
    export default Mock.mock("/v1/users/captcha", "get", {
      name:tom,
      data:[1,2],
    });
    //2.需要拦截请求参数并返回相应参数
    export default Mock.mock("/v1/users/captcha", "get", (options) => {
      //options:是指传过来的各种参数
      let params = JSON.parse(options.body);
      return {
      //返回的是参数
        ...params,
      };
    });
  
