---
title: Codex 安装与使用教程：API Key 与账号登录
date: 2026-08-23 15:00:00
categories:
  - 工具教程
tags:
  - Codex
  - ChatGPT
  - DeepSeek
  - Windows
---

Windows 用户可以直接从微软商店安装 ChatGPT，然后通过 API Key 或 ChatGPT 账号使用 Codex。

## 一、安装

1. 打开 Windows 的微软商店。
2. 搜索 `ChatGPT`。
3. 安装 OpenAI 官方版本。
4. 安装完成后打开应用，选择登录方式。

## 二、使用 API Key

API Key 登录更方便，不需要注册 ChatGPT 账号。

以 DeepSeek 为例：

1. 注册 DeepSeek 开放平台。
2. 充值并创建 API Key。
3. 复制 API Key。
4. 打开 ChatGPT 登录页面。
5. 选择“使用 API 登录”。
6. 粘贴复制好的 API Key。
7. 确认后进入 Codex。

不要把 API Key 发给别人或上传到 GitHub。

## 三、使用 ChatGPT 账号登录

1. 确保当前网络环境可以正常访问 OpenAI 官方服务，再打开 ChatGPT。
2. 选择账号登录；没有账号就按页面提示注册。建议提前注册一个 Google 邮箱，QQ 邮箱也可以。
3. 按页面提示完成邮箱、手机号和身份验证。

进入主页面后，默认是免费版，有一定额度可先体验；不够用再订阅。

建议添加通行密钥，并自行完成其他安全设置。这样后续可以通过已绑定的设备快捷登录，减少反复输入密码或再次验证的麻烦，也能降低账号无法找回的风险。

## 四、开始使用

登录完成后：

1. 进入 Codex。
2. 选择项目文件夹。
3. 输入任务。

例如：

```text
请阅读这个项目，告诉我它的主要功能和启动方法。
```

或者：

```text
帮我修复当前项目的报错，只修改必要文件，完成后运行测试。
```

## 五、备份项目

修改代码前，建议使用 Git 备份：

```bash
git add .
git commit -m "使用 Codex 前备份"
```

## 六、步骤总结

### API Key 方式

```text
微软商店安装 ChatGPT
→ 获取 DeepSeek API Key
→ 选择 API 登录
→ 粘贴 API Key
→ 进入 Codex
→ 打开项目
```

### 账号方式

```text
准备可正常访问官方服务的网络环境
→ 打开 ChatGPT
→ 注册或登录账号
→ 完成身份验证
→ 先体验免费额度
→ 根据需要订阅
→ 设置通行密钥
→ 进入 Codex
```

图方便就使用 API Key，不怕麻烦就使用账号登录。
