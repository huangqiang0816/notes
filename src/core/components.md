## keep-alive 的实现原理

抽象组件、不会被渲染也不会出现在组件的父组件链中（abstract=true）

接受参数 props

- include - 字符串或正则表达式。只有名称匹配的组件会被缓存
- exclude \- 字符串或正则表达式。任何名称匹配的组件都不会被缓存
- max  \- 数字。最多可以缓存多少组件实例
