## Webpack 性能优化与原理分析

### 性能分析篇

1. 深度 treeshaking

   webpack-deep-scope-plugin

   cssnano（压缩css ,删除注释等。。）

   purifycss-webpack -> purgecss-webpack-plugin 已经换了

2. 开启多核压缩 happypack 多线程编译 webpack 不支持的情况下使用 thread-loader,

   JavaScript 的多核压缩可以开启 terser-webpack-plugin(多核压缩 uglifyjs-webpack-
   plugin 官⽅维护 ⾮官⽅维护 webpack-parallel-uglify-plugin)

```javascript
const TerserJSPlugin = require("terser-webpack-plugin");
module.exports = {
  optimization: {
    minimizer: [
      new TerserJSPlugin({
        cache: true, // 是否缓存
        paraller: true, // 是否并⾏打包
        sourceMap: true
      })
    ]
  }
};
```

 CSS 的多核压缩 optimize-css-assets-webpack-plugin

3. speed-measure-webpack-plugin 打包速度分析
4. progress-bar-webpack-plugin 打包进度展示
5. 对整个⼯程开启缓存 hard-source-webpack-plugin
6. webpack-dashboard 增强了 webpack 的输出，包含依赖的⼤⼩、进度和其他细节。
   webpack-bundle-analyzer 打包结果分析 webpack --profile --json > stats.json 14-1 ht
   tp://alexkuz.github.io/webpack-chart/ 14-2 http://webpack.github.io/analyse/
7. inline-manifest-webpack-plugin 把 runtime 放到 html ⾥ html-inline-css-webpack-
   plugin 把⼀些核⼼的 CSS 放到⻚⾯内部 html-webpack-inline-source-plugin 内部资源
   引⼊
8. cache-loader loader 的缓存 => 'babel-loader?cacheDirectory=true' exclude:
   /node_modules/, // 排除不处理的⽬录 include: path.resolve(\_\_dirname, 'src') // 精确指定
   要处理的⽬录
9. 开启全局的编译缓存 hard-source-webpack-plugin
10. 压缩图⽚ image-webpack-loader
11. HtmlWebpackPlugins 压缩推荐选项

```javascript
new HtmlWebpackPlugin({
  inlineSource: ".css$",
  template: path.join(__dirname, `src/${pageName}/index.html`),
  filename: `${pageName}.html`,
  chunks: ["vendors", pageName],
  inject: true,
  minify: {
    html5: true,
    collapseWhitespace: true,
    preserveLineBreaks: false,
    minifyCSS: true,
    minifyJS: true,
    removeComments: false
  }
});
```

12. prepack-webpack-plugin 代码求值
13. @babel/plugin-syntax-dynamic-import 动态引⼊

### 工程化与原理

- 将构建配置设计成⼀个库，⽐如：hjs-webpack、Neutrino、webpack-blocks 抽成⼀个
  ⼯具进⾏管理，⽐如：create-react-app, kyt, nwb

- 更友好的提示错误 friendly-errors-webpack-plugin webpack-build-notifier set-iterm2-
  badge && node-bash-title 标题和窗⼝内容修改

```javascript
function() {
    this.hooks.done.tap('done', (stats) => {
        if (stats.compilation.errors &&
        stats.compilation.errors.length && process.argv.indexOf('--watch')
        == -1)
        {
            console.log('build error');
            process.exit(1);
        }
    })
}
```

- splitchunks 公⽤库的代码拆分 去除打包 分离⻚⾯公⽤包 html-webpack-externals-
  plugin

- 使⽤动态 polyfill

  它会根据你的浏览器 UA 头，判断你是否⽀持某些特性，从⽽返回给你⼀个合适的
  polyfill。

- 集成到 CI 监控⽂件的⼤⼩ https://github.com/siddharthkp/bundlesize
- set-iterm2-badge && node-bash-title 标题和窗⼝内容修改
