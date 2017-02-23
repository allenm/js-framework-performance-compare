## 本项目旨在对比几个流行框架打包后的文件大小和启动速度

### usage

1. `npm install && npm run build-all && npm run start-server`
2. 访问  [localhost:9000](http://localhost:9000)

### 框架和构建方式

1. react , 使用 typescript , webpack ,uglify 构建
2. vue , 使用 vue-loader, webpack , 构建出  runtime only 的版本
3. angular1.6 , 使用 typescript, webpack, uglify 构建 
4. angular2, 使用 typescript, webpack, uglify 构建，额外还有一个依赖 ngc 的 aot + webpack tree shaking 版本

### Development

参考 package.json script 启动各个框架的开发环境