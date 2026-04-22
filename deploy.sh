#!/bin/bash
set -e

echo "Building..."
npm run docs:build

echo "Deploying to gh-pages..."
cd docs/.vitepress/dist

git init
git remote add origin git@github.com:zjshao22/zjshao22.github.io.git
git checkout -b gh-pages
git add .
git commit -m "deploy"
git push -u origin gh-pages --force
