// 开发环境的插件 electron
import type { Plugin } from "vite";
import type { AddressInfo } from "node:net";
import { spawn } from "child_process";
import fs from "fs";
// vite插件要求必须导出一个对象，必须要name属性
// 在这个对象有很多钩子
const buildBackground = () => {
  require("esbuild").buildSync({
    entryPoints: ["src/background.ts"],
    bundle: true,
    outfile: "dist/background.js",
    platform: "node",
    target: "node12",
    external: ["electron"],
  });
};
export const ElectronDevPlugin = (): Plugin => {
  return {
    name: "electron-dev",
    configureServer(server) {
      buildBackground(); // 热更新，比如打开控制台的热更新
      server.httpServer?.once("listening", () => {
        // 读取vite服务信息   { address: '127.0.0.1', family: 'IPv4', port: 5173 }， AddressInfo 不加断言addressInfo拿不到port属性值
        const addressInfo = server.httpServer?.address() as AddressInfo;
        // 拼接ip地址和端口号: 给 electron 启动服务的时候要用
        const IP = `http://localhost:${addressInfo.port}`;
        // 第一个参数是electron的入口文件
        // require('electron') 返回的一个路径, 且 electron 不认识ts文件，编译成js文件
        // 进程传参发送给electron
        let electronProgress = spawn(require("electron"), [
          "dist/background.js",
          IP,
        ]);
        fs.watchFile("src/background.ts", () => {
          electronProgress.kill();
          buildBackground();
          electronProgress = spawn(require("electron"), [
            "dist/background.js",
            IP,
          ]);
        });
        // 监听输出的日志
        electronProgress.stderr.on("data", (data) => {
          console.log(data.toString());
        });
      });
    },
  };
};
