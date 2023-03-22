#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
pnpm docs:build &&

# 进入生成的文件夹
cd docs/.vitepress/dist &&

git init &&
git add -A &&
git commit -m 'deploy' &&

git push -f git@github.com:uphg/tulip.git master:gh-pages
# git push -f git@gitee.com:uphg/tulip.git master:gh-pages

cd -
