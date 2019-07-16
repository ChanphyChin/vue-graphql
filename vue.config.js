var path = require('path');
var merge = require('webpack-merge');
module.exports = {
    devServer: {
      proxy: 'http://172.16.10.182:8888'
    },
    chainWebpack: config => {
      config.module
        .rule('graphql')
        .test(/\.(graphql|gql)$/)
        .use('graphql-tag/loader')
          .loader('graphql-tag/loader')
          .end()
    }
}