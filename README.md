## vue项目搭配graphql的demo
create by Chanphy on 2019.7.16
> 前言：目前国内最流行的莫过于resful规范的接口，`graphql`算是`resful`规范的一个进阶，但是国内使用的公司还是非常少的。对于前端来说，可能我们更多的是在乎接口返回什么数据，而不是以给与数据的形式。回顾做过的工程目录，发现传统形式的做法，我可能需要一个文件夹单独管理这些`api`，而`graphql`的概念是只有一个入口，查询语句由前端传入后台，后台根据这些语句进行数据的返回，看着好像减少了`api`管理的成本。但是增加了对于`graphql`语句的学习成本，其中利弊也有很多不一样的看法。但是先玩一下再说，说不定哪天就成为主流的一种前后台对接方式了。
### 先了解几个概念
- 什么是 `GraphQL`：
`GraphQL` 是由 `Facebook` 创造的用于描述复杂数据模型的一种查询语言。这里查询语言所指的并不是常规意义上的类似 `sql` 语句的查询语言，而是一种用于前后端数据查询方式的规范。

- 什么是 `Apollo GraphQL`：
`Apollo GraphQL` 是基于 `GraphQL` 的全栈解决方案集合。从后端到前端提供了对应的 `lib` 使得开发使用 `GraphQL` 更加的方便

### 项目依赖包
```cmd
npm install --save vue-apollo graphql apollo-client apollo-link apollo-link-http apollo-cache-inmemory graphql-tag
```
### webpack loader配置  `/vue.config.js`
增加了已经写好的开发环境地址，以及`.gql`和`.graphql`文件的解析。
```javascript
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
```
### 新增`graphql`配置文件 `/src/vue-apollo.js`
`vuex`中无法通过`this`拿到初始化之后的`apollo`，所以把能发起请求的`applloClient`单独抽离维护
```javascript
    import { ApolloClient } from 'apollo-client'
    import { HttpLink } from 'apollo-link-http'
    import { InMemoryCache } from 'apollo-cache-inmemory'

    const httpLink = new HttpLink({
        // You should use an absolute URL here
        uri: '/graphql',
    })

    // Create the apollo client
    export const apolloClient = new ApolloClient({
        link: httpLink,
        cache: new InMemoryCache(),
        connectToDevTools: true,
    })
```
### 项目运行
```cmd
npm run serve
```
### 项目打包
```cmd
npm run build
```