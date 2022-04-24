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