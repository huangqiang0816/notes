# 测试用例编写

## karma 测试环境搭建

1. 安装 `karma`

```bash
  npm install karma
```

2. 生成配置文件

```bash
  karma init
```

3. 修改配置文件

```javascript

  // list of files / patterns to load in the browser

  files: [
    "./src/**/*.js",
    "./tests/**/*.spec.js"
  ],

  // if true, Karma captures browsers, runs the tests and exits
  singleRun: true,
```

4. 安装插件

```bash
  npm install karma-jasmine karma-phantomjs-launcher jasmine-core --save-dev
```

5. 执行命令

```bash
  karma start
```

6. 代码覆盖率

```bash
  npm install  karma-coverage --save-dev
```
