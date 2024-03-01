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
    "maxLevel": 30,
    "levels": [
      {"extendsDodgeInvincibility": "1|0%", "attackPower": "0|5%|isPerfectDodgeRecently"}, // 1
      {"extendsDodgeInvincibility": "1|0%", "attackPower": "0|7%|isPerfectDodgeRecently"}, // 2
      {"extendsDodgeInvincibility": "1|0%", "attackPower": "0|9%|isPerfectDodgeRecently"}, // 3
      {"extendsDodgeInvincibility": "1|0%", "attackPower": "0|11%|isPerfectDodgeRecently"}, // 4
      {"extendsDodgeInvincibility": "1|0%", "attackPower": "0|12%|isPerfectDodgeRecently"}, // 5
      {"extendsDodgeInvincibility": "1|0%", "attackPower": "0|13%|isPerfectDodgeRecently"}, // 6
      {"extendsDodgeInvincibility": "1|0%", "attackPower": "0|14%|isPerfectDodgeRecently"}, // 7
      {"extendsDodgeInvincibility": "1|0%", "attackPower": "0|15%|isPerfectDodgeRecently"}, // 8
      {"extendsDodgeInvincibility": "1|0%", "attackPower": "0|16%|isPerfectDodgeRecently"}, // 9
      {"extendsDodgeInvincibility": "1|0%", "attackPower": "0|17%|isPerfectDodgeRecently"}, // 10
      {"extendsDodgeInvincibility": "1|0%", "attackPower": "0|18%|isPerfectDodgeRecently"}, // 11
      {"extendsDodgeInvincibility": "1|0%", "attackPower": "0|19%|isPerfectDodgeRecently"}, // 12
      {"extendsDodgeInvincibility": "1|0%", "attackPower": "0|20%|isPerfectDodgeRecently"}, // 13
      {"extendsDodgeInvincibility": "1|0%", "attackPower": "0|21%|isPerfectDodgeRecently"}, // 14
      {"extendsDodgeInvincibility": "2|0%", "attackPower": "0|22%|isPerfectDodgeRecently"}, // 15
      {"extendsDodgeInvincibility": "2|0%", "attackPower": "0|23%|isPerfectDodgeRecently"}, // 16
      {"extendsDodgeInvincibility": "2|0%", "attackPower": "0|23.5%|isPerfectDodgeRecently"}, // 17
      {"extendsDodgeInvincibility": "2|0%", "attackPower": "0|24%|isPerfectDodgeRecently"}, // 18
      {"extendsDodgeInvincibility": "2|0%", "attackPower": "0|24.5%|isPerfectDodgeRecently"}, // 19
      {"extendsDodgeInvincibility": "2|0%", "attackPower": "0|25%|isPerfectDodgeRecently"}, // 20
      {"extendsDodgeInvincibility": "2|0%", "attackPower": "0|25.5%|isPerfectDodgeRecently"}, // 21
      {"extendsDodgeInvincibility": "2|0%", "attackPower": "0|26%|isPerfectDodgeRecently"}, // 22
      {"extendsDodgeInvincibility": "2|0%", "attackPower": "0|26.5%|isPerfectDodgeRecently"}, // 23
      {"extendsDodgeInvincibility": "2|0%", "attackPower": "0|27%|isPerfectDodgeRecently"}, // 24
      {"extendsDodgeInvincibility": "2|0%", "attackPower": "0|27.5%|isPerfectDodgeRecently"}, // 25
      {"extendsDodgeInvincibility": "2|0%", "attackPower": "0|28%|isPerfectDodgeRecently"}, // 26
      {"extendsDodgeInvincibility": "2|0%", "attackPower": "0|28.5%|isPerfectDodgeRecently"}, // 27
      {"extendsDodgeInvincibility": "2|0%", "attackPower": "0|29%|isPerfectDodgeRecently"}, // 28
      {"extendsDodgeInvincibility": "2|0%", "attackPower": "0|29.5%|isPerfectDodgeRecently"}, // 29
      {"extendsDodgeInvincibility": "3|0%", "attackPower": "0|30%|isPerfectDodgeRecently"}, // 30
    ]
  },
  "criticalDamage": {
    // クリティカルダメージ 
    "minLevel": 1,
    "maxLevel": 30,
    "levels": [
      {"damageCritical": "0|5%"}, // 1
      {"damageCritical": "0|8%"}, // 2
      {"damageCritical": "0|11%"}, // 3
      {"damageCritical": "0|13%"}, // 4
      {"damageCritical": "0|15%"}, // 5
      {"damageCritical": "0|17%"}, // 6
      {"damageCritical": "0|19%"}, // 7
      {"damageCritical": "0|21%"}, // 8
      {"damageCritical": "0|23%"}, // 9
      {"damageCritical": "0|25%"}, // 10
      {"damageCritical": "0|27%"}, // 11
      {"damageCritical": "0|29%"}, // 12
      {"damageCritical": "0|31%"}, // 13
      {"damageCritical": "0|33%"}, // 14
      {"damageCritical": "0|35%"}, // 15
      {"damageCritical": "0|36%"}, // 16
      {"damageCritical": "0|37%"}, // 17
      {"damageCritical": "0|38%"}, // 18
      {"damageCritical": "0|39%"}, // 19
      {"damageCritical": "0|40%"}, // 20
      {"damageCritical": "0|41%"}, // 21
      {"damageCritical": "0|42%"}, // 22
      {"damageCritical": "0|43%"}, // 23
      {"damageCritical": "0|44%"}, // 24
      {"damageCritical": "0|45%"}, // 25
      {"damageCritical": "0|46%"}, // 26
      {"damageCritical": "0|47%"}, // 27
      {"damageCritical": "0|48%"}, // 28
      {"damageCritical": "0|49%"}, // 29
      {"damageCritical": "0|50%"} , // 30
    ]
  },
  "overdriveAssassin": {
    // オーバードライブ特攻 
    "minLevel": 1,
    "maxLevel": 30,
    "levels": [
      {"damage": "0|10%|isEnemyOverdrive"}, // 1
      {"damage": "0|16%|isEnemyOverdrive"}, // 2
      {"damage": "0|22%|isEnemyOverdrive"}, // 3
      {"damage": "0|27%|isEnemyOverdrive"}, // 4
      {"damage": "0|31%|isEnemyOverdrive"}, // 5
      {"damage": "0|35%|isEnemyOverdrive"}, // 6
      {"damage": "0|39%|isEnemyOverdrive"}, // 7
      {"damage": "0|42%|isEnemyOverdrive"}, // 8
      {"damage": "0|46%|isEnemyOverdrive"}, // 9
      {"damage": "0|50%|isEnemyOverdrive"}, // 10
      {"damage": "0|54%|isEnemyOverdrive"}, // 11
      {"damage": "0|58%|isEnemyOverdrive"}, // 12
      {"damage": "0|62%|isEnemyOverdrive"}, // 13
      {"damage": "0|66%|isEnemyOverdrive"}, // 14
      {"damage": "0|70%|isEnemyOverdrive"}, // 15
      {"damage": "0|72%|isEnemyOverdrive"}, // 16
      {"damage": "0|74%|isEnemyOverdrive"}, // 17
      {"damage": "0|76%|isEnemyOverdrive"}, // 18
      {"damage": "0|78%|isEnemyOverdrive"}, // 19
      {"damage": "0|80%|isEnemyOverdrive"}, // 20
      {"damage": "0|82%|isEnemyOverdrive"}, // 21
      {"damage": "0|84%|isEnemyOverdrive"}, // 22
      {"damage": "0|86%|isEnemyOverdrive"}, // 23
      {"damage": "0|88%|isEnemyOverdrive"}, // 24
      {"damage": "0|90%|isEnemyOverdrive"}, // 25
      {"damage": "0|92%|isEnemyOverdrive"}, // 26
      {"damage": "0|94%|isEnemyOverdrive"}, // 27
      {"damage": "0|96%|isEnemyOverdrive"}, // 28
      {"damage": "0|98%|isEnemyOverdrive"}, // 29
      {"damage": "0|100%|isEnemyOverdrive"}, // 30
    ]
  },
  "injuryToInsult": {
    // 弱体状態特攻 
    "minLevel": 1,
    "maxLevel": 30,
    "levels": [
      {"damage": "0|5%|isEnemyInjury"}, // 1
      {"damage": "0|7%|isEnemyInjury"}, // 2
      {"damage": "0|9%|isEnemyInjury"}, // 3
      {"damage": "0|11%|isEnemyInjury"}, // 4
      {"damage": "0|12%|isEnemyInjury"}, // 5
      {"damage": "0|13%|isEnemyInjury"}, // 6
      {"damage": "0|14%|isEnemyInjury"}, // 7
      {"damage": "0|15%|isEnemyInjury"}, // 8
      {"damage": "0|16%|isEnemyInjury"}, // 9
      {"damage": "0|17%|isEnemyInjury"}, // 10
      {"damage": "0|18%|isEnemyInjury"}, // 11
      {"damage": "0|19%|isEnemyInjury"}, // 12
      {"damage": "0|20%|isEnemyInjury"}, // 13
      {"damage": "0|21%|isEnemyInjury"}, // 14
      {"damage": "0|22%|isEnemyInjury"}, // 15
      {"damage": "0|23%|isEnemyInjury"}, // 16
      {"damage": "0|23.5%|isEnemyInjury"}, // 17
      {"damage": "0|24%|isEnemyInjury"}, // 18
      {"damage": "0|24.5%|isEnemyInjury"}, // 19
      {"damage": "0|25%|isEnemyInjury"}, // 20
      {"damage": "0|25.5%|isEnemyInjury"}, // 21
      {"damage": "0|26%|isEnemyInjury"}, // 22
      {"damage": "0|26.5%|isEnemyInjury"}, // 23
      {"damage": "0|27%|isEnemyInjury"}, // 24
      {"damage": "0|27.5%|isEnemyInjury"}, // 25
      {"damage": "0|28%|isEnemyInjury"}, // 26
      {"damage": "0|28.5%|isEnemyInjury"}, // 27
      {"damage": "0|29%|isEnemyInjury"}, // 28
      {"damage": "0|29.5%|isEnemyInjury"}, // 29
      {"damage": "0|30%|isEnemyInjury"}, // 30
    ]
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
    "maxLevel": 30,
    "levels": [
      {"damageThrow": "0|10%"}, // 1
      {"damageThrow": "0|16%"}, // 2
      {"damageThrow": "0|22%"}, // 3
      {"damageThrow": "0|27%"}, // 4
      {"damageThrow": "0|31%"}, // 5
      {"damageThrow": "0|35%"}, // 6
      {"damageThrow": "0|39%"}, // 7
      {"damageThrow": "0|42%"}, // 8
      {"damageThrow": "0|46%"}, // 9
      {"damageThrow": "0|50%"}, // 10
      {"damageThrow": "0|54%"}, // 11
      {"damageThrow": "0|58%"}, // 12
      {"damageThrow": "0|62%"}, // 13
      {"damageThrow": "0|66%"}, // 14
      {"damageThrow": "0|70%"}, // 15
      {"damageThrow": "0|72%"}, // 16
      {"damageThrow": "0|74%"}, // 17
      {"damageThrow": "0|76%"}, // 18
      {"damageThrow": "0|78%"}, // 19
      {"damageThrow": "0|80%"}, // 20
      {"damageThrow": "0|82%"}, // 21
      {"damageThrow": "0|84%"}, // 22
      {"damageThrow": "0|86%"}, // 23
      {"damageThrow": "0|88%"}, // 24
      {"damageThrow": "0|90%"}, // 25
      {"damageThrow": "0|92%"}, // 26
      {"damageThrow": "0|94%"}, // 27
      {"damageThrow": "0|96%"}, // 28
      {"damageThrow": "0|98%"}, // 29
      {"damageThrow": "0|100%"}, // 30
    ]
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
    "maxLevel": 30,
    "levels": [
      {"extendsGuardStunPowoer": "0|10%", "attackPower": "0|5%|isPerfectGuardRecently"}, // 1
      {"extendsGuardStunPowoer": "0|16%", "attackPower": "0|8%|isPerfectGuardRecently"}, // 2
      {"extendsGuardStunPowoer": "0|22%", "attackPower": "0|11%|isPerfectGuardRecently"}, // 3
      {"extendsGuardStunPowoer": "0|26%", "attackPower": "0|13%|isPerfectGuardRecently"}, // 4
      {"extendsGuardStunPowoer": "0|30%", "attackPower": "0|15%|isPerfectGuardRecently"}, // 5
      {"extendsGuardStunPowoer": "0|34%", "attackPower": "0|17%|isPerfectGuardRecently"}, // 6
      {"extendsGuardStunPowoer": "0|38%", "attackPower": "0|19%|isPerfectGuardRecently"}, // 7
      {"extendsGuardStunPowoer": "0|42%", "attackPower": "0|21%|isPerfectGuardRecently"}, // 8
      {"extendsGuardStunPowoer": "0|46%", "attackPower": "0|23%|isPerfectGuardRecently"}, // 9
      {"extendsGuardStunPowoer": "0|50%", "attackPower": "0|25%|isPerfectGuardRecently"}, // 10
      {"extendsGuardStunPowoer": "0|54%", "attackPower": "0|27%|isPerfectGuardRecently"}, // 11
      {"extendsGuardStunPowoer": "0|58%", "attackPower": "0|29%|isPerfectGuardRecently"}, // 12
      {"extendsGuardStunPowoer": "0|62%", "attackPower": "0|31%|isPerfectGuardRecently"}, // 13
      {"extendsGuardStunPowoer": "0|66%", "attackPower": "0|33%|isPerfectGuardRecently"}, // 14
      {"extendsGuardStunPowoer": "0|70%", "attackPower": "0|35%|isPerfectGuardRecently"}, // 15
      {"extendsGuardStunPowoer": "0|72%", "attackPower": "0|36%|isPerfectGuardRecently"}, // 16
      {"extendsGuardStunPowoer": "0|74%", "attackPower": "0|37%|isPerfectGuardRecently"}, // 17
      {"extendsGuardStunPowoer": "0|76%", "attackPower": "0|38%|isPerfectGuardRecently"}, // 18
      {"extendsGuardStunPowoer": "0|78%", "attackPower": "0|39%|isPerfectGuardRecently"}, // 19
      {"extendsGuardStunPowoer": "0|80%", "attackPower": "0|40%|isPerfectGuardRecently"}, // 20
      {"extendsGuardStunPowoer": "0|82%", "attackPower": "0|41%|isPerfectGuardRecently"}, // 21
      {"extendsGuardStunPowoer": "0|84%", "attackPower": "0|42%|isPerfectGuardRecently"}, // 22
      {"extendsGuardStunPowoer": "0|86%", "attackPower": "0|43%|isPerfectGuardRecently"}, // 23
      {"extendsGuardStunPowoer": "0|88%", "attackPower": "0|44%|isPerfectGuardRecently"}, // 24
      {"extendsGuardStunPowoer": "0|90%", "attackPower": "0|45%|isPerfectGuardRecently"}, // 25
      {"extendsGuardStunPowoer": "0|92%", "attackPower": "0|46%|isPerfectGuardRecently"}, // 26
      {"extendsGuardStunPowoer": "0|94%", "attackPower": "0|47%|isPerfectGuardRecently"}, // 27
      {"extendsGuardStunPowoer": "0|96%", "attackPower": "0|48%|isPerfectGuardRecently"}, // 28
      {"extendsGuardStunPowoer": "0|98%", "attackPower": "0|49%|isPerfectGuardRecently"}, // 29
      {"extendsGuardStunPowoer": "0|100%", "attackPower": "0|50%|isPerfectGuardRecently"}, // 30
    ]
  },
  "lifeOnTheLine": {
    // 捨て身 
    "minLevel": 1,
    "maxLevel": 30,
    "levels": [
      {"attackPower": "0|5%", "cannotHeal": "1|0%"}, // 1
      {"attackPower": "0|8%", "cannotHeal": "1|0%"}, // 2
      {"attackPower": "0|11%", "cannotHeal": "1|0%"}, // 3
      {"attackPower": "0|13%", "cannotHeal": "1|0%"}, // 4
      {"attackPower": "0|15%", "cannotHeal": "1|0%"}, // 5
      {"attackPower": "0|17%", "cannotHeal": "1|0%"}, // 6
      {"attackPower": "0|19%", "cannotHeal": "1|0%"}, // 7
      {"attackPower": "0|21%", "cannotHeal": "1|0%"}, // 8
      {"attackPower": "0|23%", "cannotHeal": "1|0%"}, // 9
      {"attackPower": "0|25%", "cannotHeal": "1|0%"}, // 10
      {"attackPower": "0|27%", "cannotHeal": "1|0%"}, // 11
      {"attackPower": "0|29%", "cannotHeal": "1|0%"}, // 12
      {"attackPower": "0|31%", "cannotHeal": "1|0%"}, // 13
      {"attackPower": "0|33%", "cannotHeal": "1|0%"}, // 14
      {"attackPower": "0|35%", "cannotHeal": "1|0%"}, // 15
      {"attackPower": "0|36%", "cannotHeal": "1|0%"}, // 16
      {"attackPower": "0|37%", "cannotHeal": "1|0%"}, // 17
      {"attackPower": "0|38%", "cannotHeal": "1|0%"}, // 18
      {"attackPower": "0|39%", "cannotHeal": "1|0%"}, // 19
      {"attackPower": "0|40%", "cannotHeal": "1|0%"}, // 20
      {"attackPower": "0|41%", "cannotHeal": "1|0%"}, // 21
      {"attackPower": "0|42%", "cannotHeal": "1|0%"}, // 22
      {"attackPower": "0|43%", "cannotHeal": "1|0%"}, // 23
      {"attackPower": "0|44%", "cannotHeal": "1|0%"}, // 24
      {"attackPower": "0|45%", "cannotHeal": "1|0%"}, // 25
      {"attackPower": "0|46%", "cannotHeal": "1|0%"}, // 26
      {"attackPower": "0|47%", "cannotHeal": "1|0%"}, // 27
      {"attackPower": "0|48%", "cannotHeal": "1|0%"}, // 28
      {"attackPower": "0|49%", "cannotHeal": "1|0%"}, // 29
      {"attackPower": "0|50%", "cannotHeal": "1|0%"}, // 30
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
    "maxLevel": 30,
    "levels": [
      {"damageRanged": "0|5%"}, // 1
      {"damageRanged": "0|8%"}, // 2
      {"damageRanged": "0|11%"}, // 3
      {"damageRanged": "0|13%"}, // 4
      {"damageRanged": "0|15%"}, // 5
      {"damageRanged": "0|17%"}, // 6
      {"damageRanged": "0|19%"}, // 7
      {"damageRanged": "0|21%"}, // 8
      {"damageRanged": "0|23%"}, // 9
      {"damageRanged": "0|25%"}, // 10
      {"damageRanged": "0|27%"}, // 11
      {"damageRanged": "0|29%"}, // 12
      {"damageRanged": "0|31%"}, // 13
      {"damageRanged": "0|33%"}, // 14
      {"damageRanged": "0|35%"}, // 15
      {"damageRanged": "0|36%"}, // 16
      {"damageRanged": "0|37%"}, // 17
      {"damageRanged": "0|38%"}, // 18
      {"damageRanged": "0|39%"}, // 19
      {"damageRanged": "0|40%"}, // 20
      {"damageRanged": "0|41%"}, // 21
      {"damageRanged": "0|42%"}, // 22
      {"damageRanged": "0|43%"}, // 23
      {"damageRanged": "0|44%"}, // 24
      {"damageRanged": "0|45%"}, // 25
      {"damageRanged": "0|46%"}, // 26
      {"damageRanged": "0|47%"}, // 27
      {"damageRanged": "0|48%"}, // 28
      {"damageRanged": "0|49%"}, // 29
      {"damageRanged": "0|50%"}, // 30
    ]
  },
  "skilledAssault": {
    // アビリティダメージ 
    "minLevel": 1,
    "maxLevel": 30,
    "levels": [
      {"damageSkilled": "0|10%"}, // 1
      {"damageSkilled": "0|16%"}, // 2
      {"damageSkilled": "0|22%"}, // 3
      {"damageSkilled": "0|27%"}, // 4
      {"damageSkilled": "0|31%"}, // 5
      {"damageSkilled": "0|35%"}, // 6
      {"damageSkilled": "0|39%"}, // 7
      {"damageSkilled": "0|42%"}, // 8
      {"damageSkilled": "0|46%"}, // 9
      {"damageSkilled": "0|50%"}, // 10
      {"damageSkilled": "0|54%"}, // 11
      {"damageSkilled": "0|58%"}, // 12
      {"damageSkilled": "0|62%"}, // 13
      {"damageSkilled": "0|66%"}, // 14
      {"damageSkilled": "0|70%"}, // 15
      {"damageSkilled": "0|72%"}, // 16
      {"damageSkilled": "0|74%"}, // 17
      {"damageSkilled": "0|76%"}, // 18
      {"damageSkilled": "0|78%"}, // 19
      {"damageSkilled": "0|80%"}, // 20
      {"damageSkilled": "0|82%"}, // 21
      {"damageSkilled": "0|84%"}, // 22
      {"damageSkilled": "0|86%"}, // 23
      {"damageSkilled": "0|88%"}, // 24
      {"damageSkilled": "0|90%"}, // 25
      {"damageSkilled": "0|92%"}, // 26
      {"damageSkilled": "0|94%"}, // 27
      {"damageSkilled": "0|96%"}, // 28
      {"damageSkilled": "0|98%"}, // 29
      {"damageSkilled": "0|100%"}, // 30
    ]
  },
  "glassCannon": {
    // 紙一重 
    "minLevel": 1,
    "maxLevel": 15,
    "levels": [
      {"attackPower": "0|2%", "attackDamageCap": "0|2%", "skilledDamageCap": "0|2%", "sbaDamageCap": "0|2%", "alwaysBeStuned": '1|0%'}, // 1
      {"attackPower": "0|4%", "attackDamageCap": "0|4%", "skilledDamageCap": "0|4%", "sbaDamageCap": "0|4%", "alwaysBeStuned": '1|0%'}, // 2
      {"attackPower": "0|6%", "attackDamageCap": "0|6%", "skilledDamageCap": "0|6%", "sbaDamageCap": "0|6%", "alwaysBeStuned": '1|0%'}, // 3
      {"attackPower": "0|8%", "attackDamageCap": "0|8%", "skilledDamageCap": "0|8%", "sbaDamageCap": "0|8%", "alwaysBeStuned": '1|0%'}, // 4
      {"attackPower": "0|10%", "attackDamageCap": "0|10%", "skilledDamageCap": "0|10%", "sbaDamageCap": "0|10%", "alwaysBeStuned": '1|0%'}, // 5
      {"attackPower": "0|12%", "attackDamageCap": "0|12%", "skilledDamageCap": "0|12%", "sbaDamageCap": "0|12%", "alwaysBeStuned": '1|0%'}, // 6
      {"attackPower": "0|14%", "attackDamageCap": "0|14%", "skilledDamageCap": "0|14%", "sbaDamageCap": "0|14%", "alwaysBeStuned": '1|0%'}, // 7
      {"attackPower": "0|16%", "attackDamageCap": "0|16%", "skilledDamageCap": "0|16%", "sbaDamageCap": "0|16%", "alwaysBeStuned": '1|0%'}, // 8
      {"attackPower": "0|18%", "attackDamageCap": "0|18%", "skilledDamageCap": "0|18%", "sbaDamageCap": "0|18%", "alwaysBeStuned": '1|0%'}, // 9
      {"attackPower": "0|20%", "attackDamageCap": "0|20%", "skilledDamageCap": "0|20%", "sbaDamageCap": "0|20%", "alwaysBeStuned": '1|0%'}, // 10
      {"attackPower": "0|22%", "attackDamageCap": "0|22%", "skilledDamageCap": "0|22%", "sbaDamageCap": "0|22%", "alwaysBeStuned": '1|0%'}, // 11
      {"attackPower": "0|24%", "attackDamageCap": "0|24%", "skilledDamageCap": "0|24%", "sbaDamageCap": "0|24%", "alwaysBeStuned": '1|0%'}, // 12
      {"attackPower": "0|26%", "attackDamageCap": "0|26%", "skilledDamageCap": "0|26%", "sbaDamageCap": "0|26%", "alwaysBeStuned": '1|0%'}, // 13
      {"attackPower": "0|28%", "attackDamageCap": "0|28%", "skilledDamageCap": "0|28%", "sbaDamageCap": "0|28%", "alwaysBeStuned": '1|0%'}, // 14
      {"attackPower": "0|30%", "attackDamageCap": "0|30%", "skilledDamageCap": "0|30%", "sbaDamageCap": "0|30%", "alwaysBeStuned": '1|0%'}, // 15
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
    "maxLevel": 30,
    "levels": [
      {"damage": "0|20%|isEnemyBreak"}, // 1
      {"damage": "0|32%|isEnemyBreak"}, // 2
      {"damage": "0|44%|isEnemyBreak"}, // 3
      {"damage": "0|53%|isEnemyBreak"}, // 4
      {"damage": "0|61%|isEnemyBreak"}, // 5
      {"damage": "0|69%|isEnemyBreak"}, // 6
      {"damage": "0|77%|isEnemyBreak"}, // 7
      {"damage": "0|84%|isEnemyBreak"}, // 8
      {"damage": "0|92%|isEnemyBreak"}, // 9
      {"damage": "0|100%|isEnemyBreak"}, // 10
      {"damage": "0|108%|isEnemyBreak"}, // 11
      {"damage": "0|116%|isEnemyBreak"}, // 12
      {"damage": "0|124%|isEnemyBreak"}, // 13
      {"damage": "0|132%|isEnemyBreak"}, // 14
      {"damage": "0|140%|isEnemyBreak"}, // 15
      {"damage": "0|144%|isEnemyBreak"}, // 16
      {"damage": "0|148%|isEnemyBreak"}, // 17
      {"damage": "0|152%|isEnemyBreak"}, // 18
      {"damage": "0|156%|isEnemyBreak"}, // 19
      {"damage": "0|160%|isEnemyBreak"}, // 20
      {"damage": "0|164%|isEnemyBreak"}, // 21
      {"damage": "0|168%|isEnemyBreak"}, // 22
      {"damage": "0|172%|isEnemyBreak"}, // 23
      {"damage": "0|176%|isEnemyBreak"}, // 24
      {"damage": "0|180%|isEnemyBreak"}, // 25
      {"damage": "0|184%|isEnemyBreak"}, // 26
      {"damage": "0|188%|isEnemyBreak"}, // 27
      {"damage": "0|192%|isEnemyBreak"}, // 28
      {"damage": "0|196%|isEnemyBreak"}, // 29
      {"damage": "0|200%|isEnemyBreak"}, // 30
    ]
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
    "levels": [
      {"supplementaryDamageHitRate": "0|12%"}, // 1
      {"supplementaryDamageHitRate": "0|14%"}, // 2
      {"supplementaryDamageHitRate": "0|16%"}, // 3
      {"supplementaryDamageHitRate": "0|18%"}, // 4
      {"supplementaryDamageHitRate": "0|20%"}, // 5
      {"supplementaryDamageHitRate": "0|22%"}, // 6
      {"supplementaryDamageHitRate": "0|24%"}, // 7
      {"supplementaryDamageHitRate": "0|26%"}, // 8
      {"supplementaryDamageHitRate": "0|28%"}, // 9
      {"supplementaryDamageHitRate": "0|30%"}, // 10
      {"supplementaryDamageHitRate": "0|32%"}, // 11
      {"supplementaryDamageHitRate": "0|34%"}, // 12
      {"supplementaryDamageHitRate": "0|36%"}, // 13
      {"supplementaryDamageHitRate": "0|38%"}, // 14
      {"supplementaryDamageHitRate": "0|40%"}, // 15
      {"supplementaryDamageHitRate": "0|42%"}, // 16
      {"supplementaryDamageHitRate": "0|44%"}, // 17
      {"supplementaryDamageHitRate": "0|46%"}, // 18
      {"supplementaryDamageHitRate": "0|48%"}, // 19
      {"supplementaryDamageHitRate": "0|50%"}, // 20
      {"supplementaryDamageHitRate": "0|52%"}, // 21
      {"supplementaryDamageHitRate": "0|54%"}, // 22
      {"supplementaryDamageHitRate": "0|56%"}, // 23
      {"supplementaryDamageHitRate": "0|58%"}, // 24
      {"supplementaryDamageHitRate": "0|60%"}, // 25
      {"supplementaryDamageHitRate": "0|62%"}, // 26
      {"supplementaryDamageHitRate": "0|64%"}, // 27
      {"supplementaryDamageHitRate": "0|66%"}, // 28
      {"supplementaryDamageHitRate": "0|68%"}, // 29
      {"supplementaryDamageHitRate": "0|70%"}, // 30
      {"supplementaryDamageHitRate": "0|72%"}, // 31
      {"supplementaryDamageHitRate": "0|74%"}, // 32
      {"supplementaryDamageHitRate": "0|76%"}, // 33
      {"supplementaryDamageHitRate": "0|78%"}, // 34
      {"supplementaryDamageHitRate": "0|80%"}, // 35
      {"supplementaryDamageHitRate": "0|82%"}, // 36
      {"supplementaryDamageHitRate": "0|84%"}, // 37
      {"supplementaryDamageHitRate": "0|86%"}, // 38
      {"supplementaryDamageHitRate": "0|88%"}, // 39
      {"supplementaryDamageHitRate": "0|90%"}, // 40
      {"supplementaryDamageHitRate": "0|92%"}, // 41
      {"supplementaryDamageHitRate": "0|94%"}, // 42
      {"supplementaryDamageHitRate": "0|96%"}, // 43
      {"supplementaryDamageHitRate": "0|98%"}, // 44
      {"supplementaryDamageHitRate": "0|100%"}, // 45
    ]
  },
  "powerHungry": {
    // 修羅 
    "minLevel": 1,
    "maxLevel": 30,
    "levels": [
      {"sacrificeHealth": "0|50%", "attackPower": "0|1%"}, // 1
      {"sacrificeHealth": "0|50%", "attackPower": "0|2%"}, // 2
      {"sacrificeHealth": "0|50%", "attackPower": "0|3%"}, // 3
      {"sacrificeHealth": "0|50%", "attackPower": "0|4%"}, // 4
      {"sacrificeHealth": "0|50%", "attackPower": "0|5%"}, // 5
      {"sacrificeHealth": "0|50%", "attackPower": "0|6%"}, // 6
      {"sacrificeHealth": "0|50%", "attackPower": "0|7%"}, // 7
      {"sacrificeHealth": "0|50%", "attackPower": "0|8%"}, // 8
      {"sacrificeHealth": "0|50%", "attackPower": "0|9%"}, // 9
      {"sacrificeHealth": "0|50%", "attackPower": "0|10%"}, // 10
      {"sacrificeHealth": "0|50%", "attackPower": "0|11%"}, // 11
      {"sacrificeHealth": "0|50%", "attackPower": "0|12%"}, // 12
      {"sacrificeHealth": "0|50%", "attackPower": "0|13%"}, // 13
      {"sacrificeHealth": "0|50%", "attackPower": "0|14%"}, // 14
      {"sacrificeHealth": "0|50%", "attackPower": "0|15%"}, // 15
      {"sacrificeHealth": "0|50%", "attackPower": "0|16%"}, // 16
      {"sacrificeHealth": "0|50%", "attackPower": "0|17%"}, // 17
      {"sacrificeHealth": "0|50%", "attackPower": "0|18%"}, // 18
      {"sacrificeHealth": "0|50%", "attackPower": "0|19%"}, // 19
      {"sacrificeHealth": "0|50%", "attackPower": "0|20%"}, // 20
      {"sacrificeHealth": "0|50%", "attackPower": "0|21%"}, // 21
      {"sacrificeHealth": "0|50%", "attackPower": "0|22%"}, // 22
      {"sacrificeHealth": "0|50%", "attackPower": "0|23%"}, // 23
      {"sacrificeHealth": "0|50%", "attackPower": "0|24%"}, // 24
      {"sacrificeHealth": "0|50%", "attackPower": "0|25%"}, // 25
      {"sacrificeHealth": "0|50%", "attackPower": "0|26%"}, // 26
      {"sacrificeHealth": "0|50%", "attackPower": "0|27%"}, // 27
      {"sacrificeHealth": "0|50%", "attackPower": "0|28%"}, // 28
      {"sacrificeHealth": "0|50%", "attackPower": "0|29%"}, // 29
      {"sacrificeHealth": "0|50%", "attackPower": "0|30%"}, // 30
    ]
  },
  "berserker": {
    // 窮鼠 
    "minLevel": 1,
    "maxLevel": 30,
    "levels": [
      {"attackPower": "0|36%", "cannotGuard": '1|0%', "cannotDodge": '1|0%'}, // 1
      {"attackPower": "0|37%", "cannotGuard": '1|0%', "cannotDodge": '1|0%'}, // 2
      {"attackPower": "0|38%", "cannotGuard": '1|0%', "cannotDodge": '1|0%'}, // 3
      {"attackPower": "0|39%", "cannotGuard": '1|0%', "cannotDodge": '1|0%'}, // 4
      {"attackPower": "0|40%", "cannotGuard": '1|0%', "cannotDodge": '1|0%'}, // 5
      {"attackPower": "0|41%", "cannotGuard": '1|0%', "cannotDodge": '1|0%'}, // 6
      {"attackPower": "0|42%", "cannotGuard": '1|0%', "cannotDodge": '1|0%'}, // 7
      {"attackPower": "0|43%", "cannotGuard": '1|0%', "cannotDodge": '1|0%'}, // 8
      {"attackPower": "0|44%", "cannotGuard": '1|0%', "cannotDodge": '1|0%'}, // 9
      {"attackPower": "0|45%", "cannotGuard": '1|0%', "cannotDodge": '1|0%'}, // 10
      {"attackPower": "0|46%", "cannotGuard": '1|0%', "cannotDodge": '1|0%'}, // 11
      {"attackPower": "0|47%", "cannotGuard": '1|0%', "cannotDodge": '1|0%'}, // 12
      {"attackPower": "0|48%", "cannotGuard": '1|0%', "cannotDodge": '1|0%'}, // 13
      {"attackPower": "0|49%", "cannotGuard": '1|0%', "cannotDodge": '1|0%'}, // 14
      {"attackPower": "0|50%", "cannotGuard": '1|0%', "cannotDodge": '1|0%'}, // 15
      {"attackPower": "0|52%", "cannotGuard": '1|0%', "cannotDodge": '1|0%'}, // 16
      {"attackPower": "0|54%", "cannotGuard": '1|0%', "cannotDodge": '1|0%'}, // 17
      {"attackPower": "0|56%", "cannotGuard": '1|0%', "cannotDodge": '1|0%'}, // 18
      {"attackPower": "0|58%", "cannotGuard": '1|0%', "cannotDodge": '1|0%'}, // 19
      {"attackPower": "0|60%", "cannotGuard": '1|0%', "cannotDodge": '1|0%'}, // 20
      {"attackPower": "0|62%", "cannotGuard": '1|0%', "cannotDodge": '1|0%'}, // 21
      {"attackPower": "0|64%", "cannotGuard": '1|0%', "cannotDodge": '1|0%'}, // 22
      {"attackPower": "0|66%", "cannotGuard": '1|0%', "cannotDodge": '1|0%'}, // 23
      {"attackPower": "0|68%", "cannotGuard": '1|0%', "cannotDodge": '1|0%'}, // 24
      {"attackPower": "0|70%", "cannotGuard": '1|0%', "cannotDodge": '1|0%'}, // 25
      {"attackPower": "0|72%", "cannotGuard": '1|0%', "cannotDodge": '1|0%'}, // 26
      {"attackPower": "0|74%", "cannotGuard": '1|0%', "cannotDodge": '1|0%'}, // 27
      {"attackPower": "0|76%", "cannotGuard": '1|0%', "cannotDodge": '1|0%'}, // 28
      {"attackPower": "0|78%", "cannotGuard": '1|0%', "cannotDodge": '1|0%'}, // 29
      {"attackPower": "0|80%", "cannotGuard": '1|0%', "cannotDodge": '1|0%'}, // 30
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
    "maxLevel": 30,
    "levels": [
      {"sandtombDuration": "0|-10%"}, // 1
      {"sandtombDuration": "0|-16%"}, // 2
      {"sandtombDuration": "0|-22%"}, // 3
      {"sandtombDuration": "0|-27%"}, // 4
      {"sandtombDuration": "0|-31%"}, // 5
      {"sandtombDuration": "0|-35%"}, // 6
      {"sandtombDuration": "0|-39%"}, // 7
      {"sandtombDuration": "0|-42%"}, // 8
      {"sandtombDuration": "0|-46%"}, // 9
      {"sandtombDuration": "0|-50%"}, // 10
      {"sandtombDuration": "0|-54%"}, // 11
      {"sandtombDuration": "0|-58%"}, // 12
      {"sandtombDuration": "0|-62%"}, // 13
      {"sandtombDuration": "0|-66%"}, // 14
      {"sandtombDuration": "0|-70%"}, // 15
      {"sandtombDuration": "0|-72%"}, // 16
      {"sandtombDuration": "0|-74%"}, // 17
      {"sandtombDuration": "0|-76%"}, // 18
      {"sandtombDuration": "0|-78%"}, // 19
      {"sandtombDuration": "0|-80%"}, // 20
      {"sandtombDuration": "0|-82%"}, // 21
      {"sandtombDuration": "0|-84%"}, // 22
      {"sandtombDuration": "0|-86%"}, // 23
      {"sandtombDuration": "0|-88%"}, // 24
      {"sandtombDuration": "0|-90%"}, // 25
      {"sandtombDuration": "0|-92%"}, // 26
      {"sandtombDuration": "0|-94%"}, // 27
      {"sandtombDuration": "0|-96%"}, // 28
      {"sandtombDuration": "0|-98%"}, // 29
      {"sandtombDuration": "0|-100%"}, // 30
    ]
  },
  "dizzyResistance": {
    // 気絶耐性 
    "minLevel": 1,
    "maxLevel": 30,
    "levels": [
      {"dizzyDuration": "0|-10%"}, // 1
      {"dizzyDuration": "0|-16%"}, // 2
      {"dizzyDuration": "0|-22%"}, // 3
      {"dizzyDuration": "0|-27%"}, // 4
      {"dizzyDuration": "0|-31%"}, // 5
      {"dizzyDuration": "0|-35%"}, // 6
      {"dizzyDuration": "0|-39%"}, // 7
      {"dizzyDuration": "0|-42%"}, // 8
      {"dizzyDuration": "0|-46%"}, // 9
      {"dizzyDuration": "0|-50%"}, // 10
      {"dizzyDuration": "0|-54%"}, // 11
      {"dizzyDuration": "0|-58%"}, // 12
      {"dizzyDuration": "0|-62%"}, // 13
      {"dizzyDuration": "0|-66%"}, // 14
      {"dizzyDuration": "0|-70%"}, // 15
      {"dizzyDuration": "0|-72%"}, // 16
      {"dizzyDuration": "0|-74%"}, // 17
      {"dizzyDuration": "0|-76%"}, // 18
      {"dizzyDuration": "0|-78%"}, // 19
      {"dizzyDuration": "0|-80%"}, // 20
      {"dizzyDuration": "0|-82%"}, // 21
      {"dizzyDuration": "0|-84%"}, // 22
      {"dizzyDuration": "0|-86%"}, // 23
      {"dizzyDuration": "0|-88%"}, // 24
      {"dizzyDuration": "0|-90%"}, // 25
      {"dizzyDuration": "0|-92%"}, // 26
      {"dizzyDuration": "0|-94%"}, // 27
      {"dizzyDuration": "0|-96%"}, // 28
      {"dizzyDuration": "0|-98%"}, // 29
      {"dizzyDuration": "0|-100%"}, // 30
    ]
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
    "maxLevel": 30,
    "levels": [
      {"slowDuration": "0|-10%"}, // 1
      {"slowDuration": "0|-16%"}, // 2
      {"slowDuration": "0|-22%"}, // 3
      {"slowDuration": "0|-27%"}, // 4
      {"slowDuration": "0|-31%"}, // 5
      {"slowDuration": "0|-35%"}, // 6
      {"slowDuration": "0|-39%"}, // 7
      {"slowDuration": "0|-42%"}, // 8
      {"slowDuration": "0|-46%"}, // 9
      {"slowDuration": "0|-50%"}, // 10
      {"slowDuration": "0|-54%"}, // 11
      {"slowDuration": "0|-58%"}, // 12
      {"slowDuration": "0|-62%"}, // 13
      {"slowDuration": "0|-66%"}, // 14
      {"slowDuration": "0|-70%"}, // 15
      {"slowDuration": "0|-72%"}, // 16
      {"slowDuration": "0|-74%"}, // 17
      {"slowDuration": "0|-76%"}, // 18
      {"slowDuration": "0|-78%"}, // 19
      {"slowDuration": "0|-80%"}, // 20
      {"slowDuration": "0|-82%"}, // 21
      {"slowDuration": "0|-84%"}, // 22
      {"slowDuration": "0|-86%"}, // 23
      {"slowDuration": "0|-88%"}, // 24
      {"slowDuration": "0|-90%"}, // 25
      {"slowDuration": "0|-92%"}, // 26
      {"slowDuration": "0|-94%"}, // 27
      {"slowDuration": "0|-96%"}, // 28
      {"slowDuration": "0|-98%"}, // 29
      {"slowDuration": "0|-100%"}, // 30
    ]
  },
  "burnResistance": {
    // 灼熱耐性 
    "minLevel": 1,
    "maxLevel": 30,
    "levels": [
      {"burnDamageTaken": "0|-10%"}, // 1
      {"burnDamageTaken": "0|-16%"}, // 2
      {"burnDamageTaken": "0|-22%"}, // 3
      {"burnDamageTaken": "0|-27%"}, // 4
      {"burnDamageTaken": "0|-31%"}, // 5
      {"burnDamageTaken": "0|-35%"}, // 6
      {"burnDamageTaken": "0|-39%"}, // 7
      {"burnDamageTaken": "0|-42%"}, // 8
      {"burnDamageTaken": "0|-46%"}, // 9
      {"burnDamageTaken": "0|-50%"}, // 10
      {"burnDamageTaken": "0|-54%"}, // 11
      {"burnDamageTaken": "0|-58%"}, // 12
      {"burnDamageTaken": "0|-62%"}, // 13
      {"burnDamageTaken": "0|-66%"}, // 14
      {"burnDamageTaken": "0|-70%"}, // 15
      {"burnDamageTaken": "0|-72%"}, // 16
      {"burnDamageTaken": "0|-74%"}, // 17
      {"burnDamageTaken": "0|-76%"}, // 18
      {"burnDamageTaken": "0|-78%"}, // 19
      {"burnDamageTaken": "0|-80%"}, // 20
      {"burnDamageTaken": "0|-82%"}, // 21
      {"burnDamageTaken": "0|-84%"}, // 22
      {"burnDamageTaken": "0|-86%"}, // 23
      {"burnDamageTaken": "0|-88%"}, // 24
      {"burnDamageTaken": "0|-90%"}, // 25
      {"burnDamageTaken": "0|-92%"}, // 26
      {"burnDamageTaken": "0|-94%"}, // 27
      {"burnDamageTaken": "0|-96%"}, // 28
      {"burnDamageTaken": "0|-98%"}, // 29
      {"burnDamageTaken": "0|-100%"}, // 30
    ]
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
    "maxLevel": 30,
    "levels": [
      {"blightDamageTaken": "0|-10%"}, // 1
      {"blightDamageTaken": "0|-16%"}, // 2
      {"blightDamageTaken": "0|-22%"}, // 3
      {"blightDamageTaken": "0|-27%"}, // 4
      {"blightDamageTaken": "0|-31%"}, // 5
      {"blightDamageTaken": "0|-35%"}, // 6
      {"blightDamageTaken": "0|-39%"}, // 7
      {"blightDamageTaken": "0|-42%"}, // 8
      {"blightDamageTaken": "0|-46%"}, // 9
      {"blightDamageTaken": "0|-50%"}, // 10
      {"blightDamageTaken": "0|-54%"}, // 11
      {"blightDamageTaken": "0|-58%"}, // 12
      {"blightDamageTaken": "0|-62%"}, // 13
      {"blightDamageTaken": "0|-66%"}, // 14
      {"blightDamageTaken": "0|-70%"}, // 15
      {"blightDamageTaken": "0|-72%"}, // 16
      {"blightDamageTaken": "0|-74%"}, // 17
      {"blightDamageTaken": "0|-76%"}, // 18
      {"blightDamageTaken": "0|-78%"}, // 19
      {"blightDamageTaken": "0|-80%"}, // 20
      {"blightDamageTaken": "0|-82%"}, // 21
      {"blightDamageTaken": "0|-84%"}, // 22
      {"blightDamageTaken": "0|-86%"}, // 23
      {"blightDamageTaken": "0|-88%"}, // 24
      {"blightDamageTaken": "0|-90%"}, // 25
      {"blightDamageTaken": "0|-92%"}, // 26
      {"blightDamageTaken": "0|-94%"}, // 27
      {"blightDamageTaken": "0|-96%"}, // 28
      {"blightDamageTaken": "0|-98%"}, // 29
      {"blightDamageTaken": "0|-100%"}, // 30
    ]
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
    "maxLevel": 30,
    "levels": [
      {"paralysisDuration": "0|-10%"}, // 1
      {"paralysisDuration": "0|-16%"}, // 2
      {"paralysisDuration": "0|-22%"}, // 3
      {"paralysisDuration": "0|-27%"}, // 4
      {"paralysisDuration": "0|-31%"}, // 5
      {"paralysisDuration": "0|-35%"}, // 6
      {"paralysisDuration": "0|-39%"}, // 7
      {"paralysisDuration": "0|-42%"}, // 8
      {"paralysisDuration": "0|-46%"}, // 9
      {"paralysisDuration": "0|-50%"}, // 10
      {"paralysisDuration": "0|-54%"}, // 11
      {"paralysisDuration": "0|-58%"}, // 12
      {"paralysisDuration": "0|-62%"}, // 13
      {"paralysisDuration": "0|-66%"}, // 14
      {"paralysisDuration": "0|-70%"}, // 15
      {"paralysisDuration": "0|-72%"}, // 16
      {"paralysisDuration": "0|-74%"}, // 17
      {"paralysisDuration": "0|-76%"}, // 18
      {"paralysisDuration": "0|-78%"}, // 19
      {"paralysisDuration": "0|-80%"}, // 20
      {"paralysisDuration": "0|-82%"}, // 21
      {"paralysisDuration": "0|-84%"}, // 22
      {"paralysisDuration": "0|-86%"}, // 23
      {"paralysisDuration": "0|-88%"}, // 24
      {"paralysisDuration": "0|-90%"}, // 25
      {"paralysisDuration": "0|-92%"}, // 26
      {"paralysisDuration": "0|-94%"}, // 27
      {"paralysisDuration": "0|-96%"}, // 28
      {"paralysisDuration": "0|-98%"}, // 29
      {"paralysisDuration": "0|-100%"}, // 30
    ]
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
    "minLevel": 15,
    "maxLevel": 15,
    "levels": [
      {"attackPower": "0|-50%", "alwaysBePerfectDodge": "1|0%"}, // 15
    ]
  },
  "skillSealedResistance": {
    // アビリティ封印耐性 
    "minLevel": 1,
    "maxLevel": 30,
    "levels": [
      {"skillSealedDuration": "0|-10%"}, // 1
      {"skillSealedDuration": "0|-16%"}, // 2
      {"skillSealedDuration": "0|-22%"}, // 3
      {"skillSealedDuration": "0|-27%"}, // 4
      {"skillSealedDuration": "0|-31%"}, // 5
      {"skillSealedDuration": "0|-35%"}, // 6
      {"skillSealedDuration": "0|-39%"}, // 7
      {"skillSealedDuration": "0|-42%"}, // 8
      {"skillSealedDuration": "0|-46%"}, // 9
      {"skillSealedDuration": "0|-50%"}, // 10
      {"skillSealedDuration": "0|-54%"}, // 11
      {"skillSealedDuration": "0|-58%"}, // 12
      {"skillSealedDuration": "0|-62%"}, // 13
      {"skillSealedDuration": "0|-66%"}, // 14
      {"skillSealedDuration": "0|-70%"}, // 15
      {"skillSealedDuration": "0|-72%"}, // 16
      {"skillSealedDuration": "0|-74%"}, // 17
      {"skillSealedDuration": "0|-76%"}, // 18
      {"skillSealedDuration": "0|-78%"}, // 19
      {"skillSealedDuration": "0|-80%"}, // 20
      {"skillSealedDuration": "0|-82%"}, // 21
      {"skillSealedDuration": "0|-84%"}, // 22
      {"skillSealedDuration": "0|-86%"}, // 23
      {"skillSealedDuration": "0|-88%"}, // 24
      {"skillSealedDuration": "0|-90%"}, // 25
      {"skillSealedDuration": "0|-92%"}, // 26
      {"skillSealedDuration": "0|-94%"}, // 27
      {"skillSealedDuration": "0|-96%"}, // 28
      {"skillSealedDuration": "0|-98%"}, // 29
      {"skillSealedDuration": "0|-100%"}, // 30
    ]
  },
  "darkflameResistance": {
    // レジストオルタ 
    "minLevel": 1,
    "maxLevel": 30,
    "levels": [
      {"darkflameDuration": "0|-10%"}, // 1
      {"darkflameDuration": "0|-16%"}, // 2
      {"darkflameDuration": "0|-22%"}, // 3
      {"darkflameDuration": "0|-27%"}, // 4
      {"darkflameDuration": "0|-31%"}, // 5
      {"darkflameDuration": "0|-35%"}, // 6
      {"darkflameDuration": "0|-39%"}, // 7
      {"darkflameDuration": "0|-42%"}, // 8
      {"darkflameDuration": "0|-46%"}, // 9
      {"darkflameDuration": "0|-50%"}, // 10
      {"darkflameDuration": "0|-54%"}, // 11
      {"darkflameDuration": "0|-58%"}, // 12
      {"darkflameDuration": "0|-62%"}, // 13
      {"darkflameDuration": "0|-66%"}, // 14
      {"darkflameDuration": "0|-70%"}, // 15
      {"darkflameDuration": "0|-72%"}, // 16
      {"darkflameDuration": "0|-74%"}, // 17
      {"darkflameDuration": "0|-76%"}, // 18
      {"darkflameDuration": "0|-78%"}, // 19
      {"darkflameDuration": "0|-80%"}, // 20
      {"darkflameDuration": "0|-82%"}, // 21
      {"darkflameDuration": "0|-84%"}, // 22
      {"darkflameDuration": "0|-86%"}, // 23
      {"darkflameDuration": "0|-88%"}, // 24
      {"darkflameDuration": "0|-90%"}, // 25
      {"darkflameDuration": "0|-92%"}, // 26
      {"darkflameDuration": "0|-94%"}, // 27
      {"darkflameDuration": "0|-96%"}, // 28
      {"darkflameDuration": "0|-98%"}, // 29
      {"darkflameDuration": "0|-100%"}, // 30
    ]
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
    "levels": [
      {"gutsCooldown": "600|0%"}, // 1
      {"gutsCooldown": "550|0%"}, // 2
      {"gutsCooldown": "500|0%"}, // 3
      {"gutsCooldown": "450|0%"}, // 4
      {"gutsCooldown": "400|0%"}, // 5
      {"gutsCooldown": "350|0%"}, // 6
      {"gutsCooldown": "300|0%"}, // 7
      {"gutsCooldown": "280|0%"}, // 8
      {"gutsCooldown": "260|0%"}, // 9
      {"gutsCooldown": "240|0%"}, // 10
      {"gutsCooldown": "220|0%"}, // 11
      {"gutsCooldown": "200|0%"}, // 12
      {"gutsCooldown": "190|0%"}, // 13
      {"gutsCooldown": "180|0%"}, // 14
      {"gutsCooldown": "170|0%"}, // 15
      {"gutsCooldown": "160|0%"}, // 16
      {"gutsCooldown": "150|0%"}, // 17
      {"gutsCooldown": "140|0%"}, // 18
      {"gutsCooldown": "130|0%"}, // 19
      {"gutsCooldown": "120|0%"}, // 20
    ]
  },
  "rupieTycoon": {
    // 取得ルピ 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": [
      {"rupieTycoon": "0|2%"}, // 1
      {"rupieTycoon": "0|4%"}, // 2
      {"rupieTycoon": "0|6%"}, // 3
      {"rupieTycoon": "0|8%"}, // 4
      {"rupieTycoon": "0|10%"}, // 5
      {"rupieTycoon": "0|12%"}, // 6
      {"rupieTycoon": "0|14%"}, // 7
      {"rupieTycoon": "0|16%"}, // 8
      {"rupieTycoon": "0|18%"}, // 9
      {"rupieTycoon": "0|20%"}, // 10
      {"rupieTycoon": "0|22%"}, // 11
      {"rupieTycoon": "0|24%"}, // 12
      {"rupieTycoon": "0|26%"}, // 13
      {"rupieTycoon": "0|28%"}, // 14
      {"rupieTycoon": "0|30%"}, // 15
      {"rupieTycoon": "0|31%"}, // 16
      {"rupieTycoon": "0|32%"}, // 17
      {"rupieTycoon": "0|33%"}, // 18
      {"rupieTycoon": "0|34%"}, // 19
      {"rupieTycoon": "0|35%"}, // 20
      {"rupieTycoon": "0|36%"}, // 21
      {"rupieTycoon": "0|37%"}, // 22
      {"rupieTycoon": "0|38%"}, // 23
      {"rupieTycoon": "0|39%"}, // 24
      {"rupieTycoon": "0|40%"}, // 25
      {"rupieTycoon": "0|41%"}, // 26
      {"rupieTycoon": "0|42%"}, // 27
      {"rupieTycoon": "0|43%"}, // 28
      {"rupieTycoon": "0|44%"}, // 29
      {"rupieTycoon": "0|45%"}, // 30
      {"rupieTycoon": "0|46%"}, // 31
      {"rupieTycoon": "0|47%"}, // 32
      {"rupieTycoon": "0|48%"}, // 33
      {"rupieTycoon": "0|49%"}, // 34
      {"rupieTycoon": "0|50%"}, // 35
      {"rupieTycoon": "0|51%"}, // 36
      {"rupieTycoon": "0|52%"}, // 37
      {"rupieTycoon": "0|53%"}, // 38
      {"rupieTycoon": "0|54%"}, // 39
      {"rupieTycoon": "0|55%"}, // 40
      {"rupieTycoon": "0|56%"}, // 41
      {"rupieTycoon": "0|57%"}, // 42
      {"rupieTycoon": "0|58%"}, // 43
      {"rupieTycoon": "0|59%"}, // 44
      {"rupieTycoon": "0|60%"}, // 45
    ]
  },
  "lowProfile": {
    // ステルス 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": [
      {"provoke": "-3|0%"}, // 1
      {"provoke": "-5|0%"}, // 2
      {"provoke": "-7|0%"}, // 3
      {"provoke": "-10|0%"}, // 4
      {"provoke": "-13|0%"}, // 5
      {"provoke": "-15|0%"}, // 6
      {"provoke": "-17|0%"}, // 7
      {"provoke": "-20|0%"}, // 8
      {"provoke": "-23|0%"}, // 9
      {"provoke": "-25|0%"}, // 10
      {"provoke": "-27|0%"}, // 11
      {"provoke": "-30|0%"}, // 12
      {"provoke": "-33|0%"}, // 13
      {"provoke": "-35|0%"}, // 14
      {"provoke": "-37|0%"}, // 15
      {"provoke": "-40|0%"}, // 16
      {"provoke": "-43|0%"}, // 17
      {"provoke": "-45|0%"}, // 18
      {"provoke": "-47|0%"}, // 19
      {"provoke": "-50|0%"}, // 20
    ]
  },
  "fastLearner": {
    // 取得経験値 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": [
      {"fastLearner": "0|2%"}, // 1
      {"fastLearner": "0|3%"}, // 2
      {"fastLearner": "0|4%"}, // 3
      {"fastLearner": "0|5%"}, // 4
      {"fastLearner": "0|6%"}, // 5
      {"fastLearner": "0|7%"}, // 6
      {"fastLearner": "0|8%"}, // 7
      {"fastLearner": "0|10%"}, // 8
      {"fastLearner": "0|10.5%"}, // 9
      {"fastLearner": "0|11%"}, // 10
      {"fastLearner": "0|12%"}, // 11
      {"fastLearner": "0|12.5%"}, // 12
      {"fastLearner": "0|13%"}, // 13
      {"fastLearner": "0|13.5%"}, // 14
      {"fastLearner": "0|15%"}, // 15
      {"fastLearner": "0|15.5%"}, // 16
      {"fastLearner": "0|16%"}, // 17
      {"fastLearner": "0|16.5%"}, // 18
      {"fastLearner": "0|17%"}, // 19
      {"fastLearner": "0|17.5%"}, // 20
      {"fastLearner": "0|18%"}, // 21
      {"fastLearner": "0|18.5%"}, // 22
      {"fastLearner": "0|19%"}, // 23
      {"fastLearner": "0|19.5%"}, // 24
      {"fastLearner": "0|20%"}, // 25
      {"fastLearner": "0|20.5%"}, // 26
      {"fastLearner": "0|21%"}, // 27
      {"fastLearner": "0|21.5%"}, // 28
      {"fastLearner": "0|22%"}, // 29
      {"fastLearner": "0|22.5%"}, // 30
      {"fastLearner": "0|23%"}, // 31
      {"fastLearner": "0|23.5%"}, // 32
      {"fastLearner": "0|24%"}, // 33
      {"fastLearner": "0|24.5%"}, // 34
      {"fastLearner": "0|25%"}, // 35
      {"fastLearner": "0|25.5%"}, // 36
      {"fastLearner": "0|26%"}, // 37
      {"fastLearner": "0|26.5%"}, // 38
      {"fastLearner": "0|27%"}, // 39
      {"fastLearner": "0|27.5%"}, // 40
      {"fastLearner": "0|28%"}, // 41
      {"fastLearner": "0|28.5%"}, // 42
      {"fastLearner": "0|29%"}, // 43
      {"fastLearner": "0|29.5%"}, // 44
      {"fastLearner": "0|30%"}, // 45
    ]
  },
  "potionHoarder": {
    // ポーション所持数 
    "minLevel": 1,
    "maxLevel": 15,
    "levels": [
      {"greenPotion": "0|0%", "bluePotion": "1|0%", "megaPotion": "0|0%", "revivalPotion": "0|0%"}, // 1
      {"greenPotion": "0|0%", "bluePotion": "1|0%", "megaPotion": "1|0%", "revivalPotion": "0|0%"}, // 2
      {"greenPotion": "1|0%", "bluePotion": "1|0%", "megaPotion": "1|0%", "revivalPotion": "0|0%"}, // 3
      {"greenPotion": "1|0%", "bluePotion": "2|0%", "megaPotion": "1|0%", "revivalPotion": "0|0%"}, // 4
      {"greenPotion": "1|0%", "bluePotion": "2|0%", "megaPotion": "2|0%", "revivalPotion": "0|0%"}, // 5
      {"greenPotion": "1|0%", "bluePotion": "2|0%", "megaPotion": "2|0%", "revivalPotion": "1|0%"}, // 6
      {"greenPotion": "2|0%", "bluePotion": "2|0%", "megaPotion": "2|0%", "revivalPotion": "1|0%"}, // 7
      {"greenPotion": "2|0%", "bluePotion": "3|0%", "megaPotion": "2|0%", "revivalPotion": "1|0%"}, // 8
      {"greenPotion": "2|0%", "bluePotion": "3|0%", "megaPotion": "3|0%", "revivalPotion": "1|0%"}, // 9
      {"greenPotion": "2|0%", "bluePotion": "4|0%", "megaPotion": "3|0%", "revivalPotion": "1|0%"}, // 10
      {"greenPotion": "2|0%", "bluePotion": "4|0%", "megaPotion": "4|0%", "revivalPotion": "1|0%"}, // 11
      {"greenPotion": "2|0%", "bluePotion": "5|0%", "megaPotion": "4|0%", "revivalPotion": "1|0%"}, // 12
      {"greenPotion": "2|0%", "bluePotion": "5|0%", "megaPotion": "5|0%", "revivalPotion": "1|0%"}, // 13
      {"greenPotion": "3|0%", "bluePotion": "5|0%", "megaPotion": "5|0%", "revivalPotion": "1|0%"}, // 14
      {"greenPotion": "3|0%", "bluePotion": "5|0%", "megaPotion": "5|0%", "revivalPotion": "2|0%"}, // 15
    ]
  },
  "provoke": {
    // 挑発 
    "minLevel": 1,
    "maxLevel": 20,
    "levels": [
      {"provoke": "3|0%"}, // 1
      {"provoke": "5|0%"}, // 2
      {"provoke": "7|0%"}, // 3
      {"provoke": "10|0%"}, // 4
      {"provoke": "13|0%"}, // 5
      {"provoke": "15|0%"}, // 6
      {"provoke": "17|0%"}, // 7
      {"provoke": "20|0%"}, // 8
      {"provoke": "23|0%"}, // 9
      {"provoke": "25|0%"}, // 10
      {"provoke": "27|0%"}, // 11
      {"provoke": "30|0%"}, // 12
      {"provoke": "33|0%"}, // 13
      {"provoke": "35|0%"}, // 14
      {"provoke": "37|0%"}, // 15
      {"provoke": "40|0%"}, // 16
      {"provoke": "43|0%"}, // 17
      {"provoke": "45|0%"}, // 18
      {"provoke": "47|0%"}, // 19
      {"provoke": "50|0%"}, // 20
    ]
  },
  "steadyFocus": {
    // チャージ強化 
    "minLevel": 1,
    "maxLevel": 15,
    "levels": [
      {"defence": "0|6%|isCharging", "stoutHeart": "1|0%|isCharging"}, // 1
      {"defence": "0|7%|isCharging", "stoutHeart": "1|0%|isCharging"}, // 2
      {"defence": "0|8%|isCharging", "stoutHeart": "1|0%|isCharging"}, // 3
      {"defence": "0|9%|isCharging", "stoutHeart": "1|0%|isCharging"}, // 4
      {"defence": "0|10%|isCharging", "stoutHeart": "1|0%|isCharging"}, // 5
      {"defence": "0|11%|isCharging", "stoutHeart": "1|0%|isCharging"}, // 6
      {"defence": "0|12%|isCharging", "stoutHeart": "1|0%|isCharging"}, // 7
      {"defence": "0|13%|isCharging", "stoutHeart": "1|0%|isCharging"}, // 8
      {"defence": "0|14%|isCharging", "stoutHeart": "1|0%|isCharging"}, // 9
      {"defence": "0|15%|isCharging", "stoutHeart": "1|0%|isCharging"}, // 10
      {"defence": "0|16%|isCharging", "stoutHeart": "1|0%|isCharging"}, // 11
      {"defence": "0|17%|isCharging", "stoutHeart": "1|0%|isCharging"}, // 12
      {"defence": "0|18%|isCharging", "stoutHeart": "1|0%|isCharging"}, // 13
      {"defence": "0|19%|isCharging", "stoutHeart": "1|0%|isCharging"}, // 14
      {"defence": "0|20%|isCharging", "stoutHeart": "1|0%|isCharging"}, // 15
    ]
  },
  "autorevive": {
    // 自動復活 
    "minLevel": 1,
    "maxLevel": 20,
    "levels": [
      {"autoreviveCooldown": "600|0%"}, // 1
      {"autoreviveCooldown": "550|0%"}, // 2
      {"autoreviveCooldown": "500|0%"}, // 3
      {"autoreviveCooldown": "450|0%"}, // 4
      {"autoreviveCooldown": "400|0%"}, // 5
      {"autoreviveCooldown": "350|0%"}, // 6
      {"autoreviveCooldown": "300|0%"}, // 7
      {"autoreviveCooldown": "280|0%"}, // 8
      {"autoreviveCooldown": "260|0%"}, // 9
      {"autoreviveCooldown": "240|0%"}, // 10
      {"autoreviveCooldown": "220|0%"}, // 11
      {"autoreviveCooldown": "200|0%"}, // 12
      {"autoreviveCooldown": "190|0%"}, // 13
      {"autoreviveCooldown": "180|0%"}, // 14
      {"autoreviveCooldown": "170|0%"}, // 15
      {"autoreviveCooldown": "160|0%"}, // 16
      {"autoreviveCooldown": "150|0%"}, // 17
      {"autoreviveCooldown": "140|0%"}, // 18
      {"autoreviveCooldown": "130|0%"}, // 19
      {"autoreviveCooldown": "120|0%"}, // 20
    ]
  },
  "pathToMastery": {
    // 取得MSP 
    "minLevel": 1,
    "maxLevel": 45,
    "levels": [
      {"pathToMastery": "0|2%"}, // 1
      {"pathToMastery": "0|3%"}, // 2
      {"pathToMastery": "0|4%"}, // 3
      {"pathToMastery": "0|5%"}, // 4
      {"pathToMastery": "0|6%"}, // 5
      {"pathToMastery": "0|7%"}, // 6
      {"pathToMastery": "0|8%"}, // 7
      {"pathToMastery": "0|10%"}, // 8
      {"pathToMastery": "0|10.5%"}, // 9
      {"pathToMastery": "0|11%"}, // 10
      {"pathToMastery": "0|12%"}, // 11
      {"pathToMastery": "0|12.5%"}, // 12
      {"pathToMastery": "0|13%"}, // 13
      {"pathToMastery": "0|13.5%"}, // 14
      {"pathToMastery": "0|15%"}, // 15
      {"pathToMastery": "0|15.5%"}, // 16
      {"pathToMastery": "0|16%"}, // 17
      {"pathToMastery": "0|16.5%"}, // 18
      {"pathToMastery": "0|17%"}, // 19
      {"pathToMastery": "0|17.5%"}, // 20
      {"pathToMastery": "0|18%"}, // 21
      {"pathToMastery": "0|18.5%"}, // 22
      {"pathToMastery": "0|19%"}, // 23
      {"pathToMastery": "0|19.5%"}, // 24
      {"pathToMastery": "0|20%"}, // 25
      {"pathToMastery": "0|20.5%"}, // 26
      {"pathToMastery": "0|21%"}, // 27
      {"pathToMastery": "0|21.5%"}, // 28
      {"pathToMastery": "0|22%"}, // 29
      {"pathToMastery": "0|22.5%"}, // 30
      {"pathToMastery": "0|23%"}, // 31
      {"pathToMastery": "0|23.5%"}, // 32
      {"pathToMastery": "0|24%"}, // 33
      {"pathToMastery": "0|24.5%"}, // 34
      {"pathToMastery": "0|25%"}, // 35
      {"pathToMastery": "0|25.5%"}, // 36
      {"pathToMastery": "0|26%"}, // 37
      {"pathToMastery": "0|26.5%"}, // 38
      {"pathToMastery": "0|27%"}, // 39
      {"pathToMastery": "0|27.5%"}, // 40
      {"pathToMastery": "0|28%"}, // 41
      {"pathToMastery": "0|28.5%"}, // 42
      {"pathToMastery": "0|29%"}, // 43
      {"pathToMastery": "0|29.5%"}, // 44
      {"pathToMastery": "0|30%"}, // 45
    ]
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
      {"stoutHeart": '1|0%'} // 15
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
