# service-worker-demo

简单的 Service Worker 实例

## 如何运行

1. 全局安装 [simple-server](https://www.npmjs.com/package/simple-server)：`npm i -g simple-server`
2. 在项目目录执行：`simple-server`
3. 打开基于 localhost 的网页，使用 Chrome DevTools（F12） 的 Network 选项卡，切换 Online 到 Offline，再次刷新页面，可以看到页面在离线环境下运行。

## 成功运行的先决条件

- 浏览器支持，查看支持情况：[caniuse](https://caniuse.com/#search=Service%20Workers)
- 必须使用 Web 服务器，并且路径设置正确（本项目运行在 `/`）
- 只能使用 HTTPS 连接，或者使用 `localhost` 或 `127.0.0.1`
