// electron 主进程文件
import { app, BrowserWindow } from "electron";

app.whenReady().then(() => {
  const win = new BrowserWindow({
    height: 800,
    width: 1200,
    webPreferences: {
      nodeIntegration: true, // 可以在渲染进程中使用node的api,为了安全默认是false
      contextIsolation: false, // 关闭渲染京城的沙箱
      webSecurity: false, // 关闭跨域检测
    },
  });

  // win.webContents.openDevTools(); // 开发环境打开控制台

  if (process.argv[2]) {
    win.loadURL(process.argv[2]); // 开发环境
  } else {
    win.loadFile("index.html"); // 生产环境
  }
});
