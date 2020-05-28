-   绘制一个三角形，还有哪几种方式？

    ```html
    <div class="box"></div>
    ```

    ```css
    .box {
        width: 0;
        height: 0;
        border-left: 0px solid transparent;
        border-right: 0px solid transparent;
        border-top: 50px solid #ff9900;
    }
    ```

    > svg，canvas 等

*   实现水平垂直居中的方式？

    ```html
    <div class="box">
        <div class="center"></div>
    </div>
    ```

    ```css
    .center {
        width: 100px;
        height: 100px;
    }
    <!-- 弹性盒布局 -- > 
    .box {
        width: 500px;
        height: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    <!-- 定位 -- > 
    .box {
        position: relative;
    }
    <!-- 已知宽高 -->
    .center {
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -50px;
        margin-top: -50px;
    }
    <!-- 未知宽高 -->
    .center{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate3d(-50%, -50%, 0);

    }
    ```

*   说出你知道的 es6、es7 的新特性
*   array 的一些新的属性
*   描述一下 generator
*   描述一下 promise 的原理
*   你了解过设计模式吗？（从自己说的里面选择一个说明一下）
    说一下什么是重绘和重排？一次性给给你大量的 dom 怎么优化？Vue 中一次性 200 条弹幕量怎么处理？
*   （vue/react 二选一）
*   vue 的生命周期？
*   说一下路由的钩子在 vue 生命周期的体现？
*   计算属性和普通属性的区别？
*   vue 的通信方式有哪些？
*   用过 mixin 吗？描述一下
*   描述一下自定义指令（你是怎么用自定义指令的）
*   说一下 vue 中所有带\$的属性/方法
*   什么是虚拟 dom？说一下你对虚拟 dom 的理解
*   你是如何做性能优化的？
*   http 强缓存和协商缓存的区别？
*   cache-contorl 有哪些设定值？
*   AMD 和 CMD 有哪些区别？
*   微任务和宏任务的区别？
*   说一下节流和防抖？
*   浏览器的事件循环和 event loop？
*   你是怎么配置开发环境的？
