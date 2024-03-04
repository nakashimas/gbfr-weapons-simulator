const MESSAGE_TEXT = {
  "ja": {
    "title": {
      "weapons": "武器",
      "imbueSkills": "加護スキル",
      "weaponTraits": "武器スキル",
      "mainSigilSkills": "ジーン（メイン）",
      "subSigilSkills": "ジーン（サブ）",
      "totalSkills": "スキル集計",
      "selectAll": "全て選択",
      "deselectAll": "全て選択解除",
      "playerAbilityEquipped": "アビリティ装備数",
    },
    "status": {
      "-": "-",
      "stunPower": "スタン値",
      "criticalHitRate": "クリティカル確率",
      "criticalHitRateCharged": "チャージアタックのクリティカル率",
      "supplementaryDamageHitRate": "ジーンの追撃発生確率",
      "attackPower": "攻撃力上昇",
      "tyranny": "暴君の攻撃力上昇",
      "enmity": "背水の攻撃力上昇最大値",
      "stamina": "渾身の攻撃力上昇最大値",
      "lifeOnTheLine": "捨て身の攻撃力上昇",
      "glassCannon": "紙一重の攻撃力上昇",
      "headStart": "先制の攻撃力上昇",
      "powerHungry": "修羅の攻撃力上昇",
      "berserker": "窮鼠の攻撃力上昇",
      "health": "体力",
      "sacrificeHealth": "自傷",
      "reduceDamageTaken": "被ダメージ軽減",
      "defence": "防御力",
      "damage": "与ダメージ",
      "damageWeakness": "弱点部位に対する与ダメージ",
      "damageBehind": "背後攻撃の与ダメージ",
      "damageCharged": "チャージアタックの与ダメージ",
      "damageCritical": "クリティカルの与ダメージ",
      "damageThrow": "投擲の与ダメージ",
      "damageRanged": "遠距離攻撃の与ダメージ",
      "damageSkilled": "アビリティの与ダメージ",
      "comboBooster": "派生攻撃の与ダメージ",
      "damageFinisher": "フィニッシュの与ダメージ", 
      "damageLinkedAttack": "リンクアタックの与ダメージ", 
      "damageSBA": "奥義の与ダメージ", 
      "damageChain": "CBの与ダメージ", 
      "linkLevelGain": "リンクゲージ上昇量",
      "damageCap": "ダメージ上限",
      "attackDamageCap": "通常攻撃ダメージ上限",
      "skilledDamageCap": "アビリティダメージ上限",
      "sbaDamageCap": "奥義ダメージ上限",
      "sandtombDuration": "砂だるま効果時間",
      "dizzyDuration": "気絶効果時間",
      "slowDuration": "スロウ効果時間",
      "paralysisDuration": "麻痺効果時間",
      "skillSealedDuration": "アビリティ封印効果時間",
      "darkflameDuration": "紫銀の炎効果時間",
      "attackDownDuration": "攻撃DOWN効果時間",
      "deffenceDownDuration": "防御DOWN効果時間",
      "heldUnderDuration": "水牢効果時間",
      "glaciateDuration": "氷結効果時間",
      "sbaSealedDuration": "奥義封印効果時間",
      "burnDamageTaken": "灼熱ダメージ",
      "blightDamageTaken": "災禍ダメージ",
      "poisonDamageTaken": "毒ダメージ",
      "moveRestrictionTaken": "移動制限",
      "cannotHeal": "回復不可",
      "stoutHeart": "怯み無効状態",
      "alwaysBeStuned": "必ずスタンを受ける",
      "alwaysBePerfectDodge": "必ず完全回避になる",
      "cannotGuard": "ガードできない",
      "cannotDodge": "回避できない",
      "pathToMastery": "取得MSP",
      "fastLearner": "取得経験値", 
      "rupieTycoon": "取得ルピ", 
      "potentGreens": "キュアポーション強化",
      "sigilBoost": "ジーンレベル",
      "extendsDodgeInvincibility": "ジャスト回避無敵時間延長",
      "extendsGuardStunPowoer": "ジャストガードスタン値増加",
      "autoreviveCooldown": "自動復活のクールダウン",
      "gutsCooldown": "ガッツのクールダウン",
      "chargedAttackCooldown": "チャージアタックの溜め時間",
      "provoke": "敵対心",
      "greenPotion": "キュアポーション", 
      "bluePotion": "オールポーション", 
      "megaPotion": "メガポーション", 
      "revivalPotion": "蘇生薬",
      "alwaysAttackHalf": "常に攻撃力が1/2になる",
      "alwaysDamageOne": "常にダメージが1になる", 
      "alwaysDamageDoubled": "常にダメージが2倍になる", 
      "alwaysDamageTripled": "常にダメージが3倍になる",
      "alwaysDamageQuadrupled": "常にダメージが4倍になる(ダメージ上限を無視する)",
      "lessIsMore": "アビリティなしの攻撃力",
    },
    "conditions": {
      // 敵の状態
      "isEnemyBreak": "敵がブレイク状態",
      "isEnemyOverdrive": "敵がオーバードライブ状態",
      "isEnemySandtomb": "敵が砂だるま状態",
      "isEnemyDizzy": "敵が気絶状態",
      "isEnemySlow": "敵がスロウ状態",
      "isEnemyBurn": "敵が灼熱状態",
      "isEnemyBlight": "敵が災禍状態",
      "isEnemyParalysis": "敵が麻痺状態",
      "isEnemyGlaciate": "敵が氷結状態",
      "isEnemyPoison": "敵が毒状態",
      "isEnemyHeldUnder": "敵が水牢状態",
      "isEnemyAttackDown": "敵が攻撃DOWN状態",
      "isEnemyDeffenceDown": "敵が防御DOWN状態",
      "isEnemySbaSealed": "敵が奥義封印状態",
      "isEnemySkillSealed": "敵がアビリティ封印状態",
      // プレイヤーの状態
      "isPlayerBreak": "PCがブレイク状態",
      "isPlayerOverdrive": "PCがオーバードライブ状態",
      "isPlayerSandtomb": "PCが砂だるま状態",
      "isPlayerDizzy": "PCが気絶状態",
      "isPlayerSlow": "PCがスロウ状態",
      "isPlayerBurn": "PCが灼熱状態",
      "isPlayerBlight": "PCが災禍状態",
      "isPlayerParalysis": "PCが麻痺状態",
      "isPlayerGlaciate": "PCが氷結状態",
      "isPlayerPoison": "PCが毒状態",
      "isPlayerHeldUnder": "PCが水牢状態",
      "isPlayerAttackDown": "PCが攻撃DOWN状態",
      "isPlayerDeffenceDown": "PCが防御DOWN状態",
      "isPlayerSbaSealed": "PCが奥義封印状態",
      "isPlayerSkillSealed": "PCがアビリティ封印状態",
      // その他
      "isPerfectDodgeRecently": "直近にジャスト回避",
      "isPerfectGuardRecently": "直近にジャストガード",
      "isCharging": "チャージ中",
      "isFewMinutesFromStart": "戦闘開始後3分以内",
    },
    "weapons": {
      "amenoHabakiri": "天羽々斬",
      "balmung": "バルムンク",
      "blutgang": "ブルトガング",
      "caduceus": "カドゥケウス",
      "daggerOfBahamutCoda": "バハムートダガー",
      "damascusKnife": "ダマスカスナイフ",
      "draconicFire": "ドラゴニックファイア",
      "ereshkigal": "エレシュキガル",
      "etherealLasher": "オーラフラジェルム",
      "freikugel": "フライクーゲル",
      "gaeBulg": "ゲイボルグ",
      "galatine": "ガラティーン",
      "gottfried": "ゴットフリート",
      "mjolnir": "ミョルニル",
      "sevenStarSword": "七星剣",
      "skyPiercer": "方天画戟",
      "swordfish": "太刀魚",
      "swordOfBahamut": "バハムートソード",
      "zosimos": "ゾーシモス",
    },
    "sigils": {
      "-": "-",
      // 基礎能力
      "stunPower": "スタン",
      "criticalHitRate": "クリティカル確率",
      "attackPower": "攻撃力",
      "health": "体力",
      // 攻撃
      "exploiter": "弱点攻撃",
      "comboBooster": "コンボボーナス",
      "tyranny": "暴君",
      "enmity": "背水",
      "stamina": "渾身",
      "chargedAttack": "チャージアタック",
      "dodgePayback": "回避リベンジ",
      "criticalDamage": "クリティカルダメージ",
      "overdriveAssassin": "オーバードライブ特攻",
      "injuryToInsult": "弱体状態特攻",
      "luckyCharge": "溜め会心",
      "throw": "投擲",
      "linkedTogether": "連携攻撃",
      "comboFinisher": "コンボフィニッシュ",
      "quickCharge": "クイックチャージ",
      "guardPayback": "ガードリベンジ",
      "lifeOnTheLine": "捨て身",
      "damageCap": "ダメージ上限",
      "concentratedFire": "集中砲火",
      "skilledAssault": "アビリティダメージ",
      "glassCannon": "紙一重",
      "lessIsMore": "裸一貫",
      "breakAssassin": "ブレイク特攻",
      "headStart": "先制",
      "supplementaryDamage": "追撃",
      "powerHungry": "修羅",
      "berserker": "窮鼠",
      "rollOfTheDie": "一天六地",
      // 耐久
      "sandtombResistance": "砂だるま耐性",
      "dizzyResistance": "気絶耐性",
      "improvedGuard": "ガード性能",
      "garrison": "堅守",
      "steelNerves": "ふんばり",
      "slowResistance": "スロウ耐性",
      "burnResistance": "灼熱耐性",
      "preciseResilience": "抗戦",
      "blightResistance": "災禍耐性",
      "aegis": "守護",
      "paralysisResistance": "麻痺耐性",
      "nimbleDefense": "精神一到",
      "glaciateResistance": "氷結耐性",
      "firmStance": "不動",
      "poisonResistance": "毒耐性",
      "heldUnderResistance": "水牢耐性",
      "attackDownResistance": "攻撃DOWN耐性",
      "deffenceDownResistance": "防御DOWN耐性",
      "sbaSealedResistance": "奥義封印耐性",
      "improvedDodge": "回避性能",
      "stronghold": "剛健",
      "flightOverFight": "フラジャイルドッジ",
      "skillSealedResistance": "アビリティ封印耐性",
      "darkflameResistance": "レジストオルタ",
      "untouchable": "回避距離",
      // 支援
      "uplift": "高揚",
      "quickCooldown": "クイックアビリティ",
      "nimbleOnslaught": "明鏡止水",
      "preciseWrath": "怒髪天",
      "drain": "HP吸収",
      "regen": "リジェネレーション",
      "improvedHealing": "回復性能",
      "cascade": "怒涛",
      // 特殊
      "guts": "ガッツ",
      "rupieTycoon": "取得ルピ",
      "lowProfile": "ステルス",
      "fastLearner": "取得経験値",
      "potionHoarder": "ポーション所持数",
      "provoke": "挑発",
      "steadyFocus": "チャージ強化",
      "autorevive": "自動復活",
      "pathToMastery": "取得MSP",
      "potentGreens": "万能薬",
      "stoutHeart": "怯み無効",
      "crabbyResonance": "カニの共鳴",
      "crabvestmentReturns": "カニの恩返し",
      "catastrophe": "カタストロフィ",
      "sigilBooster": "ジーン強化",
      // キャラクター専用
      "fearlessDrive": "ブレイブドライブ", 
      "fearlessSpirit": "ブレイブオーラ", 
      "guardiansConviction": "守護者の決意", 
      "guardiansHonor": "守護者の矜持", 
      "helmsmansTenacity": "操舵士の意地", 
      "helmsmansNavigation": "操舵士の導き", 
      "magesSavvy": "魔導士の機転", 
      "magesAspiration": "魔導士の願い", 
      "veteransInsight": "老兵の知恵", 
      "veteransVision": "老兵の一隻眼", 
      "rosesBlooming": "薔薇の早咲き", 
      "rosesProfusion": "薔薇の繚乱", 
      "holyKnightsGrandeur": "聖騎士の威風", 
      "holyKnightsLuster": "聖騎士の剣光", 
      "eternalRagesMettle": "古今無双の気風", 
      "eternalRagesEthos": "古今無双の腕達者", 
      "phantasmsConcord": "幽幻の絆", 
      "phantasmsHarmony": "幽幻の呼応", 
      "butterflysGrace": "斬姫の武芸", 
      "butterflysValor": "斬姫の夢幻", 
      "whiteDragonsOath": "白竜の誓い", 
      "whiteDragonsGlory": "白竜の誇り", 
      "herosCreed": "勇士の根性", 
      "herosWill": "勇士の信念", 
      "loadsProcession": "王者の一心", 
      "loadsAmbition": "王者の行進", 
      "dragonslayersDominance": "竜殺しの猛威", 
      "dragonslayersIngenuity": "竜殺しの才覚", 
      "foundersStrategy": "極致の計略", 
      "foundersTruth": "極致の真理", 
      "swordmastersProwess": "変幻自在の快刀", 
      "swordmastersArt": "変幻自在の妖剣士", 
      "crimsonsClout": "真紅の気焔", 
      "crimsonsFlight": "真紅の翔舞", 
      "ebonysPresence": "冥闇の剛刃", 
      "ebonysPoise": "冥闇の自若", 
      "versalisFoundation": "オルタナティブクロウ", 
      "versalisIgnition": "オルタナティブブレイカー", 
    }
  },
  "en": {
    "title": {
      "weapons": "Weapons",
      "imbueSkills": "Imbue Skills",
      "weaponTraits": "Weapon Traits",
      "mainSigilSkills": "Sigil Skills (Main)",
      "subSigilSkills": "Sigil Skills (Sub)",
      "totalSkills": "Total Skill Levels",
      "selectAll": "Select All",
      "deselectAll": "Deselect All",
      "playerAbilityEquipped": "Ability Equipped",
    },
    "status": {
      "-": "-",
      "stunPower": "Stun Power",
      "criticalHitRate": "Critical Hit Rate",
      "criticalHitRateCharged": "Critical Hit Rate (Charged)",
      "supplementaryDamageHitRate": "Supp-DMG Hit Rate (Attack Sigil)",
      "attackPower": "ATK (Normal)",
      "tyranny": "ATK (Tyranny)",
      "enmity": "ATK (Enmity)",
      "stamina": "ATK (Stamina)",
      "lifeOnTheLine": "ATK (Life On The Line)",
      "glassCannon": "ATK (Glass Cannon)",
      "headStart": "ATK (Head Start)",
      "powerHungry": "ATK (Power Hungry)",
      "berserker": "ATK (Berserker)",
      "health": "Health",
      "sacrificeHealth": "Health Sacrifice",
      "reduceDamageTaken": "Reduce DMG Taken",
      "defence": "Defence",
      "damage": "DMG",
      "damageWeakness": "DMG (Weakness Point)",
      "damageBehind": "DMG (Back Attack)",
      "damageCharged": "DMG (Charged Attack)",
      "damageCritical": "DMG (Critical)",
      "damageThrow": "DMG (Throw)",
      "damageRanged": "DMG (Ranged)",
      "damageSkilled": "DMG (Skilled)",
      "comboBooster": "DMG (Combo)",
      "damageFinisher": "DMG (Finisher)", 
      "damageLinkedAttack": "DMG (Linked Attack)", 
      "damageSBA": "DMG (SBA)", 
      "damageChain": "DMG (SBA Chain)", 
      "linkLevelGain": "Link Level Gain",
      "damageCap": "Damage Cap",
      "attackDamageCap": "DMG Cap (Attack)",
      "skilledDamageCap": "DMG Cap (Skilled)",
      "sbaDamageCap": "DMG Cap (SBA)",
      "sandtombDuration": "Sandtomb Time",
      "dizzyDuration": "Dizzy Time",
      "slowDuration": "Slow Time",
      "paralysisDuration": "Paralysis Time",
      "skillSealedDuration": "Skill Sealed Time",
      "darkflameDuration": "Darkflame Time",
      "attackDownDuration": "Attack Down Time",
      "deffenceDownDuration": "Deffence Down Time",
      "heldUnderDuration": "Held Under Time",
      "glaciateDuration": "Glaciate Time",
      "sbaSealedDuration": "SBA Sealed Time",
      "burnDamageTaken": "Burn DMG Taken",
      "blightDamageTaken": "Blight DMG Taken",
      "poisonDamageTaken": "Poison DMG Taken",
      "moveRestrictionTaken": "Move Rest Taken",
      "cannotHeal": "Cannot Receive Healing",
      "stoutHeart": "Stout Heart",
      "alwaysBeStuned": "Always Be Stuned",
      "alwaysBePerfectDodge": "Always P-Dodge",
      "cannotGuard": "Can't Use Guard",
      "cannotDodge": "Can't Use Dodge",
      "pathToMastery": "MSP",
      "fastLearner": "EXP", 
      "rupieTycoon": "Rupie", 
      "potentGreens": "Green Potion Boost",
      "sigilBoost": "Sigils LV Boost",
      "extendsDodgeInvincibility": "P-Dodge Invincibility",
      "extendsGuardStunPowoer": "P-Guard Stun Powoer",
      "autoreviveCooldown": "Autorevive CDR",
      "gutsCooldown": "Guts CDR",
      "chargedAttackCooldown": "Charged Attack CDR",
      "provoke": "Provoke",
      "greenPotion": "Green Potion", 
      "bluePotion": "Blue Potion", 
      "megaPotion": "Mega Potion", 
      "revivalPotion": "Revival Potion",
      "alwaysAttackHalf": "ATK Half (Always)",
      "alwaysDamageOne": "Damage One", 
      "alwaysDamageDoubled": "Damage Quadrupled", 
      "alwaysDamageTripled": "Damage Tripled",
      "alwaysDamageQuadrupled": "Damage Quadrupled (Ignore DMG Cap)",
      "lessIsMore": "ATK (No Ability Equipped)",
    },
    "conditions": {
      // 敵の状態
      "isEnemyBreak": "is Enemy Break",
      "isEnemyOverdrive": "is Enemy Overdrive",
      "isEnemySandtomb": "is Enemy Sandtomb",
      "isEnemyDizzy": "is Enemy Dizzy",
      "isEnemySlow": "is Enemy Slow",
      "isEnemyBurn": "is Enemy Burn",
      "isEnemyBlight": "is Enemy Blight",
      "isEnemyParalysis": "is Enemy Paralysis",
      "isEnemyGlaciate": "is Enemy Glaciate",
      "isEnemyPoison": "is Enemy Poison",
      "isEnemyHeldUnder": "is Enemy Heldunder",
      "isEnemyAttackDown": "is Enemy Attack Down",
      "isEnemyDeffenceDown": "is Enemy Deffence Down",
      "isEnemySbaSealed": "is Enemy SBA Sealed",
      "isEnemySkillSealed": "is Enemy Skill Sealed",
      // プレイヤーの状態
      "isPlayerBreak": "is PC Break",
      "isPlayerOverdrive": "is PC Overdrive",
      "isPlayerSandtomb": "is PC Sandtomb",
      "isPlayerDizzy": "is PC Dizzy",
      "isPlayerSlow": "is PC Slow",
      "isPlayerBurn": "is PC Burn",
      "isPlayerBlight": "is PC Blight",
      "isPlayerParalysis": "is PC Paralysis",
      "isPlayerGlaciate": "is PC Glaciate",
      "isPlayerPoison": "is PC Poison",
      "isPlayerHeldUnder": "is PC Heldunder",
      "isPlayerAttackDown": "is PC Attack Down",
      "isPlayerDeffenceDown": "is PC Deffence Down",
      "isPlayerSbaSealed": "is PC SBA Sealed",
      "isPlayerSkillSealed": "is PC Skill Sealed",
      // その他
      "isPerfectDodgeRecently": "is perfect dodge recently",
      "isPerfectGuardRecently": "is perfect guard recently",
      "isCharging": "is charging",
      "isFewMinutesFromStart": "is 3 minutes from start",
    },
    "weapons": {
      "amenoHabakiri": "AmenoHabakiri",
      "balmung": "Balmung",
      "blutgang": "Blutgang",
      "caduceus": "Caduceus",
      "daggerOfBahamutCoda": "Dagger Of Bahamut Coda",
      "damascusKnife": "Damascus Knife",
      "draconicFire": "Draconic Fire",
      "ereshkigal": "Ereshkigal",
      "etherealLasher": "Ethereal Lasher",
      "freikugel": "Freikugel",
      "gaeBulg": "Gae Bulg",
      "galatine": "Galatine",
      "gottfried": "Gottfried",
      "mjolnir": "Mjolnir",
      "sevenStarSword": "Seven Star Sword",
      "skyPiercer": "Sky Piercer",
      "swordfish": "Swordfish",
      "swordOfBahamut": "Sword Of Bahamut",
      "zosimos": "Zosimos",
    },
    "sigils": {
      "-": "-",
      // 基礎能力
      "stunPower": "Stun Power",
      "criticalHitRate": "Critical Hit Rate",
      "attackPower": "Attack Power",
      "health": "Health",
      // 攻撃
      "exploiter": "Exploiter",
      "comboBooster": "Combo Booster",
      "tyranny": "Tyranny",
      "enmity": "Enmity",
      "stamina": "Stamina",
      "chargedAttack": "Charged Attack",
      "dodgePayback": "Dodge Payback",
      "criticalDamage": "Critical DMG",
      "overdriveAssassin": "Overdrive Assassin",
      "injuryToInsult": "Injury ToInsult",
      "luckyCharge": "Lucky Charge",
      "throw": "Throw",
      "linkedTogether": "Linked Together",
      "comboFinisher": "Combo Finisher",
      "quickCharge": "Quick Charge",
      "guardPayback": "Guard Payback",
      "lifeOnTheLine": "Life On The Line",
      "damageCap": "Damage Cap",
      "concentratedFire": "Concentrated Fire",
      "skilledAssault": "Skilled Assault",
      "glassCannon": "Glass Cannon",
      "lessIsMore": "Less Is More",
      "breakAssassin": "Break Assassin",
      "headStart": "Head Start",
      "supplementaryDamage": "Supplementary DMG",
      "powerHungry": "Power Hungry",
      "berserker": "Berserker",
      "rollOfTheDie": "Roll Of The Die",
      // 耐久
      "sandtombResistance": "Sandtomb Resistance",
      "dizzyResistance": "Dizzy Resistance",
      "improvedGuard": "Improved Guard",
      "garrison": "Garrison",
      "steelNerves": "Steel Nerves",
      "slowResistance": "Slow Resistance",
      "burnResistance": "Burn Resistance",
      "preciseResilience": "Precise Resilience",
      "blightResistance": "Blight Resistance",
      "aegis": "Aegis",
      "paralysisResistance": "Paralysis Resistance",
      "nimbleDefense": "Nimble Defense",
      "glaciateResistance": "Glaciate Resistance",
      "firmStance": "Firm Stance",
      "poisonResistance": "Poison Resistance",
      "heldUnderResistance": "Heldunder Resistance",
      "attackDownResistance": "Attack Down Resistance",
      "deffenceDownResistance": "Deffence Down Resistance",
      "sbaSealedResistance": "SBA Sealed Resistance",
      "improvedDodge": "Improved Dodge",
      "stronghold": "Stronghold",
      "flightOverFight": "Flight OverFight",
      "skillSealedResistance": "Skill Sealed Resistance",
      "darkflameResistance": "Darkflame Resistance",
      "untouchable": "Untouchable",
      // 支援
      "uplift": "Uplift",
      "quickCooldown": "Quick Cooldown",
      "nimbleOnslaught": "Nimble Onslaught",
      "preciseWrath": "Precise Wrath",
      "drain": "Drain",
      "regen": "Regen",
      "improvedHealing": "Improved Healing",
      "cascade": "Cascade",
      // 特殊
      "guts": "Guts",
      "rupieTycoon": "Rupie Tycoon",
      "lowProfile": "Low Profile",
      "fastLearner": "Fast Learner",
      "potionHoarder": "Potion Hoarder",
      "provoke": "Provoke",
      "steadyFocus": "Steady Focus",
      "autorevive": "Autorevive",
      "pathToMastery": "Path To Mastery",
      "potentGreens": "Potent Greens",
      "stoutHeart": "Stout Heart",
      "crabbyResonance": "Crabby Resonance",
      "crabvestmentReturns": "Crabvestment Returns",
      "catastrophe": "Catastrophe",
      "sigilBooster": "Sigil Booster",
      // キャラクター専用
      "fearlessDrive": "Fearless Drive", 
      "fearlessSpirit": "Fearless Spirit", 
      "guardiansConviction": "Guardian's Conviction", 
      "guardiansHonor": "Guardian's Honor", 
      "helmsmansTenacity": "Helmsman's Tenacity", 
      "helmsmansNavigation": "Helmsman's Navigation", 
      "magesSavvy": "Mage's Savvy", 
      "magesAspiration": "Mage's Aspiration", 
      "veteransInsight": "Veteran's Insight", 
      "veteransVision": "Veteran's Vision", 
      "rosesBlooming": "Rose's Blooming", 
      "rosesProfusion": "Rose's Profusion", 
      "holyKnightsGrandeur": "Holy Knight's Grandeur", 
      "holyKnightsLuster": "Holy Knight's Luster", 
      "eternalRagesMettle": "Eternal Rage's Mettle", 
      "eternalRagesEthos": "Eternal Rage's Ethos", 
      "phantasmsConcord": "Phantasm's Concord", 
      "phantasmsHarmony": "Phantasm's Harmony", 
      "butterflysGrace": "Butterfly's Grace", 
      "butterflysValor": "Butterfly's Valor", 
      "whiteDragonsOath": "White Dragon's Oath", 
      "whiteDragonsGlory": "White Dragon's Glory", 
      "herosCreed": "Hero's Creed", 
      "herosWill": "Hero's Will", 
      "loadsProcession": "Load's Procession", 
      "loadsAmbition": "Load's Ambition", 
      "dragonslayersDominance": "Dragonslayer's Dominance", 
      "dragonslayersIngenuity": "Dragonslayer's Ingenuity", 
      "foundersStrategy": "Founder's Strategy", 
      "foundersTruth": "Founder's Truth", 
      "swordmastersProwess": "Swordmaster's Prowess", 
      "swordmastersArt": "Swordmaster's Art", 
      "crimsonsClout": "Crimson's Clout", 
      "crimsonsFlight": "Crimson's Flight", 
      "ebonysPresence": "Ebony's Presence", 
      "ebonysPoise": "Ebony's Poise", 
      "versalisFoundation": "Versali's Foundation", 
      "versalisIgnition": "Versali's Ignition", 
    }
  },
}