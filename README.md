# app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

函数的防抖和节流
可用插件 lodash
节流： 在规定的间隔时间范围内不会重复的触发回调，只有大于这个时间间隔才会触发回调，把频繁触发变为少量触发
用户操作很频繁，但是把频繁的操作变为少量的操作{可以给浏览器充裕的时间解析代码}
闭包+延时器

防抖：前面所有的触发都被取消，最后一次执行在规定时间之后才会触发，也就是说如果连续快速的触发，只会执行一次
用户操作很频繁，但只能执行一次
闭包+延时器

mockjs插件 模拟数据
使用步骤
1）在项目中src文件夹中创建mock文件夹
2）准备JSON数据（mock文件夹中创建响应的JSON文件） -----格式化内容，不要留有空格否则会跑步去了
3）把mock数据需要的图片放置到public文件夹中  public文件夹在打包时，会把相应的资源原封不动的打包到dist文件中
4）创建mockserve.js通过mockjs插件实现模拟数据
5）mockserve.js文件在入口文件夹中引入（至少需要执行一次，才能模拟数据）

ListContainer组件开发重点
1）安装swiper插件
2）引入swiper
3）页面中要先有结构
4）new Swiper 实例

$nextTick: 一个生命周期函数，在下次DOM更新结束之后，执行回调。在 修改数据之后立即使用这个方法，获取更新后的DOM
            可以保证页面中的结构一定是有的，经常和很多插件一起使用{需要DOM存在的插件}

开发floor组件
1）获取服务器数据
2）v-for 遍历floor组件 注意：v-for 也可以在自定义组件中使用
3）组件通信方式
    props：用于父子间通信：
        自定义事件 @on @emit 可以实现父子间通信
    bus全局事件总线 全能
    pubsub-js:vue当中几乎不用 全能
    插槽
    vuex

search模块开发
1）先静态界面 + 静态组件拆分出来
2）发请求API
3）vuex（三连环）
4）组件获取仓库数据，动态展示数据
