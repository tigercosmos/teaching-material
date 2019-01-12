# Git

set configuration

```sh
git config --global user.name "tigercosmos"
git config --global user.email "b04209032@ntu.edu.tw"
```

Create a repo on Github, and clone to your computer

```sh
git clone https://github.com/tigercosmos/teaching-material
```

After coding, you want to commit on git

```sh
cd (your project name)
git add -A
git commit -m "describe what you do"
```

Push the code to Github

```sh
git push
```

## Fork

```sh
git clone <your-fork-repo>
git remote add upstream https://github.com/tigercosmos/teaching-material
```

## Other

sync the tutorial

```sh
git fetch upstream
git pull upstream/master
```
