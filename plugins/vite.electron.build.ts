// 生产环境的插件 electron
import type { Plugin } from "vite";
import fs from "fs";
import * as ElectronBuilder from "electron-builder";
import path from "path";
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
// 打包 要等vite打完包之后就有index.html 再执行 electron-builder打包
export const ElectronBuildPlugin = (): Plugin => {
  return {
    name: "electron-build",
    closeBundle: () => {
      // 防止没有执行 npm run dev，直接打包，也为了保持代码的一致性，所以
      buildBackground();
      //   electron-builder 需要指定 package.json main
      const json = JSON.parse(fs.readFileSync("package.json", "utf-8"));
      json.main = "background.js";
      fs.writeFileSync("dist/package.json", JSON.stringify(json, null, 4));
      //    bug electron-builder 它会下载垃圾文件，以下是预防操作
      fs.mkdirSync("dist/node_modules");

      ElectronBuilder.build({
        config: {
          directories: {
            // output 和 app 是一套的，process.cwd() 是根目录
            output: path.resolve(process.cwd(), "release"),
            app: path.resolve(process.cwd(), "dist"),
          },
          files: ["**/*"],
          asar: true, // 打印成一个压缩包
          appId: "com.example.app", // 上线应该是真实的id，这里是随意写的
          productName: "vite-electron",
          // 安装时配置
          nsis: {
            oneClick: false, //取消一键安装
            allowToChangeInstallationDirectory: true, // 允许用户选择安装目录
          },
        },
      });
    },
  };
};
