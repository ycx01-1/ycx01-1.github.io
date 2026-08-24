# FDM Actual Download Speed Image Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add the supplied FDM screenshot to the existing tutorial as a real-world download-speed example and publish it to GitHub Pages.

**Architecture:** Store the screenshot with the existing Hexo image assets, reference it from a new subsection immediately after the current interface image, then build and deploy through the repository's existing GitHub Actions workflow. The copy records the observed speed while explicitly avoiding a universal performance claim.

**Tech Stack:** Hexo, Markdown, GitHub Pages, GitHub Actions, pnpm

---

### Task 1: Add the screenshot and article subsection

**Files:**
- Create: `source/images/fdm-actual-speed.png`
- Modify: `source/_posts/fdm-download-speed.md`

- [ ] **Step 1: Copy the supplied screenshot into the image directory**

Copy `D:\笔记\OneDrive\Pictures\Screenshots\屏幕截图 2026-08-24 220318.png` to `source/images/fdm-actual-speed.png` without changing its pixels.

- [ ] **Step 2: Add the real-speed subsection**

Insert this block immediately after `![FDM 主界面展示](/images/fdm-interface.png)`:

```markdown
### 实测下载速度

下面是一次实际下载记录：使用 FDM 下载 629 MB 的 Docker Desktop 安装包时，任务进度为 49%，实时速度达到 **9.13 MB/s**，预计剩余 1 分 23 秒。

![FDM 实际下载速度：9.13 MB/s](/images/fdm-actual-speed.png)

这只是一次实际测试结果，具体速度仍取决于本地网络、下载服务器和测试时段。
```

- [ ] **Step 3: Check the Markdown diff**

Run: `git diff --check`

Expected: exit code 0 with no whitespace errors.

- [ ] **Step 4: Commit the content change**

```bash
git add source/images/fdm-actual-speed.png source/_posts/fdm-download-speed.md
git commit -m "content: add FDM actual download speed example"
```

### Task 2: Build, publish, and verify

**Files:**
- Verify: generated Hexo site
- Deploy: existing GitHub Pages workflow

- [ ] **Step 1: Install dependencies**

Run: `pnpm install --frozen-lockfile`

Expected: exit code 0.

- [ ] **Step 2: Build the site**

Run: `pnpm run build`

Expected: Hexo generation exits with code 0 and produces the FDM article page plus `/images/fdm-actual-speed.png`.

- [ ] **Step 3: Push commits**

Run: `git push origin main`

Expected: the remote `main` branch accepts the design, plan, and content commits.

- [ ] **Step 4: Wait for deployment**

Run in PowerShell:

```powershell
$runId = gh run list --repo ycx01-1/ycx01-1.github.io --workflow "Deploy Hexo to GitHub Pages" --limit 1 --json databaseId --jq '.[0].databaseId'
gh run watch $runId --repo ycx01-1/ycx01-1.github.io --exit-status
```

Expected: build and deploy jobs complete successfully.

- [ ] **Step 5: Verify the live page and image**

Check:

```text
https://ycx01-1.github.io/2026/08/23/fdm-download-speed/
https://ycx01-1.github.io/images/fdm-actual-speed.png
```

Expected: both URLs return HTTP 200, and the article HTML contains `9.13 MB/s` and `/images/fdm-actual-speed.png`.
