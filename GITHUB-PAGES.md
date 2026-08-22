# 发布到 GitHub Pages

## 1. 创建仓库

在 GitHub 创建名为 `你的用户名.github.io` 的公开仓库。

## 2. 修改站点地址

站点地址已经配置为：

```yaml
url: https://ycx01-1.github.io
```

## 3. 推送代码

在 `D:/blog` 中运行：

```bash
git init
git add .
git commit -m "Build personal tech blog"
git branch -M main
git remote add origin https://github.com/ycx01-1/ycx01-1.github.io.git
git push -u origin main
```

## 4. 开启 Pages

进入仓库的 `Settings → Pages`，将发布来源设为 `GitHub Actions`。

之后每次推送到 `main`，`.github/workflows/deploy.yml` 都会自动构建并发布博客。
