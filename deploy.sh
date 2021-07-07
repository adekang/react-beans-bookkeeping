 #!/usr/bin/env sh

rm -rf build &&
yarn build &&
cd build &&
git init &&
git add . &&
git commit -m "deploy" &&
git branch -M master &&
git remote add origin git@github.com:adekang/react-beans-bookkeeping-web.git&&
git push -f -u origin master &&
cd -