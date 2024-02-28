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
      {"stunPower": "5|0%"}, // 1
      {"stunPower": "10|0%"}, // 2
      {"stunPower": "15|0%"}, // 3
      {"stunPower": "20|0%"}, // 4
      {"stunPower": "23|0%"}, // 5
      {"stunPower": "26|0%"}, // 6
      {"stunPower": "30|0%"}, // 7
      {"stunPower": "33|0%"}, // 8
      {"stunPower": "35|0%"}, // 9
      {"stunPower": "38|0%"}, // 10
      {"stunPower": "40|0%"}, // 11
      {"stunPower": "43|0%"}, // 12
      {"stunPower": "45|0%"}, // 13
      {"stunPower": "48|0%"}, // 14
      {"stunPower": "50|0%"}, // 15
      {"stunPower": "51|0%"}, // 16
      {"stunPower": "52|0%"}, // 17
      {"stunPower": "53|0%"}, // 18
      {"stunPower": "54|0%"}, // 19
      {"stunPower": "55|0%"}, // 20
      {"stunPower": "56|0%"}, // 21
      {"stunPower": "57|0%"}, // 22
      {"stunPower": "58|0%"}, // 23
      {"stunPower": "59|0%"}, // 24
      {"stunPower": "60|0%"}, // 25
      {"stunPower": "61|0%"}, // 26
      {"stunPower": "62|0%"}, // 27
      {"stunPower": "63|0%"}, // 28
      {"stunPower": "64|0%"}, // 29
      {"stunPower": "65|0%"}, // 30
      {"stunPower": "67|0%"}, // 31
      {"stunPower": "69|0%"}, // 32
      {"stunPower": "71|0%"}, // 33
      {"stunPower": "73|0%"}, // 34
      {"stunPower": "75|0%"}, // 35
      {"stunPower": "77|0%"}, // 36
      {"stunPower": "79|0%"}, // 37
      {"stunPower": "81|0%"}, // 38
      {"stunPower": "83|0%"}, // 39
      {"stunPower": "75|0%"}, // 40
      {"stunPower": "88|0%"}, // 41
      {"stunPower": "91|0%"}, // 42
      {"stunPower": "94|0%"}, // 43
      {"stunPower": "97|0%"}, // 44
      {"stunPower": "100|0%"} // 45
    ]
  },
  "criticalHitRate": {
    // クリティカル確率 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": [
      {"criticalHitRate": "5|0%"}, // 1
      {"criticalHitRate": "6|0%"}, // 2
      {"criticalHitRate": "7|0%"}, // 3
      {"criticalHitRate": "8|0%"}, // 4
      {"criticalHitRate": "9|0%"}, // 5
      {"criticalHitRate": "10|0%"}, // 6
      {"criticalHitRate": "11|0%"}, // 7
      {"criticalHitRate": "12|0%"}, // 8
      {"criticalHitRate": "13|0%"}, // 9
      {"criticalHitRate": "14|0%"}, // 10
      {"criticalHitRate": "15|0%"}, // 11
      {"criticalHitRate": "16|0%"}, // 12
      {"criticalHitRate": "17|0%"}, // 13
      {"criticalHitRate": "18|0%"}, // 14
      {"criticalHitRate": "19|0%"}, // 15
      {"criticalHitRate": "20|0%"}, // 16
      {"criticalHitRate": "21|0%"}, // 17
      {"criticalHitRate": "22|0%"}, // 18
      {"criticalHitRate": "23|0%"}, // 19
      {"criticalHitRate": "24|0%"}, // 20
      {"criticalHitRate": "25|0%"}, // 21
      {"criticalHitRate": "26|0%"}, // 22
      {"criticalHitRate": "27|0%"}, // 23
      {"criticalHitRate": "28|0%"}, // 24
      {"criticalHitRate": "29|0%"}, // 25
      {"criticalHitRate": "30|0%"}, // 26
      {"criticalHitRate": "31|0%"}, // 27
      {"criticalHitRate": "31|0%"}, // 28
      {"criticalHitRate": "33|0%"}, // 29
      {"criticalHitRate": "34|0%"}, // 30
      {"criticalHitRate": "35|0%"}, // 31
      {"criticalHitRate": "36|0%"}, // 32
      {"criticalHitRate": "37|0%"}, // 33
      {"criticalHitRate": "38|0%"}, // 34
      {"criticalHitRate": "39|0%"}, // 35
      {"criticalHitRate": "40|0%"}, // 36
      {"criticalHitRate": "41|0%"}, // 37
      {"criticalHitRate": "42|0%"}, // 38
      {"criticalHitRate": "43|0%"}, // 39
      {"criticalHitRate": "44|0%"}, // 40
      {"criticalHitRate": "45|0%"}, // 41
      {"criticalHitRate": "46|0%"}, // 42
      {"criticalHitRate": "47|0%"}, // 43
      {"criticalHitRate": "48|0%"}, // 44
      {"criticalHitRate": "50|0%"} // 45
    ]
  },
  "attackPower": {
    // 攻撃力 
    "minLevel": 1,
    "maxLevel": 50,
    "levels": [
      {"attackPower": "4|0%"}, // 1
      {"attackPower": "6|0%"}, // 2
      {"attackPower": "8|0%"}, // 3
      {"attackPower": "10|0%"}, // 4
      {"attackPower": "12|0%"}, // 5
      {"attackPower": "14|0%"}, // 6
      {"attackPower": "16|0%"}, // 7
      {"attackPower": "18|0%"}, // 8
      {"attackPower": "22|0%"}, // 9
      {"attackPower": "24|0%"}, // 10
      {"attackPower": "26|0%"}, // 11
      {"attackPower": "28|0%"}, // 12
      {"attackPower": "30|0%"}, // 13
      {"attackPower": "32|0%"}, // 14
      {"attackPower": "40|0%"}, // 15
      {"attackPower": "44|0%"}, // 16
      {"attackPower": "48|0%"}, // 17
      {"attackPower": "52|0%"}, // 18
      {"attackPower": "56|0%"}, // 19
      {"attackPower": "80|0%"}, // 20
      {"attackPower": "96|0%"}, // 21
      {"attackPower": "112|0%"}, // 22
      {"attackPower": "128|0%"}, // 23
      {"attackPower": "144|0%"}, // 24
      {"attackPower": "160|0%"}, // 25
      {"attackPower": "200|0%"}, // 26
      {"attackPower": "230|0%"}, // 27
      {"attackPower": "260|0%"}, // 28
      {"attackPower": "290|0%"}, // 29
      {"attackPower": "350|0%"}, // 30
      {"attackPower": "390|0%"}, // 31
      {"attackPower": "430|0%"}, // 32
      {"attackPower": "470|0%"}, // 33
      {"attackPower": "550|0%"}, // 34
      {"attackPower": "600|0%"}, // 35
      {"attackPower": "650|0%"}, // 36
      {"attackPower": "700|0%"}, // 37
      {"attackPower": "750|0%"}, // 38
      {"attackPower": "800|0%"}, // 39
      {"attackPower": "900|0%"}, // 40
      {"attackPower": "1000|0%"}, // 41
      {"attackPower": "1100|0%"}, // 42
      {"attackPower": "1200|0%"}, // 43
      {"attackPower": "1300|0%"}, // 44
      {"attackPower": "1400|0%"}, // 45
      {"attackPower": "1500|0%"}, // 46
      {"attackPower": "1600|0%"}, // 47
      {"attackPower": "1700|0%"}, // 48
      {"attackPower": "1800|0%"}, // 49
      {"attackPower": "2000|0%"}, // 50
    ]
  },
  "health": {
    // 体力 
    "minLevel": 1,
    "maxLevel": 50,
    "levels": [
      {"health": "200|0%"}, // 1
      {"health": "300|0%"}, // 2
      {"health": "400|0%"}, // 3
      {"health": "500|0%"}, // 4
      {"health": "600|0%"}, // 5
      {"health": "800|0%"}, // 6
      {"health": "1000|0%"}, // 7
      {"health": "1200|0%"}, // 8
      {"health": "1400|0%"}, // 9
      {"health": "1600|0%"}, // 10
      {"health": "1800|0%"}, // 11
      {"health": "2000|0%"}, // 12
      {"health": "2200|0%"}, // 13
      {"health": "2400|0%"}, // 14
      {"health": "2600|0%"}, // 15
      {"health": "2800|0%"}, // 16
      {"health": "3000|0%"}, // 17
      {"health": "3200|0%"}, // 18
      {"health": "3400|0%"}, // 19
      {"health": "3600|0%"}, // 20
      {"health": "3800|0%"}, // 21
      {"health": "4000|0%"}, // 22
      {"health": "4200|0%"}, // 23
      {"health": "4400|0%"}, // 24
      {"health": "4600|0%"}, // 25
      {"health": "4800|0%"}, // 26
      {"health": "5000|0%"}, // 27
      {"health": "5200|0%"}, // 28
      {"health": "5400|0%"}, // 29
      {"health": "5600|0%"}, // 30
      {"health": "5800|0%"}, // 31
      {"health": "6000|0%"}, // 32
      {"health": "6200|0%"}, // 33
      {"health": "6400|0%"}, // 34
      {"health": "6600|0%"}, // 35
      {"health": "6800|0%"}, // 36
      {"health": "7000|0%"}, // 37
      {"health": "7200|0%"}, // 38
      {"health": "7400|0%"}, // 39
      {"health": "7600|0%"}, // 40
      {"health": "7800|0%"}, // 41
      {"health": "8000|0%"}, // 42
      {"health": "8200|0%"}, // 43
      {"health": "8400|0%"}, // 44
      {"health": "8600|0%"}, // 45
      {"health": "8800|0%"}, // 46
      {"health": "9100|0%"}, // 47
      {"health": "9400|0%"}, // 48
      {"health": "9700|0%"}, // 49
      {"health": "10000|0%"}, // 50
    ]
  },
  // 攻撃
  "exploiter": {
    // 弱点攻撃 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": [
      {"damageWeakness": "0|4%", "damageBehind": "0|4%"}, 
      {"damageWeakness": "0|7%", "damageBehind": "0|7%"}, 
      {"damageWeakness": "0|10%", "damageBehind": "0|10%"}, 
      {"damageWeakness": "0|14%", "damageBehind": "0|14%"}, 
      {"damageWeakness": "0|16%", "damageBehind": "0|16%"}, 
      {"damageWeakness": "0|18%", "damageBehind": "0|18%"}, 
      {"damageWeakness": "0|20%", "damageBehind": "0|20%"}, 
      {"damageWeakness": "0|22%", "damageBehind": "0|22%"}, 
      {"damageWeakness": "0|24%", "damageBehind": "0|24%"}, 
      {"damageWeakness": "0|26%", "damageBehind": "0|26%"}, 
      {"damageWeakness": "0|28%", "damageBehind": "0|28%"}, 
      {"damageWeakness": "0|30%", "damageBehind": "0|30%"}, 
      {"damageWeakness": "0|32%", "damageBehind": "0|32%"}, 
      {"damageWeakness": "0|34%", "damageBehind": "0|34%"}, 
      {"damageWeakness": "0|36%", "damageBehind": "0|36%"}, 
      {"damageWeakness": "0|37%", "damageBehind": "0|37%"}, 
      {"damageWeakness": "0|38%", "damageBehind": "0|38%"}, 
      {"damageWeakness": "0|39%", "damageBehind": "0|39%"}, 
      {"damageWeakness": "0|40%", "damageBehind": "0|40%"}, 
      {"damageWeakness": "0|41%", "damageBehind": "0|41%"}, 
      {"damageWeakness": "0|42%", "damageBehind": "0|42%"}, 
      {"damageWeakness": "0|43%", "damageBehind": "0|43%"}, 
      {"damageWeakness": "0|44%", "damageBehind": "0|44%"}, 
      {"damageWeakness": "0|45%", "damageBehind": "0|45%"}, 
      {"damageWeakness": "0|46%", "damageBehind": "0|46%"}, 
      {"damageWeakness": "0|47%", "damageBehind": "0|47%"}, 
      {"damageWeakness": "0|48%", "damageBehind": "0|48%"}, 
      {"damageWeakness": "0|49%", "damageBehind": "0|49%"}, 
      {"damageWeakness": "0|50%", "damageBehind": "0|50%"}, 
      {"damageWeakness": "0|51%", "damageBehind": "0|51%"}, 
      {"damageWeakness": "0|52%", "damageBehind": "0|52%"}, 
      {"damageWeakness": "0|53%", "damageBehind": "0|53%"}, 
      {"damageWeakness": "0|54%", "damageBehind": "0|54%"}, 
      {"damageWeakness": "0|55%", "damageBehind": "0|55%"}, 
      {"damageWeakness": "0|56%", "damageBehind": "0|56%"}, 
      {"damageWeakness": "0|57%", "damageBehind": "0|57%"}, 
      {"damageWeakness": "0|58%", "damageBehind": "0|58%"}, 
      {"damageWeakness": "0|59%", "damageBehind": "0|59%"}, 
      {"damageWeakness": "0|60%", "damageBehind": "0|60%"}, 
      {"damageWeakness": "0|61%", "damageBehind": "0|61%"}, 
      {"damageWeakness": "0|63%", "damageBehind": "0|63%"}, 
      {"damageWeakness": "0|65%", "damageBehind": "0|65%"}, 
      {"damageWeakness": "0|67%", "damageBehind": "0|67%"}, 
      {"damageWeakness": "0|69%", "damageBehind": "0|69%"}, 
      {"damageWeakness": "0|70%", "damageBehind": "0|70%"}, 
    ]
  },
  "comboBooster": {
    // コンボボーナス 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": []
  },
  "tyranny": {
    // 暴君 
    "minLevel": 1,
    "maxLevel": 30,
    "levels": [
      {"attackPower": "0|5%", "health": "0|-20%"}, // 1
      {"attackPower": "0|8%", "health": "0|-20%"},  // 2
      {"attackPower": "0|11%", "health": "0|-20%"},  // 3
      {"attackPower": "0|13%", "health": "0|-20%"},  // 4
      {"attackPower": "0|15%", "health": "0|-20%"},  // 5
      {"attackPower": "0|17%", "health": "0|-20%"},  // 6
      {"attackPower": "0|19%", "health": "0|-20%"},  // 7
      {"attackPower": "0|21%", "health": "0|-20%"},  // 8
      {"attackPower": "0|23%", "health": "0|-20%"},  // 9
      {"attackPower": "0|25%", "health": "0|-20%"},  // 10
      {"attackPower": "0|27%", "health": "0|-20%"},  // 11
      {"attackPower": "0|29%", "health": "0|-20%"},  // 12
      {"attackPower": "0|31%", "health": "0|-20%"},  // 13
      {"attackPower": "0|33%", "health": "0|-20%"},  // 14
      {"attackPower": "0|35%", "health": "0|-20%"},  // 15
      {"attackPower": "0|36%", "health": "0|-20%"},  // 16
      {"attackPower": "0|37%", "health": "0|-20%"},  // 17
      {"attackPower": "0|38%", "health": "0|-20%"},  // 18
      {"attackPower": "0|39%", "health": "0|-20%"},  // 19
      {"attackPower": "0|40%", "health": "0|-20%"},  // 20
      {"attackPower": "0|41%", "health": "0|-20%"},  // 21
      {"attackPower": "0|42%", "health": "0|-20%"},  // 22
      {"attackPower": "0|43%", "health": "0|-20%"},  // 23
      {"attackPower": "0|44%", "health": "0|-20%"},  // 24
      {"attackPower": "0|45%", "health": "0|-20%"},  // 25
      {"attackPower": "0|46%", "health": "0|-20%"},  // 26
      {"attackPower": "0|47%", "health": "0|-20%"},  // 27
      {"attackPower": "0|48%", "health": "0|-20%"},  // 28
      {"attackPower": "0|49%", "health": "0|-20%"},  // 29
      {"attackPower": "0|50%", "health": "0|-20%"},  // 30
    ]
  },
  "enmity": {
    // 背水 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": []
  },
  "stamina": {
    // 渾身 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": []
  },
  "chargedAttack": {
    // チャージアタック 
    "minLevel": 1,
    "maxLevel": 30,
    "levels": [
      {"damageCharged": "0|5%"}, // 1
      {"damageCharged": "0|8%"}, // 2
      {"damageCharged": "0|11%"}, // 3
      {"damageCharged": "0|13%"}, // 4
      {"damageCharged": "0|15%"}, // 5
      {"damageCharged": "0|17%"}, // 6
      {"damageCharged": "0|19%"}, // 7
      {"damageCharged": "0|21%"}, // 8
      {"damageCharged": "0|23%"}, // 9
      {"damageCharged": "0|25%"}, // 10
      {"damageCharged": "0|27%"}, // 11
      {"damageCharged": "0|29%"}, // 12
      {"damageCharged": "0|31%"}, // 13
      {"damageCharged": "0|33%"}, // 14
      {"damageCharged": "0|35%"}, // 15
      {"damageCharged": "0|36%"}, // 16
      {"damageCharged": "0|37%"}, // 17
      {"damageCharged": "0|38%"}, // 18
      {"damageCharged": "0|39%"}, // 19
      {"damageCharged": "0|40%"}, // 20
      {"damageCharged": "0|41%"}, // 21
      {"damageCharged": "0|42%"}, // 22
      {"damageCharged": "0|43%"}, // 23
      {"damageCharged": "0|44%"}, // 24
      {"damageCharged": "0|45%"}, // 25
      {"damageCharged": "0|46%"}, // 26
      {"damageCharged": "0|47%"}, // 27
      {"damageCharged": "0|48%"}, // 28
      {"damageCharged": "0|49%"}, // 29
      {"damageCharged": "0|50%"}, // 30
    ]
  },
  "dodgePayback": {
    // 回避リベンジ 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": []
  },
  "criticalDamage": {
    // クリティカルダメージ 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": []
  },
  "overdriveAssassin": {
    // オーバードライブ特攻 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": []
  },
  "injuryToInsult": {
    // 弱体状態特攻 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": []
  },
  "luckyCharge": {
    // 溜め会心 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": []
  },
  "throw": {
    // 投擲 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": []
  },
  "linkedTogether": {
    // 連携攻撃 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": []
  },
  "comboFinisher": {
    // コンボフィニッシュ 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": [] 
  },
  "quickCharge": {
    // クイックチャージ 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": []
  },
  "guardPayback": {
    // ガードリベンジ 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": []
  },
  "lifeOnTheLine": {
    // 捨て身 
    "minLevel": 1,
    "maxLevel": 30,
    "levels": [
      {"attackPower": "0|5%", "healable": false}, // 1
      {"attackPower": "0|8%", "healable": false}, // 2
      {"attackPower": "0|11%", "healable": false}, // 3
      {"attackPower": "0|13%", "healable": false}, // 4
      {"attackPower": "0|15%", "healable": false}, // 5
      {"attackPower": "0|17%", "healable": false}, // 6
      {"attackPower": "0|19%", "healable": false}, // 7
      {"attackPower": "0|21%", "healable": false}, // 8
      {"attackPower": "0|23%", "healable": false}, // 9
      {"attackPower": "0|25%", "healable": false}, // 10
      {"attackPower": "0|27%", "healable": false}, // 11
      {"attackPower": "0|29%", "healable": false}, // 12
      {"attackPower": "0|31%", "healable": false}, // 13
      {"attackPower": "0|33%", "healable": false}, // 14
      {"attackPower": "0|35%", "healable": false}, // 15
      {"attackPower": "0|36%", "healable": false}, // 16
      {"attackPower": "0|37%", "healable": false}, // 17
      {"attackPower": "0|38%", "healable": false}, // 18
      {"attackPower": "0|39%", "healable": false}, // 19
      {"attackPower": "0|40%", "healable": false}, // 20
      {"attackPower": "0|41%", "healable": false}, // 21
      {"attackPower": "0|42%", "healable": false}, // 22
      {"attackPower": "0|43%", "healable": false}, // 23
      {"attackPower": "0|44%", "healable": false}, // 24
      {"attackPower": "0|45%", "healable": false}, // 25
      {"attackPower": "0|46%", "healable": false}, // 26
      {"attackPower": "0|47%", "healable": false}, // 27
      {"attackPower": "0|48%", "healable": false}, // 28
      {"attackPower": "0|49%", "healable": false}, // 29
      {"attackPower": "0|50%", "healable": false}, // 30
    ]
  },
  "damageCap": {
    // ダメージ上限 
    "minLevel": 1,
    "maxLevel": 65,
    "levels": [
      {"attackDamageCap": "0|3%", "skilledDamageCap": "0|3%", "sbaDamageCap":  "0|3%"}, // 1
      {"attackDamageCap": "0|6%", "skilledDamageCap": "0|6%", "sbaDamageCap":  "0|6%"}, // 2
      {"attackDamageCap": "0|9%", "skilledDamageCap": "0|9%", "sbaDamageCap":  "0|9%"}, // 3
      {"attackDamageCap": "0|12%", "skilledDamageCap": "0|12%", "sbaDamageCap":  "0|12%"}, // 4
      {"attackDamageCap": "0|15%", "skilledDamageCap": "0|15%", "sbaDamageCap":  "0|15%"}, // 5
      {"attackDamageCap": "0|18%", "skilledDamageCap": "0|18%", "sbaDamageCap":  "0|18%"}, // 6
      {"attackDamageCap": "0|21%", "skilledDamageCap": "0|21%", "sbaDamageCap":  "0|21%"}, // 7
      {"attackDamageCap": "0|24%", "skilledDamageCap": "0|24%", "sbaDamageCap":  "0|24%"}, // 8
      {"attackDamageCap": "0|27%", "skilledDamageCap": "0|27%", "sbaDamageCap":  "0|27%"}, // 9
      {"attackDamageCap": "0|30%", "skilledDamageCap": "0|30%", "sbaDamageCap":  "0|30%"}, // 10
      {"attackDamageCap": "0|33%", "skilledDamageCap": "0|33%", "sbaDamageCap":  "0|33%"}, // 11
      {"attackDamageCap": "0|36%", "skilledDamageCap": "0|36%", "sbaDamageCap":  "0|36%"}, // 12
      {"attackDamageCap": "0|39%", "skilledDamageCap": "0|39%", "sbaDamageCap":  "0|39%"}, // 13
      {"attackDamageCap": "0|42%", "skilledDamageCap": "0|42%", "sbaDamageCap":  "0|42%"}, // 14
      {"attackDamageCap": "0|45%", "skilledDamageCap": "0|45%", "sbaDamageCap":  "0|45%"}, // 15
      {"attackDamageCap": "0|48%", "skilledDamageCap": "0|48%", "sbaDamageCap":  "0|48%"}, // 16
      {"attackDamageCap": "0|51%", "skilledDamageCap": "0|51%", "sbaDamageCap":  "0|51%"}, // 17
      {"attackDamageCap": "0|54%", "skilledDamageCap": "0|54%", "sbaDamageCap":  "0|54%"}, // 18
      {"attackDamageCap": "0|57%", "skilledDamageCap": "0|57%", "sbaDamageCap":  "0|57%"}, // 19
      {"attackDamageCap": "0|60%", "skilledDamageCap": "0|60%", "sbaDamageCap":  "0|60%"}, // 20
      {"attackDamageCap": "0|63%", "skilledDamageCap": "0|63%", "sbaDamageCap":  "0|63%"}, // 21
      {"attackDamageCap": "0|66%", "skilledDamageCap": "0|66%", "sbaDamageCap":  "0|66%"}, // 22
      {"attackDamageCap": "0|69%", "skilledDamageCap": "0|69%", "sbaDamageCap":  "0|69%"}, // 23
      {"attackDamageCap": "0|72%", "skilledDamageCap": "0|72%", "sbaDamageCap":  "0|72%"}, // 24
      {"attackDamageCap": "0|75%", "skilledDamageCap": "0|75%", "sbaDamageCap":  "0|75%"}, // 25
      {"attackDamageCap": "0|78%", "skilledDamageCap": "0|78%", "sbaDamageCap":  "0|78%"}, // 26
      {"attackDamageCap": "0|81%", "skilledDamageCap": "0|81%", "sbaDamageCap":  "0|81%"}, // 27
      {"attackDamageCap": "0|84%", "skilledDamageCap": "0|84%", "sbaDamageCap":  "0|84%"}, // 28
      {"attackDamageCap": "0|87%", "skilledDamageCap": "0|87%", "sbaDamageCap":  "0|87%"}, // 29
      {"attackDamageCap": "0|90%", "skilledDamageCap": "0|90%", "sbaDamageCap":  "0|90%"}, // 30
      {"attackDamageCap": "0|94%", "skilledDamageCap": "0|94%", "sbaDamageCap":  "0|94%"}, // 31
      {"attackDamageCap": "0|98%", "skilledDamageCap": "0|98%", "sbaDamageCap":  "0|98%"}, // 32
      {"attackDamageCap": "0|102%", "skilledDamageCap": "0|102%", "sbaDamageCap":  "0|102%"}, // 33
      {"attackDamageCap": "0|106%", "skilledDamageCap": "0|106%", "sbaDamageCap":  "0|106%"}, // 34
      {"attackDamageCap": "0|110%", "skilledDamageCap": "0|110%", "sbaDamageCap":  "0|110%"}, // 35
      {"attackDamageCap": "0|114%", "skilledDamageCap": "0|114%", "sbaDamageCap":  "0|114%"}, // 36
      {"attackDamageCap": "0|118%", "skilledDamageCap": "0|118%", "sbaDamageCap":  "0|118%"}, // 37
      {"attackDamageCap": "0|122%", "skilledDamageCap": "0|122%", "sbaDamageCap":  "0|122%"}, // 38
      {"attackDamageCap": "0|126%", "skilledDamageCap": "0|126%", "sbaDamageCap":  "0|126%"}, // 39
      {"attackDamageCap": "0|130%", "skilledDamageCap": "0|130%", "sbaDamageCap":  "0|130%"}, // 40
      {"attackDamageCap": "0|134%", "skilledDamageCap": "0|134%", "sbaDamageCap":  "0|134%"}, // 41
      {"attackDamageCap": "0|138%", "skilledDamageCap": "0|138%", "sbaDamageCap":  "0|138%"}, // 42
      {"attackDamageCap": "0|142%", "skilledDamageCap": "0|142%", "sbaDamageCap":  "0|142%"}, // 43
      {"attackDamageCap": "0|146%", "skilledDamageCap": "0|146%", "sbaDamageCap":  "0|146%"}, // 44
      {"attackDamageCap": "0|150%", "skilledDamageCap": "0|150%", "sbaDamageCap":  "0|150%"}, // 45
      {"attackDamageCap": "0|154%", "skilledDamageCap": "0|154%", "sbaDamageCap":  "0|154%"}, // 46
      {"attackDamageCap": "0|158%", "skilledDamageCap": "0|158%", "sbaDamageCap":  "0|158%"}, // 47
      {"attackDamageCap": "0|162%", "skilledDamageCap": "0|162%", "sbaDamageCap":  "0|162%"}, // 48
      {"attackDamageCap": "0|166%", "skilledDamageCap": "0|166%", "sbaDamageCap":  "0|166%"}, // 49
      {"attackDamageCap": "0|170%", "skilledDamageCap": "0|170%", "sbaDamageCap":  "0|170%"}, // 50
      {"attackDamageCap": "0|175%", "skilledDamageCap": "0|175%", "sbaDamageCap":  "0|175%"}, // 51
      {"attackDamageCap": "0|180%", "skilledDamageCap": "0|180%", "sbaDamageCap":  "0|180%"}, // 52
      {"attackDamageCap": "0|185%", "skilledDamageCap": "0|185%", "sbaDamageCap":  "0|185%"}, // 53
      {"attackDamageCap": "0|190%", "skilledDamageCap": "0|190%", "sbaDamageCap":  "0|190%"}, // 54
      {"attackDamageCap": "0|195%", "skilledDamageCap": "0|195%", "sbaDamageCap":  "0|195%"}, // 55
      {"attackDamageCap": "0|200%", "skilledDamageCap": "0|200%", "sbaDamageCap":  "0|200%"}, // 56
      {"attackDamageCap": "0|205%", "skilledDamageCap": "0|205%", "sbaDamageCap":  "0|205%"}, // 57
      {"attackDamageCap": "0|210%", "skilledDamageCap": "0|210%", "sbaDamageCap":  "0|210%"}, // 58
      {"attackDamageCap": "0|215%", "skilledDamageCap": "0|215%", "sbaDamageCap":  "0|215%"}, // 59
      {"attackDamageCap": "0|220%", "skilledDamageCap": "0|220%", "sbaDamageCap":  "0|220%"}, // 60
      {"attackDamageCap": "0|226%", "skilledDamageCap": "0|226%", "sbaDamageCap":  "0|226%"}, // 61
      {"attackDamageCap": "0|232%", "skilledDamageCap": "0|232%", "sbaDamageCap":  "0|232%"}, // 62
      {"attackDamageCap": "0|238%", "skilledDamageCap": "0|238%", "sbaDamageCap":  "0|238%"}, // 63
      {"attackDamageCap": "0|244%", "skilledDamageCap": "0|244%", "sbaDamageCap":  "0|244%"}, // 64
      {"attackDamageCap": "0|250%", "skilledDamageCap": "0|250%", "sbaDamageCap":  "0|250%"}, // 65
    ]
  },
  "concentratedFire": {
    // 集中砲火 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": []
  },
  "skilledAssault": {
    // アビリティダメージ 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": []
  },
  "glassCannon": {
    // 紙一重 
    "minLevel": 1,
    "maxLevel": 15,
    "levels": [
      {"attackPower": "0|2%", "attackDamageCap": "0|2%", "skilledDamageCap": "0|2%", "sbaDamageCap": "0|2%", "alwaysBeStuned": true}, // 1
      {"attackPower": "0|4%", "attackDamageCap": "0|4%", "skilledDamageCap": "0|4%", "sbaDamageCap": "0|4%", "alwaysBeStuned": true}, // 2
      {"attackPower": "0|6%", "attackDamageCap": "0|6%", "skilledDamageCap": "0|6%", "sbaDamageCap": "0|6%", "alwaysBeStuned": true}, // 3
      {"attackPower": "0|8%", "attackDamageCap": "0|8%", "skilledDamageCap": "0|8%", "sbaDamageCap": "0|8%", "alwaysBeStuned": true}, // 4
      {"attackPower": "0|10%", "attackDamageCap": "0|10%", "skilledDamageCap": "0|10%", "sbaDamageCap": "0|10%", "alwaysBeStuned": true}, // 5
      {"attackPower": "0|12%", "attackDamageCap": "0|12%", "skilledDamageCap": "0|12%", "sbaDamageCap": "0|12%", "alwaysBeStuned": true}, // 6
      {"attackPower": "0|14%", "attackDamageCap": "0|14%", "skilledDamageCap": "0|14%", "sbaDamageCap": "0|14%", "alwaysBeStuned": true}, // 7
      {"attackPower": "0|16%", "attackDamageCap": "0|16%", "skilledDamageCap": "0|16%", "sbaDamageCap": "0|16%", "alwaysBeStuned": true}, // 8
      {"attackPower": "0|18%", "attackDamageCap": "0|18%", "skilledDamageCap": "0|18%", "sbaDamageCap": "0|18%", "alwaysBeStuned": true}, // 9
      {"attackPower": "0|20%", "attackDamageCap": "0|20%", "skilledDamageCap": "0|20%", "sbaDamageCap": "0|20%", "alwaysBeStuned": true}, // 10
      {"attackPower": "0|22%", "attackDamageCap": "0|22%", "skilledDamageCap": "0|22%", "sbaDamageCap": "0|22%", "alwaysBeStuned": true}, // 11
      {"attackPower": "0|24%", "attackDamageCap": "0|24%", "skilledDamageCap": "0|24%", "sbaDamageCap": "0|24%", "alwaysBeStuned": true}, // 12
      {"attackPower": "0|26%", "attackDamageCap": "0|26%", "skilledDamageCap": "0|26%", "sbaDamageCap": "0|26%", "alwaysBeStuned": true}, // 13
      {"attackPower": "0|28%", "attackDamageCap": "0|28%", "skilledDamageCap": "0|28%", "sbaDamageCap": "0|28%", "alwaysBeStuned": true}, // 14
      {"attackPower": "0|30%", "attackDamageCap": "0|30%", "skilledDamageCap": "0|30%", "sbaDamageCap": "0|30%", "alwaysBeStuned": true}, // 15
    ]
  },
  "lessIsMore": {
    // 裸一貫 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": []
  },
  "breakAssassin": {
    // ブレイク特攻 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": []
  },
  "headStart": {
    // 先制 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": []
  },
  "supplementaryDamage": {
    // 追撃 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": []
  },
  "powerHungry": {
    // 修羅 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": []
  },
  "berserker": {
    // 窮鼠 
    "minLevel": 1,
    "maxLevel": 30,
    "levels": [
      {"attackPower": "0|36%", "cannotGuard": true, "cannotDodge": true}, // 1
      {"attackPower": "0|37%", "cannotGuard": true, "cannotDodge": true}, // 2
      {"attackPower": "0|38%", "cannotGuard": true, "cannotDodge": true}, // 3
      {"attackPower": "0|39%", "cannotGuard": true, "cannotDodge": true}, // 4
      {"attackPower": "0|40%", "cannotGuard": true, "cannotDodge": true}, // 5
      {"attackPower": "0|41%", "cannotGuard": true, "cannotDodge": true}, // 6
      {"attackPower": "0|42%", "cannotGuard": true, "cannotDodge": true}, // 7
      {"attackPower": "0|43%", "cannotGuard": true, "cannotDodge": true}, // 8
      {"attackPower": "0|44%", "cannotGuard": true, "cannotDodge": true}, // 9
      {"attackPower": "0|45%", "cannotGuard": true, "cannotDodge": true}, // 10
      {"attackPower": "0|46%", "cannotGuard": true, "cannotDodge": true}, // 11
      {"attackPower": "0|47%", "cannotGuard": true, "cannotDodge": true}, // 12
      {"attackPower": "0|48%", "cannotGuard": true, "cannotDodge": true}, // 13
      {"attackPower": "0|49%", "cannotGuard": true, "cannotDodge": true}, // 14
      {"attackPower": "0|50%", "cannotGuard": true, "cannotDodge": true}, // 15
      {"attackPower": "0|52%", "cannotGuard": true, "cannotDodge": true}, // 16
      {"attackPower": "0|54%", "cannotGuard": true, "cannotDodge": true}, // 17
      {"attackPower": "0|56%", "cannotGuard": true, "cannotDodge": true}, // 18
      {"attackPower": "0|58%", "cannotGuard": true, "cannotDodge": true}, // 19
      {"attackPower": "0|60%", "cannotGuard": true, "cannotDodge": true}, // 20
      {"attackPower": "0|62%", "cannotGuard": true, "cannotDodge": true}, // 21
      {"attackPower": "0|64%", "cannotGuard": true, "cannotDodge": true}, // 22
      {"attackPower": "0|66%", "cannotGuard": true, "cannotDodge": true}, // 23
      {"attackPower": "0|68%", "cannotGuard": true, "cannotDodge": true}, // 24
      {"attackPower": "0|70%", "cannotGuard": true, "cannotDodge": true}, // 25
      {"attackPower": "0|72%", "cannotGuard": true, "cannotDodge": true}, // 26
      {"attackPower": "0|74%", "cannotGuard": true, "cannotDodge": true}, // 27
      {"attackPower": "0|76%", "cannotGuard": true, "cannotDodge": true}, // 28
      {"attackPower": "0|78%", "cannotGuard": true, "cannotDodge": true}, // 29
      {"attackPower": "0|80%", "cannotGuard": true, "cannotDodge": true}, // 30
    ]
  },
  "rollOfTheDie": {
    // 一天六地 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": []
  },
  // 耐久
  "sandtombResistance": {
    // 砂だるま耐性 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": []
  },
  "dizzyResistance": {
    // 気絶耐性 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": []
  },
  "improvedGuard": {
    // ガード性能 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": []
  },
  "garrison": {
    // 堅守 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": []
  },
  "steelNerves": {
    // ふんばり 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": []
  },
  "slowResistance": {
    // スロウ耐性 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": []
  },
  "burnResistance": {
    // 灼熱耐性 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": []
  },
  "preciseResilience": {
    // 抗戦 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": []
  },
  "blightResistance": {
    // 災禍耐性 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": []
  },
  "aegis": {
    // 守護 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": []
  },
  "paralysisResistance": {
    // 麻痺耐性 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": []
  },
  "nimbleDefense": {
    // 精神一到 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": []
  },
  "glaciateResistance": {
    // 氷結耐性 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": []
  },
  "firmStance": {
    // 不動 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": []
  },
  "poisonResistance": {
    // 毒耐性 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": []
  },
  "heldUnderResistance": {
    // 水牢耐性 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": []
  },
  "attackDownResistance": {
    // 攻撃DOWN耐性 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": []
  },
  "deffenceDownResistance": {
    // 防御DOWN耐性 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": []
  },
  "sbaSealedResistance": {
    // 奥義封印耐性 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": []
  },
  "improvedDodge": {
    // 回避性能 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": []
  },
  "stronghold": {
    // 剛健 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": []
  },
  "flightOverFight": {
    // フラジャイルドッジ 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": []
  },
  "skillSealedResistance": {
    // アビリティ封印耐性 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": []
  },
  "darkflameResistance": {
    // レジストオルタ 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": []
  },
  "untouchable": {
    // 回避距離 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": []
  },
  // 支援
  "uplift": {
    // 高揚 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": []
  },
  "quickCooldown": {
    // クイックアビリティ 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": []
  },
  "nimbleOnslaught": {
    // 明鏡止水 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": []
  },
  "preciseWrath": {
    // 怒髪天 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": []
  },
  "drain": {
    // HP吸収 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": []
  },
  "regen": {
    // リジェネレーション 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": []
  },
  "improvedHealing": {
    // 回復性能 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": []
  },
  "cascade": {
    // 怒涛 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": []
  },
  // 特殊
  "guts": {
    // ガッツ 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": []
  },
  "rupieTycoon": {
    // 取得ルピ 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": []
  },
  "lowProfile": {
    // ステルス 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": []
  },
  "fastLearner": {
    // 取得経験値 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": []
  },
  "potionHoarder": {
    // ポーション所持数 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": []
  },
  "provoke": {
    // 挑発 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": []
  },
  "steadyFocus": {
    // チャージ強化 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": []
  },
  "autorevive": {
    // 自動復活 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": []
  },
  "pathToMastery": {
    // 取得MSP 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": []
  },
  "potentGreens": {
    // 万能薬 
    "minLevel": 15,
    "maxLevel": 30,
    "levels": [
      {"potentGreens": "1|0%"}, // 15
      {"potentGreens": "1|0%"}, // 16
      {"potentGreens": "1|0%"}, // 17
      {"potentGreens": "1|0%"}, // 18
      {"potentGreens": "1|0%"}, // 19
      {"potentGreens": "1|0%"}, // 20
      {"potentGreens": "1|0%"}, // 21
      {"potentGreens": "1|0%"}, // 22
      {"potentGreens": "1|0%"}, // 23
      {"potentGreens": "1|0%"}, // 24
      {"potentGreens": "1|0%"}, // 25
      {"potentGreens": "1|0%"}, // 26
      {"potentGreens": "1|0%"}, // 27
      {"potentGreens": "1|0%"}, // 28
      {"potentGreens": "1|0%"}, // 29
      {"potentGreens": "2|0%"}, // 30
    ]
  },
  "stoutHeart": {
    // 怯み無効 
    "minLevel": 15,
    "maxLevel": 15,
    "levels": [
      {"stoutHeart": true} // 15
    ]
  },
  "crabbyResonance": {
    // カニの共鳴 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": [
      {"attackPower": "3|0%"}, // 1
      {"attackPower": "4|0%"}, // 2
      {"attackPower": "5|0%"}, // 3
      {"attackPower": "6|0%"}, // 4
      {"attackPower": "7|0%"}, // 5
      {"attackPower": "8|0%"}, // 6
      {"attackPower": "9|0%"}, // 7
      {"attackPower": "10|0%"}, // 8
      {"attackPower": "11|0%"}, // 9
      {"attackPower": "12|0%"}, // 10
      {"attackPower": "13|0%"}, // 11
      {"attackPower": "14|0%"}, // 12
      {"attackPower": "15|0%"}, // 13
      {"attackPower": "16|0%"}, // 14
      {"attackPower": "18|0%"}, // 15
      {"attackPower": "20|0%"}, // 16
      {"attackPower": "22|0%"}, // 17
      {"attackPower": "24|0%"}, // 18
      {"attackPower": "26|0%"}, // 19
      {"attackPower": "28|0%"}, // 20
      {"attackPower": "30|0%"}, // 21
      {"attackPower": "33|0%"}, // 22
      {"attackPower": "36|0%"}, // 23
      {"attackPower": "39|0%"}, // 24
      {"attackPower": "42|0%"}, // 25
      {"attackPower": "45|0%"}, // 26
      {"attackPower": "48|0%"}, // 27
      {"attackPower": "51|0%"}, // 28
      {"attackPower": "55|0%"}, // 29
      {"attackPower": "59|0%"}, // 30
      {"attackPower": "63|0%"}, // 31
      {"attackPower": "67|0%"}, // 32
      {"attackPower": "71|0%"}, // 33
      {"attackPower": "75|0%"}, // 34
      {"attackPower": "80|0%"}, // 35
      {"attackPower": "85|0%"}, // 36
      {"attackPower": "90|0%"}, // 37
      {"attackPower": "95|0%"}, // 38
      {"attackPower": "100|0%"}, // 39
      {"attackPower": "150|0%"}, // 40
      {"attackPower": "200|0%"}, // 41
      {"attackPower": "300|0%"}, // 42
      {"attackPower": "400|0%"}, // 43
      {"attackPower": "500|0%"}, // 44
      {"attackPower": "1000|0%"}, // 45
    ]
  },
  "crabvestmentReturns": {
    // カニの恩返し 
    "minLevel": 15,
    "maxLevel": 15,
    "levels": [
      {"health": "0|20%", "reduceDamageTaken": "0|10%"}, // 15
    ]
  },
  "sigilBooster": {
    // ジーン強化 
    "minLevel": 1,
    "maxLevel": 1,
    "levels": [
      {"sigilBoost": "1|0%"}
    ],
  },
  "catastrophe": {
    // カタストロフィ 
    "minLevel": 25,
    "maxLevel": 25,
    "levels": [
      {"attackPower": "0|50%|health<=45000", "attackDamageCap": "0|100%|health<=45000", "skilledDamageCap": "0|100%|health<=45000", "sbaDamageCap": "0|100%|health<=45000"}
    ],
  }
}