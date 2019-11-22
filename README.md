# node-ts-test
learn typescript for node.js
## 工程创建说明
1. 创建工程目录
  - `mkdir node-ts-test`
  - `cd node-ts-test`
  - `yarn init -y`
2. 安装必要的包
  - `yarn add typescript ts-node ts-node-dev @type/express @type/node nodemon pm2 -D`
  - `yarn add express`
3. 生成tsconfig.json
  - `npx tsconfig.json` 选择node
4. 初始化本地仓库
  - `git init`
  - `touch .gitignore`
    ``` 
    node_modules
    dist
    ```
  - `mkdir src`
  - `cd src`
  - `touch index.ts`
  - `cd ..`
  - `touch run.json`
5. 配置npm脚本
    ```
    "scripts": {
        "build": "tsc",
        "dev": "ts-node-dev --respawn src/index.ts",
        "dev2": "nodemon --exec ts-node src/index.ts",
        "pm2logs": "pm2 install pm2-logrotate",
        "start": "pm2 start run.json"
      }
    ```
6. 配置pm2
    ```
      {
        "name": "node-ts-test",
        "script": "./dist/index.js",
        "cwd": "./",
        "instances": "max",
        "exec_mode": "cluster",
        "watch": true,
        "ignore_watch": [
          "node_modules",
          "src",
          "dist/logs"
        ],
        "watch_options": {
          "followSymlinks": false
        },
        "error_file": "./dist/logs/pm2-err.log",
        "out_file": "./dist/logs/pm2-out.log",
        "log_date_format": "YYYY-MM-DD HH:mm Z",
        "env": {
          "NODE_ENV": "production"
        }
      }
    ```
7. 配置远程仓库
  - 先在GitHub上创建node-ts-test仓库
  - `git remote add origin git@github.com:bellychen01/node-ts-test.git`
  - ```
      git add .
      git commit -m '首次提交'
      git push -u origin master
    ```
8. 创建开发分支，开始code
  - `git checkout -b dev`
  - code code code ...
  - `git push`
9. 运行
  - `yarn dev`
