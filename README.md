
<p>
    <div align="center">
    <h1>GBFR Weapons Simulator</h1>
    </div>
</p>

<h4 align="center">Weapons skills set simulator for Granblue Fantasy: Relink</h4>

<p align="center">
  <a>
    <img alt="AppVeyor badge" src="https://img.shields.io/badge/build-passing-brightgreen">
  </a>
  <a href="./LICENSE">
    <img src="http://img.shields.io/badge/license-MIT-blue.svg?style=flat">
  </a>
</p>

<h2> Contents </h2>

- [Description](#description)
- [Development](#development)
- [License](#license)
- [Author](#author)
- [Refs](#refs)

## Description

https://nakashimas.github.io/gbfr-weapons-simulator/

現在作成中です。  
武器スキル・ジーンの組み合わせとスキル効果量をWebで確認できます。  
コンボを登録して予測DPTを計算できます。  
ジーンの強化に必要な残り素材数がわかります(それよりもシード・オン・シードを周回しよう)。  


## Development

ローカル環境でHTMLを眺めながら開発します。  
詳しい更新方法は[資料](./.github/CONTRIBUTING.md)を参考にしてください。

```sh
cd docs
python -m http.server 8000
```

今のところ武器やスキルの情報は連想配列で持っています。

```sh
./docs/
  ├── index.html
  ├── script.js 状態や計算、メインの処理を記述
  ├── skill.js 各スキルで変化する値の情報を記述
  ├── weapons.js 各武器の情報を記述
  ├── character.js 各キャラクターの情報を記述
  └── message.js 表示メッセージを記述
```


## License

This project is licensed under the terms of the [MIT](./LICENSE).

このプロジェクトは [MIT](./LICENSE) ライセンスに基づいて管理されています。


## Author

_gbfr-weapons-simulator_ authors.


## Refs

Any sigils and English Translate
- https://granbluefantasyrelink.wiki.fextralife.com/Sigils
- https://relink.granbluefantasy.jp/en/manual/detail?p=ps5&s=battles

Roll of the Die sigil
- https://steamcommunity.com/app/881020/discussions/0/4208119923884744284/

Combo Booster sigil
- https://note.com/blead_/n/nabf4fdee4c11#a4d17bcc-9159-41bc-9570-802ecbd8b936

Damage Calcs
- https://www.reddit.com/r/GranblueFantasyRelink/comments/1awnyap/relink_damage_calculator_v20/
