const SKILL_STATUS = {
  "-": {
    // 指定なし
    "minLevel": 0,
    "maxLevel": 0,
    "levels": []
  },
  "stunPower": {
    // スタン
    "minLevel": 1,
    "maxLevel": 45,
    "levels": [
      {"stunPower": 5}, // 1
      {"stunPower": 10}, // 2
      {"stunPower": 15}, // 3
      {"stunPower": 20}, // 4
      {"stunPower": 23}, // 5
      {"stunPower": 26}, // 6
      {"stunPower": 30}, // 7
      {"stunPower": 33}, // 8
      {"stunPower": 35}, // 9
      {"stunPower": 38}, // 10
      {"stunPower": 40}, // 11
      {"stunPower": 43}, // 12
      {"stunPower": 45}, // 13
      {"stunPower": 48}, // 14
      {"stunPower": 50}, // 15
      {"stunPower": 51}, // 16
      {"stunPower": 52}, // 17
      {"stunPower": 53}, // 18
      {"stunPower": 54}, // 19
      {"stunPower": 55}, // 20
      {"stunPower": 56}, // 21
      {"stunPower": 57}, // 22
      {"stunPower": 58}, // 23
      {"stunPower": 59}, // 24
      {"stunPower": 60}, // 25
      {"stunPower": 61}, // 26
      {"stunPower": 62}, // 27
      {"stunPower": 63}, // 28
      {"stunPower": 64}, // 29
      {"stunPower": 65}, // 30
      {"stunPower": 67}, // 31
      {"stunPower": 69}, // 32
      {"stunPower": 71}, // 33
      {"stunPower": 73}, // 34
      {"stunPower": 75}, // 35
      {"stunPower": 77}, // 36
      {"stunPower": 79}, // 37
      {"stunPower": 81}, // 38
      {"stunPower": 83}, // 39
      {"stunPower": 75}, // 40
      {"stunPower": 88}, // 41
      {"stunPower": 91}, // 42
      {"stunPower": 94}, // 43
      {"stunPower": 97}, // 44
      {"stunPower": 100} // 45
    ]
  },
  "criticalHitRate": {
    // クリティカル確率 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": [
      {"criticalHitRate": 5}, // 1
      {"criticalHitRate": 6}, // 2
      {"criticalHitRate": 7}, // 3
      {"criticalHitRate": 8}, // 4
      {"criticalHitRate": 9}, // 5
      {"criticalHitRate": 10}, // 6
      {"criticalHitRate": 11}, // 7
      {"criticalHitRate": 12}, // 8
      {"criticalHitRate": 13}, // 9
      {"criticalHitRate": 14}, // 10
      {"criticalHitRate": 15}, // 11
      {"criticalHitRate": 16}, // 12
      {"criticalHitRate": 17}, // 13
      {"criticalHitRate": 18}, // 14
      {"criticalHitRate": 19}, // 15
      {"criticalHitRate": 20}, // 16
      {"criticalHitRate": 21}, // 17
      {"criticalHitRate": 22}, // 18
      {"criticalHitRate": 23}, // 19
      {"criticalHitRate": 24}, // 20
      {"criticalHitRate": 25}, // 21
      {"criticalHitRate": 26}, // 22
      {"criticalHitRate": 27}, // 23
      {"criticalHitRate": 28}, // 24
      {"criticalHitRate": 29}, // 25
      {"criticalHitRate": 30}, // 26
      {"criticalHitRate": 31}, // 27
      {"criticalHitRate": 31}, // 28
      {"criticalHitRate": 33}, // 29
      {"criticalHitRate": 34}, // 30
      {"criticalHitRate": 35}, // 31
      {"criticalHitRate": 36}, // 32
      {"criticalHitRate": 37}, // 33
      {"criticalHitRate": 38}, // 34
      {"criticalHitRate": 39}, // 35
      {"criticalHitRate": 40}, // 36
      {"criticalHitRate": 41}, // 37
      {"criticalHitRate": 42}, // 38
      {"criticalHitRate": 43}, // 39
      {"criticalHitRate": 44}, // 40
      {"criticalHitRate": 45}, // 41
      {"criticalHitRate": 46}, // 42
      {"criticalHitRate": 47}, // 43
      {"criticalHitRate": 48}, // 44
      {"criticalHitRate": 50} // 45
    ]
  },
  "attackPower": {
    // 攻撃力 
    "minLevel": 1,
    "maxLevel": 50,
    "levels": [
      {"attackPower": 4}, // 1
      {"attackPower": 6}, // 2
      {"attackPower": 8}, // 3
      {"attackPower": 10}, // 4
      {"attackPower": 12}, // 5
      {"attackPower": 14}, // 6
      {"attackPower": 16}, // 7
      {"attackPower": 18}, // 8
      {"attackPower": 22}, // 9
      {"attackPower": 24}, // 10
      {"attackPower": 26}, // 11
      {"attackPower": 28}, // 12
      {"attackPower": 30}, // 13
      {"attackPower": 32}, // 14
      {"attackPower": 40}, // 15
      {"attackPower": 44}, // 16
      {"attackPower": 48}, // 17
      {"attackPower": 52}, // 18
      {"attackPower": 56}, // 19
      {"attackPower": 80}, // 20
      {"attackPower": 96}, // 21
      {"attackPower": 112}, // 22
      {"attackPower": 128}, // 23
      {"attackPower": 144}, // 24
      {"attackPower": 160}, // 25
      {"attackPower": 200}, // 26
      {"attackPower": 230}, // 27
      {"attackPower": 260}, // 28
      {"attackPower": 290}, // 29
      {"attackPower": 350}, // 30
      {"attackPower": 390}, // 31
      {"attackPower": 430}, // 32
      {"attackPower": 470}, // 33
      {"attackPower": 550}, // 34
      {"attackPower": 600}, // 35
      {"attackPower": 650}, // 36
      {"attackPower": 700}, // 37
      {"attackPower": 750}, // 38
      {"attackPower": 800}, // 39
      {"attackPower": 900}, // 40
      {"attackPower": 1000}, // 41
      {"attackPower": 1100}, // 42
      {"attackPower": 1200}, // 43
      {"attackPower": 1300}, // 44
      {"attackPower": 1400}, // 45
      {"attackPower": 1500}, // 46
      {"attackPower": 1600}, // 47
      {"attackPower": 1700}, // 48
      {"attackPower": 1800}, // 49
      {"attackPower": 2000}, // 50
    ]
  },
  "health": {
    // 体力 
    "minLevel": 1,
    "maxLevel": 50,
    "levels": [
      {"health": 200}, // 1
      {"health": 300}, // 2
      {"health": 400}, // 3
      {"health": 500}, // 4
      {"health": 600}, // 5
      {"health": 800}, // 6
      {"health": 1000}, // 7
      {"health": 1200}, // 8
      {"health": 1400}, // 9
      {"health": 1600}, // 10
      {"health": 1800}, // 11
      {"health": 2000}, // 12
      {"health": 2200}, // 13
      {"health": 2400}, // 14
      {"health": 2600}, // 15
      {"health": 2800}, // 16
      {"health": 3000}, // 17
      {"health": 3200}, // 18
      {"health": 3400}, // 19
      {"health": 3600}, // 20
      {"health": 3800}, // 21
      {"health": 4000}, // 22
      {"health": 4200}, // 23
      {"health": 4400}, // 24
      {"health": 4600}, // 25
      {"health": 4800}, // 26
      {"health": 5000}, // 27
      {"health": 5200}, // 28
      {"health": 5400}, // 29
      {"health": 5600}, // 30
      {"health": 5800}, // 31
      {"health": 6000}, // 32
      {"health": 6200}, // 33
      {"health": 6400}, // 34
      {"health": 6600}, // 35
      {"health": 6800}, // 36
      {"health": 7000}, // 37
      {"health": 7200}, // 38
      {"health": 7400}, // 39
      {"health": 7600}, // 40
      {"health": 7800}, // 41
      {"health": 8000}, // 42
      {"health": 8200}, // 43
      {"health": 8400}, // 44
      {"health": 8600}, // 45
      {"health": 8800}, // 46
      {"health": 9100}, // 47
      {"health": 9400}, // 48
      {"health": 9700}, // 49
      {"health": 10000}, // 50
    ]
  },
  // 攻撃
  "exploiter": {
    // 弱点攻撃 
  },
  "comboBooster": {
    // コンボボーナス 
  },
  "tyranny": {
    // 暴君 
  },
  "enmity": {
    // 背水 
  },
  "stamina": {
    // 渾身 
  },
  "chargedAttack": {
    // チャージアタック 
  },
  "dodgePayback": {
    // 回避リベンジ 
  },
  "criticalDamage": {
    // クリティカルダメージ 
  },
  "overdriveAssassin": {
    // オーバードライブ特攻 
  },
  "injuryToInsult": {
    // 弱体状態特攻 
  },
  "luckyCharge": {
    // 溜め会心 
  },
  "throw": {
    // 投擲 
  },
  "linkedTogether": {
    // 連携攻撃 
  },
  "comboFinisher": {
    // コンボフィニッシュ 
  },
  "quickCharge": {
    // クイックチャージ 
  },
  "guardPayback": {
    // ガードリベンジ 
  },
  "lifeOnTheLine": {
    // 捨て身 
  },
  "damageCap": {
    // ダメージ上限 
  },
  "concentratedFire": {
    // 集中砲火 
  },
  "skilledAssault": {
    // アビリティダメージ 
  },
  "glassCannon": {
    // 紙一重 
  },
  "lessIsMore": {
    // 裸一貫 
  },
  "breakAssassin": {
    // ブレイク特攻 
  },
  "headStart": {
    // 先制 
  },
  "supplementaryDamage": {
    // 追撃 
  },
  "powerHungry": {
    // 修羅 
  },
  "berserker": {
    // 窮鼠 
  },
  "rollOfTheDie": {
    // 一天六地 
  },
  // 耐久
  "sandtombResistance": {
    // 砂だるま耐性 
  },
  "dizzyResistance": {
    // 気絶耐性 
  },
  "improvedGuard": {
    // ガード性能 
  },
  "garrison": {
    // 堅守 
  },
  "steelNerves": {
    // ふんばり 
  },
  "slowResistance": {
    // スロウ耐性 
  },
  "burnResistance": {
    // 灼熱耐性 
  },
  "preciseResilience": {
    // 抗戦 
  },
  "blightResistance": {
    // 災禍耐性 
  },
  "aegis": {
    // 守護 
  },
  "paralysisResistance": {
    // 麻痺耐性 
  },
  "nimbleDefense": {
    // 精神一到 
  },
  "glaciateResistance": {
    // 氷結耐性 
  },
  "firmStance": {
    // 不動 
  },
  "poisonResistance": {
    // 毒耐性 
  },
  "heldUnderResistance": {
    // 水牢耐性 
  },
  "attackDownResistance": {
    // 攻撃DOWN耐性 
  },
  "deffenceDownResistance": {
    // 防御DOWN耐性 
  },
  "sbaSealedResistance": {
    // 奥義封印耐性 
  },
  "improvedDodge": {
    // 回避性能 
  },
  "stronghold": {
    // 剛健 
  },
  "flightOverFight": {
    // フラジャイルドッジ 
  },
  "skillSealedResistance": {
    // アビリティ封印耐性 
  },
  "darkflameResistance": {
    // レジストオルタ 
  },
  "untouchable": {
    // 回避距離 
  },
  // 支援
  "uplift": {
    // 高揚 
  },
  "quickCooldown": {
    // クイックアビリティ 
  },
  "nimbleOnslaught": {
    // 明鏡止水 
  },
  "preciseWrath": {
    // 怒髪天 
  },
  "drain": {
    // HP吸収 
  },
  "regen": {
    // リジェネレーション 
  },
  "improvedHealing": {
    // 回復性能 
  },
  "cascade": {
    // 怒涛 
  },
  // 特殊
  "guts": {
    // ガッツ 
  },
  "rupieTycoon": {
    // 取得ルピ 
  },
  "lowProfile": {
    // ステルス 
  },
  "fastLearner": {
    // 取得経験値 
  },
  "potionHoarder": {
    // ポーション所持数 
  },
  "provoke": {
    // 挑発 
  },
  "steadyFocus": {
    // チャージ強化 
  },
  "autorevive": {
    // 自動復活 
  },
  "pathToMastery": {
    // 取得MSP 
  },
  "potentGreens": {
    // 万能薬 
  },
  "stoutHeart": {
    // 怯み無効 
  },
  "crabbyResonance": {
    // カニの共鳴 
  },
}