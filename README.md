
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
ジーンの強化に必要な残り素材数がわかります。  


## Development

ローカル環境でHTMLを眺めながら開発します。

```sh
cd docs
python -m http.server 8000
```

今のところ武器やスキルの情報は連想配列で持っています。

```sh
./docs/
  ├── index.html
  ├── script.js 状態や計算、メインの処理を記述
  ├── status.js 各スキルで変化する値と武器の情報を記述
  └── message.js メッセージを記述
```


## License

This project is licensed under the terms of the [MIT](./LICENSE).

このプロジェクトは [MIT](./LICENSE) ライセンスに基づいて管理されています。


## Author

_gbfr-weapons-simulator_ authors.


## Refs

- https://granbluefantasyrelink.wiki.fextralife.com/Sigils
- https://relink.granbluefantasy.jp/en/manual/detail?p=ps5&s=battles
- https://qiita.com/Nag729/items/f9f21e9731bdcf6f9ea6