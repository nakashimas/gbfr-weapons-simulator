## CONTRIBUTING

はじめに、forkしてからローカルリポジトリを作ります

```sh
git clone https://github.com/<your-username>/gbfr-weapons-simulator.git
```

移動して、変更を加えます

```sh
cd gbfr-weapons-simulator
```

ブランチを作って変更をコミットします  
ブランチの種類によって前半の名前を変えます  
ISSUE番号を付けると後で見やすくなります

| type | name |
| :--- | :--- |
| Bug fix | bugfix-xxxx |
| feature update | feature-xxxx |

```sh
git switch -c <branch-type>-<branch-name>
git commit -a -m "awesome update for #1"
```

ブランチを基にPull Requestを作ります

