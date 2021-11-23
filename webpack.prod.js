/*
 * @Author: una fu
 * @Date: 2021-11-11 09:25:01
 * @LastEditors: una fu
 * @LastEditTime: 2021-11-11 09:25:01
 * @Description: file content
 * @FilePath: \project\project\mall-admin\webpack.prod.js
 */

// webpack.prod.js
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
    mode: 'production'
});