const URL_LANG = 'hl';
const URL_HP_RATE = 'hr';
const URL_HP_BASE = 'hb';
const URL_ATK_BASE = 'ab';
const URL_CRT_BASE = 'cb';
const URL_STN_BASE = 'sb';
const URL_ABILITY_EQUIPPED = 'ae';
const URL_WEAPON_NAME = 'wn';
const URL_WEAPON_LEVEL = 'wl';
const URL_MIRAGE_MUNITIONS = 'mm';

// Add your JavaScript code here

new Vue({
  el: '#app',
  data: {
    lang: 'ja',
    // status
    healthRate: 100,
    isHealthRateAuto: true,
    healthBase: 2500,
    isHealthBaseAuto: true,
    attackPowerBase: 0, 
    isAttackPowerBaseAuto: true,
    criticalHitRateBase: 0, 
    isCriticalHitRateBaseAuto: true,
    stunPowerBase: 0,
    isStunPowerBaseAuto: true,
    playerAbilityEquipped: 4,
    playConditions: {
      isEnemyBreak: true,
      isEnemyOverdrive: true,
      isEnemySandtomb: true,
      isEnemyDizzy: true,
      isEnemySlow: true,
      isEnemyBurn: true,
      isEnemyBlight: true,
      isEnemyParalysis: true,
      isEnemyGlaciate: true,
      isEnemyPoison: true,
      isEnemyHeldUnder: true,
      isEnemyAttackDown: true,
      isEnemyDeffenceDown: true,
      isEnemySbaSealed: true,
      isEnemySkillSealed: true,
      isPlayerBreak: true,
      isPlayerOverdrive: true,
      isPlayerSandtomb: true,
      isPlayerDizzy: true,
      isPlayerSlow: true,
      isPlayerBurn: true,
      isPlayerBlight: true,
      isPlayerParalysis: true,
      isPlayerGlaciate: true,
      isPlayerPoison: true,
      isPlayerHeldUnder: true,
      isPlayerAttackDown: true,
      isPlayerDeffenceDown: true,
      isPlayerSbaSealed: true,
      isPlayerSkillSealed: true,
      isPerfectDodgeRecently: true,
      isPerfectGuardRecently: true,
      isCharging: true,
      isFewMinutesFromStart: true,
    },
    // weapons
    weaponName: 'amenoHabakiri',
    weaponLevel: 160,
    mirageMunitions: 99,
    weaponTraits: [],
    weaponTraitTemplate: {
      weaponTraitSkillName: '-',
      weaponTraitSkillLevel: 25,
      weaponTraitSkillAuto: true, 
    },
    // imbues
    imbues: [],
    imbueTemplate: {
      imbueSkillName: '-',
      imbueSkillLevel: 10,
    },
    // sigils
    sigils: [],
    sigilTemplate: {
      sigilMainSkillName: '-',
      sigilMainSkillRank: 4,
      sigilMainSkillLevelCurrent: 15, 
      sigilMainSkillLevelToBe: 15, 
      sigilSubSkillName: '-', 
      sigilSubSkillRank: 4, 
      sigilSubSkillLevelCurrent: 15, 
      sigilSubSkillLevelToBe: 15, 
      sigilSubSkillAuto: true, 
    },
    // const
    messageText: MESSAGE_TEXT,
    skillStatus: SKILL_STATUS,
    weaponsStatus: WEAPONS_STATUS,
    characterStatus: CHARACTER_STATUS,
  },
  created() {
    // ページが読み込まれたときに初期のひな形をリストに追加
    this.createSigils(12);
    this.createImbues(3);
    this.createWeaponTraits(4);
  },
  mounted() {
    $('.select-2')
    .select2()
    .on('change', (event) => {
        // mount select2 selections
        if (('' + event.target.id).startsWith('sigil-main-name')) {
          this.sigils[('' + event.target.id).split('-').slice(-1)[0]].sigilMainSkillName = event.target.value;
        }
        if (('' + event.target.id).startsWith('sigil-sub-name')) {
          this.sigils[('' + event.target.id).split('-').slice(-1)[0]].sigilSubSkillName = event.target.value;
        }
        if (('' + event.target.id).startsWith('imbue-name')) {
          this.imbues[('' + event.target.id).split('-').slice(-1)[0]].imbueSkillName = event.target.value;
        }
        if (('' + event.target.id).startsWith('weapon-trait')) {
          this.weaponTraits[('' + event.target.id).split('-').slice(-1)[0]].weaponTraitSkillName = event.target.value;
        }
        if (('' + event.target.id).startsWith('weapon-name')) {
          this.weaponName = event.target.value;
        }
      }
    );
    
    // ===================
    // URL param analysis
    // ===================
    // lang
    let hl = this.getURLParameter(URL_LANG);
    hl = hl ? hl : 'ja';
    $("html").attr("lang", hl);
    this.lang = hl;
    // healthRate
    let hr = this.getURLParameter(URL_HP_RATE);
    this.healthRate = hr ? hr : this.healthRate;
    // healthBase
    let hb = this.getURLParameter(URL_HP_BASE);
    if (hb) this.isHealthBaseAuto = false;
    this.healthBase = hb ? hb : this.healthBase;
    // attackPowerBase 
    let ab = this.getURLParameter(URL_ATK_BASE);
    if (ab) this.isAttackPowerBaseAuto = false;
    this.attackPowerBase = ab ? ab : this.attackPowerBase;
    // criticalHitRateBase
    let cb = this.getURLParameter(URL_CRT_BASE);
    if (cb) this.isCriticalHitRateBaseAuto = false;
    this.criticalHitRateBase = cb ? cb : this.criticalHitRateBase;
    // stunPowerBase
    let sb = this.getURLParameter(URL_STN_BASE);
    if (sb) this.isStunPowerBaseAuto = false;
    this.stunPowerBase = sb ? sb : this.stunPowerBase;
    // playerAbilityEquipped
    let ae = this.getURLParameter(URL_ABILITY_EQUIPPED);
    this.playerAbilityEquipped = ae ? ae : this.playerAbilityEquipped;
    // playConditions
    // weaponName
    let wn = this.getURLParameter(URL_WEAPON_NAME);
    this.weaponName = wn ? wn : this.weaponName;
    // weaponLevel
    let wl = this.getURLParameter(URL_WEAPON_LEVEL);
    this.weaponLevel = wl ? wl : this.weaponLevel;
    // mirageMunitions
    let mm = this.getURLParameter(URL_MIRAGE_MUNITIONS);
    this.mirageMunitions = mm ? mm : this.mirageMunitions;
    // weaponTraits
    // imbues
    // sigils
  },
  methods: {
    setURLParameter(name, param) {
      // 現在のURLを取得
      let urlParams = new URLSearchParams(window.location.search);
      // 新しい値を設定
      urlParams.set(name, param);
      // 新しいURLを構築
      const newUrl = window.location.pathname + '?' + urlParams.toString();
      // 新しいURLを履歴に追加
      window.history.pushState({}, '', newUrl);
    },
    getURLParameter(name, url) {
      url = url ? url : window.location.href;
      let re = new RegExp(
        "[?&]" + name.replace(/[\[\]]/g, "\\$&") + "(=([^&#]*)|&|#|$)"
      );
      let r = re.exec(url);

      if (!r) {
        return null;
      } else if (!r[2]) {
        return '';
      }
      
      return decodeURIComponent(r[2].replace(/\+/g, " "));
    },
    createSigils(n) {
      for (let i=0; i < n; i++) {
        this.sigils.push(Object.assign({}, this.sigilTemplate));
      }
    },
    createImbues(n) {
      for (let i=0; i < n; i++) {
        this.imbues.push(Object.assign({}, this.imbueTemplate));
      }
    },
    createWeaponTraits(n) {
      for (let i=0; i < n; i++) {
        this.weaponTraits.push(Object.assign({}, this.weaponTraitTemplate));
      }
    },
    isObtainableSigil(mainSkillName, subSkillName) {
      const mainSkillType = this.skillStatus[mainSkillName]["skillType"];
      const subSkillType = this.skillStatus[subSkillName]["skillType"];
      const skillWeight = {
        '-': 90,
        'other': 80,
        'awakening': 60,
        'basic': 50,
        'attack': 40,
        'defence': 30,
        'support': 20,
        'special': 10,
      }
      if (subSkillType == '-' || subSkillType == 'other' || mainSkillType == 'awakening'){
        return true;
      } else if (subSkillName == 'attackPower'){
        return true;
      } else {
        return skillWeight[mainSkillType] > skillWeight[subSkillType]
      }
    },
    getSkillEffect(statusName) {
      // スキルの上昇量を計算
      let totalEffects = {};
      for (let i=0; i < this.totalSkillLevels.length; i++) {
        const skillName = this.totalSkillLevels[i]['skillName'];
        let skillLevel = this.totalSkillLevels[i]['level'][0];
        let skillLevelToBe = this.totalSkillLevels[i]['level'][1];
        // 最大レベルで丸める
        const maxLevel = this.skillStatus[skillName]['maxLevel'];
        skillLevel = skillLevel > maxLevel ? maxLevel : skillLevel;
        skillLevelToBe = skillLevelToBe > maxLevel ? maxLevel : skillLevelToBe;
        // 最小レベルで丸める
        const minLevel = this.skillStatus[skillName]['minLevel'];
        skillLevel = skillLevel < minLevel ? minLevel : skillLevel;
        skillLevelToBe = skillLevelToBe < minLevel ? minLevel : skillLevelToBe;
        // 効果量
        const skillEffect = this.skillStatus[skillName]['levels'][parseFloat(skillLevel) - minLevel];
        const skillEffectToBe = this.skillStatus[skillName]['levels'][parseFloat(skillLevelToBe) - minLevel];
        // 合計を計算
        for (let key in skillEffect){
          if (!(statusName === void 0)) {
            if (!(statusName == key)) {
              continue;
            }
          }
          if (totalEffects.hasOwnProperty(key)) {
            totalEffects[key] = [
              this.sumSkillEffects(totalEffects[key][0], skillEffect[key]), 
              this.sumSkillEffects(totalEffects[key][1], skillEffectToBe[key]),
            ]
          } else {
            totalEffects[key] = [
              this.sumSkillEffects('0|0%', skillEffect[key]), 
              this.sumSkillEffects('0|0%', skillEffectToBe[key])
            ]
          }
        }
      }
      return totalEffects;
    },
    getCaseConditions(k) {
      switch (k) {
        case 'maxHealth':
          return this.health;
        case 'health':
          return this.health * this.healthRate / 100;
        case 'attackPower':
          return this.attackPower;
        case 'criticalHitRate':
          return this.criticalHitRate;
        case 'isEnemyInjury':
          return [
            this.playConditions.isEnemyBreak,
            this.playConditions.isEnemyOverdrive,
            this.playConditions.isEnemySandtomb,
            this.playConditions.isEnemyDizzy,
            this.playConditions.isEnemySlow,
            this.playConditions.isEnemyBurn,
            this.playConditions.isEnemyBlight,
            this.playConditions.isEnemyParalysis,
            this.playConditions.isEnemyGlaciate,
            this.playConditions.isEnemyPoison,
            this.playConditions.isEnemyHeldUnder,
            this.playConditions.isEnemyAttackDown,
            this.playConditions.isEnemyDeffenceDown,
            this.playConditions.isEnemySbaSealed,
            this.playConditions.isEnemySkillSealed,
          ].some(v => v);
        default:
          if (k in this.playConditions) {
            return this.playConditions[k];
          } else {
            return parseFloat(k);
          }
      }
    },
    evaluateSkillEffectsCaseConditions(skillEffectsCase) {
      // 条件式を評価する
      // AND ORなどは未実装
      if (skillEffectsCase.includes('==')) {
        const term = skillEffectsCase.split('==');
        return this.getCaseConditions(term[0]) == this.getCaseConditions(term[1]);
      } else if (skillEffectsCase.includes('<>')) {
        const term = skillEffectsCase.split('<>');
        return !(this.getCaseConditions(term[0]) == this.getCaseConditions(term[1]));
      } else if (skillEffectsCase.includes('>=') || skillEffectsCase.includes('=>')) {
        const term = skillEffectsCase.replace('=>', '>=').split('>=');
        return this.getCaseConditions(term[0]) >= this.getCaseConditions(term[1]);
      } else if (skillEffectsCase.includes('<=') || skillEffectsCase.includes('=<')) {
        const term = skillEffectsCase.replace('=<', '<=').split('<=');
        return this.getCaseConditions(term[0]) <= this.getCaseConditions(term[1]);
      } else {
        return this.getCaseConditions(skillEffectsCase);
      }
    },
    sumSkillEffects(a, b) {
      // マイナス記号・パーセント表記などを考慮して足し算を行う
      aPercentile = parseFloat(a.split("|")[1].replace("%", ""));
      aNumerical = parseFloat(a.split("|")[0]);
      bPercentile = parseFloat(b.split("|")[1].replace("%", ""));
      bNumerical = parseFloat(b.split("|")[0]);
      if (a.split("|").length > 2) {
        // aに条件あり、それを満たさない場合0にする
        const aCase = a.split("|")[2];
        let aCaseFailed = !this.evaluateSkillEffectsCaseConditions(aCase);
        if (aCaseFailed) {
          aPercentile = 0;
          aNumerical = 0;
        }
      }
      if (b.split("|").length > 2) {
        // bに条件あり、それを満たさない場合0にする
        const bCase = b.split("|")[2];
        let bCaseFailed = !this.evaluateSkillEffectsCaseConditions(bCase);
        if (bCaseFailed) {
          bPercentile = 0;
          bNumerical = 0;
        }
      }
      return '' + (aNumerical + bNumerical) + '|' + (aPercentile + bPercentile) + '%';
    },
    applySkillEffects(baseStatus, skillEffects, isToBe) {
      // スキル効果量を実数値にかける関数
      if (skillEffects === void 0) {
        return baseStatus;
      }
      
      let skillEffectValue = '';
      if (isToBe) {
        skillEffectValue = skillEffects[1];
      } else {
        skillEffectValue = skillEffects[0];
      }

      skillEffectsPercentile = parseFloat(skillEffectValue.split("|")[1].replace("%", ""));
      skillEffectsNumerical = parseFloat(skillEffectValue.split("|")[0]);
      return (parseFloat(baseStatus) + skillEffectsNumerical) * (100 + skillEffectsPercentile) / 100
    },
    resetWeaponSkills() {
      const weaponsSkill = this.weaponsStatus[this.weaponName]['levelsSkill'][this.weaponLevel - this.weaponsStatus[this.weaponName]['minLevel']];
      for (let i=0; i < this.weaponTraits.length; i++) {
        if (this.weaponTraits[i].weaponTraitSkillAuto && Object.keys(weaponsSkill).length > i) {
          this.weaponTraits[i].weaponTraitSkillName = Object.keys(weaponsSkill)[i];
          this.weaponTraits[i].weaponTraitSkillLevel = weaponsSkill[Object.keys(weaponsSkill)[i]];
        }
      }
    },
    resetWeaponStatus() {
      // 武器でステータスの基礎値を変える
      const weaponsStatus = this.weaponsStatus[this.weaponName]['levelsStatus'][this.weaponLevel - this.weaponsStatus[this.weaponName]['minLevel']];
      // キャラクターでステータスの基礎値を変える(レベル毎のステータスは未実装のため0を参照)
      const characterStatus = this.characterStatus[this.weaponsStatus[this.weaponName]['character']]['levelsStatus'][0];
      // 計算
      if (this.isHealthBaseAuto) {
        this.healthBase = weaponsStatus['health'] + this.mirageMunitions * 10 + characterStatus['health'];
      }
      if (this.isAttackPowerBaseAuto) {
        this.attackPowerBase = weaponsStatus['attackPower'] + this.mirageMunitions * 2 + characterStatus['attackPower'];
      }
      if (this.isCriticalHitRateBaseAuto) {
        this.criticalHitRateBase = weaponsStatus['criticalHitRate'] + characterStatus['criticalHitRate'];
      }
      if (this.isStunPowerBaseAuto) {
        this.stunPowerBase = weaponsStatus['stunPower'] + characterStatus['stunPower'];
      }
    },
    setPlayConditionsAll(playCondition) {
      Object.keys(this.playConditions).forEach(key => {
        this.playConditions[key] = playCondition;
      });
    }
  },
  computed: {
    totalSkillLevels: function () {
      // ジーンと加護、武器スキルのレベル合計を計算
      let totalLevels = {};
      // total weapons skill levels
      for (let i=0; i < this.weaponTraits.length; i++) {
        const mainName = this.weaponTraits[i].weaponTraitSkillName;
        const mainLevel = this.weaponTraits[i].weaponTraitSkillLevel;

        if (mainName in totalLevels) {
          totalLevels[mainName] = [
            parseFloat(totalLevels[mainName][0]) + parseFloat(mainLevel),
            parseFloat(totalLevels[mainName][1]) + parseFloat(mainLevel),
          ]
        } else {
          totalLevels[mainName] = [mainLevel, mainLevel]
        }
      }
      // total sigil skill levels
      for (let i=0; i < this.sigils.length; i++) {
        const mainName = this.sigils[i].sigilMainSkillName;
        const subName = this.sigils[i].sigilSubSkillName;
        let mainLevel = this.sigils[i].sigilMainSkillLevelCurrent;
        let subLevel = this.sigils[i].sigilSubSkillAuto ? mainLevel : this.sigils[i].sigilSubSkillLevelCurrent;
        let mainLevelTo = this.sigils[i].sigilMainSkillLevelToBe;
        let subLevelTo = this.sigils[i].sigilSubSkillAuto ? mainLevelTo : this.sigils[i].sigilSubSkillLevelToBe;

        if('sigilBooster' in totalLevels){
          // ジーンにジーン強化が実装された場合ここで判定するとバグが起きるので注意
          mainLevel ++;
          subLevel ++;
          mainLevelTo ++;
          subLevelTo ++;
        }

        if (mainName in totalLevels) {
          totalLevels[mainName] = [
            parseFloat(totalLevels[mainName][0]) + parseFloat(mainLevel),
            parseFloat(totalLevels[mainName][1]) + parseFloat(mainLevelTo),
          ]
        } else {
          totalLevels[mainName] = [mainLevel, mainLevelTo]
        }
        if (subName in totalLevels) {
          totalLevels[subName] = [
            parseFloat(totalLevels[subName][0]) + parseFloat(subLevel),
            parseFloat(totalLevels[subName][1]) + parseFloat(subLevelTo),
          ]
        } else {
          totalLevels[subName] = [subLevel, subLevelTo]
        }
      }
      // total imbue skill levels
      for (let i=0; i < this.imbues.length; i++) {
        const mainName = this.imbues[i].imbueSkillName;
        const mainLevel = this.imbues[i].imbueSkillLevel;

        if (mainName in totalLevels) {
          totalLevels[mainName] = [
            parseFloat(totalLevels[mainName][0]) + parseFloat(mainLevel),
            parseFloat(totalLevels[mainName][1]) + parseFloat(mainLevel),
          ]
        } else {
          totalLevels[mainName] = [mainLevel, mainLevel]
        }
      }
      // convert map to arraylist
      return Object.keys(totalLevels).map(function (key) {return {skillName: key, level: totalLevels[key]}});
    },
    totalSkillEffects: function () {
      // スキルの上昇量を計算
      const totalEffects = this.getSkillEffect(undefined);
      // convert map to arraylist
      return Object.keys(totalEffects).map(function (key) {return {statusName: key, effects: totalEffects[key]}});
    },
    health: function() {
      // 体力を計算
      return this.applySkillEffects(this.healthBase, this.getSkillEffect('health')['health'], 0);
    },
    attackPower: function() {
      // 攻撃力を計算
      const idx = 0;
      // ベース
      let based = this.applySkillEffects(100, this.getSkillEffect('attackPower')['attackPower'], idx);
      // 裸一貫
      let lessIsMore = this.applySkillEffects(100, this.getSkillEffect('lessIsMore')['lessIsMore'], idx);
      // tyranny 暴君
      let tyranny = this.applySkillEffects(100, this.getSkillEffect('tyranny')['tyranny'], idx);
      // lifeOnTheLine 捨て身
      let lifeOnTheLine = this.applySkillEffects(100, this.getSkillEffect('lifeOnTheLine')['lifeOnTheLine'], idx);
      // glassCannon 紙一重
      let glassCannon = this.applySkillEffects(100, this.getSkillEffect('glassCannon')['glassCannon'], idx);
      // headStart 先制
      let headStart = this.applySkillEffects(100, this.getSkillEffect('headStart')['headStart'], idx);
      // powerHungry 修羅
      let powerHungry = this.applySkillEffects(100, this.getSkillEffect('powerHungry')['powerHungry'], idx);
      // berserker 窮鼠
      let berserker = this.applySkillEffects(100, this.getSkillEffect('berserker')['berserker'], idx);
      // enmity 背水
      let enmity = this.applySkillEffects(100, this.getSkillEffect('enmity')['enmity'], idx);
      // stamina 渾身
      let stamina = this.applySkillEffects(100, this.getSkillEffect('stamina')['stamina'], idx);
      // alwaysAttackHalf 攻撃力半減
      let alwaysAttackHalf = this.applySkillEffects(100, this.getSkillEffect('alwaysAttackHalf')['alwaysAttackHalf'], idx);
      alwaysAttackHalf = alwaysAttackHalf >= 200 ? 0.5 : 1.0;
      // 全体
      return this.attackPowerBase * (
        based + (
          // 裸一貫
          (lessIsMore - 100) * (4 - this.playerAbilityEquipped) / 4
        ) + (
          // 暴君
          tyranny - 100
        ) + (
          // 捨て身
          lifeOnTheLine - 100
        ) + (
          // 紙一重
          glassCannon - 100
        ) + (
          // 先制
          headStart - 100
        ) + (
          // 修羅
          powerHungry - 100
        ) + (
          // 窮鼠
          berserker - 100
        ) + (
          // 背水
          // 100%から0%(1)までの幅で変化すると計算
          (100 - this.healthRate) * (enmity - 100) / 100
        ) + (
          // 渾身
          // 最低値は最大値の15%で、100%から25%までの幅で変化すると計算
          (15 + Math.max(0, (this.healthRate - 25) / 75) * 85) * (stamina - 100) / 100
        )
      ) / 100 * alwaysAttackHalf;
    },
    criticalHitRate: function() {
      // クリティカル率を計算
      return this.applySkillEffects(this.criticalHitRateBase, this.getSkillEffect('criticalHitRate')['criticalHitRate'], 0);
    },
    stunPower: function() {
      // スタン値を計算
      return this.applySkillEffects(this.stunPowerBase, this.getSkillEffect('stunPower')['stunPower'], 0);
    },
    healthToBe: function() {
      // 体力を計算 (ToBeの方のレベルで計算)
      return this.applySkillEffects(this.healthBase, this.getSkillEffect('health')['health'], 1);
    },
    attackPowerToBe: function() {
      // 攻撃力を計算 (ToBeの方のレベルで計算)
      const idx = 1;
      // ベース
      let based = this.applySkillEffects(100, this.getSkillEffect('attackPower')['attackPower'], idx);
      // 裸一貫
      let lessIsMore = this.applySkillEffects(100, this.getSkillEffect('lessIsMore')['lessIsMore'], idx);
      // tyranny 暴君
      let tyranny = this.applySkillEffects(100, this.getSkillEffect('tyranny')['tyranny'], idx);
      // lifeOnTheLine 捨て身
      let lifeOnTheLine = this.applySkillEffects(100, this.getSkillEffect('lifeOnTheLine')['lifeOnTheLine'], idx);
      // glassCannon 紙一重
      let glassCannon = this.applySkillEffects(100, this.getSkillEffect('glassCannon')['glassCannon'], idx);
      // headStart 先制
      let headStart = this.applySkillEffects(100, this.getSkillEffect('headStart')['headStart'], idx);
      // powerHungry 修羅
      let powerHungry = this.applySkillEffects(100, this.getSkillEffect('powerHungry')['powerHungry'], idx);
      // berserker 窮鼠
      let berserker = this.applySkillEffects(100, this.getSkillEffect('berserker')['berserker'], idx);
      // enmity 背水
      let enmity = this.applySkillEffects(100, this.getSkillEffect('enmity')['enmity'], idx);
      // stamina 渾身
      let stamina = this.applySkillEffects(100, this.getSkillEffect('stamina')['stamina'], idx);
      // alwaysAttackHalf 攻撃力半減
      let alwaysAttackHalf = this.applySkillEffects(100, this.getSkillEffect('alwaysAttackHalf')['alwaysAttackHalf'], idx);
      alwaysAttackHalf = alwaysAttackHalf >= 200 ? 0.5 : 1.0;
      // 全体
      return this.attackPowerBase * (
        based + (
          // 裸一貫
          (lessIsMore - 100) * (4 - this.playerAbilityEquipped) / 4
        ) + (
          // 暴君
          tyranny - 100
        ) + (
          // 捨て身
          lifeOnTheLine - 100
        ) + (
          // 紙一重
          glassCannon - 100
        ) + (
          // 先制
          headStart - 100
        ) + (
          // 修羅
          powerHungry - 100
        ) + (
          // 窮鼠
          berserker - 100
        ) + (
          // 背水
          // 100%から0%(1)までの幅で変化すると計算
          (100 - this.healthRate) * (enmity - 100) / 100
        ) + (
          // 渾身
          // 最低値は最大値の15%で、100%から25%までの幅で変化すると計算
          (15 + Math.max(0, (this.healthRate - 25) / 75) * 85) * (stamina - 100) / 100
        )
      ) / 100 * alwaysAttackHalf;
    },
    criticalHitRateToBe: function() {
      // クリティカル率を計算 (ToBeの方のレベルで計算)
      return this.applySkillEffects(this.criticalHitRateBase, this.getSkillEffect('criticalHitRate')['criticalHitRate'], 1);
    },
    stunPowerToBe: function() {
      // スタン値を計算 (ToBeの方のレベルで計算)
      return this.applySkillEffects(this.stunPowerBase, this.getSkillEffect('stunPower')['stunPower'], 1);
    },
  },
  watch: {
    healthRate: {
      handler: function() {
        // update URL
        this.setURLParameter(URL_HP_RATE, this.healthRate);
      },
      immediate: false
    },
    healthBase: {
      handler: function() {
        // update URL
        this.setURLParameter(URL_HP_BASE, this.healthBase);
      },
      immediate: false
    },
    attackPowerBase: {
      handler: function() {
        // update URL
        this.setURLParameter(URL_ATK_BASE, this.attackPowerBase);
      },
      immediate: false
    },
    criticalHitRateBase: {
      handler: function() {
        // update URL
        this.setURLParameter(URL_CRT_BASE, this.criticalHitRateBase);
      },
      immediate: false
    },
    stunPowerBase: {
      handler: function() {
        // update URL
        this.setURLParameter(URL_STN_BASE, this.stunPowerBase);
      },
      immediate: false
    },
    playerAbilityEquipped: {
      handler: function() {
        // update URL
        this.setURLParameter(URL_ABILITY_EQUIPPED, this.playerAbilityEquipped);
      },
      immediate: false
    },
    weaponName: {
      handler: function() {
        // 武器スキルを自動補完
        this.resetWeaponSkills();
        // 武器ステータスを自動補完
        this.resetWeaponStatus();
        // update URL
        this.setURLParameter(URL_WEAPON_NAME, this.weaponName);
      },
      immediate: false
    },
    weaponLevel: {
      handler: function() {
        // レベル最大値に丸める
        if (this.weaponLevel > this.weaponsStatus[this.weaponName]['maxLevel']) {
          this.weaponLevel = this.weaponsStatus[this.weaponName]['maxLevel'];
        }
        // レベル最小値に丸める
        if (this.weaponLevel < this.weaponsStatus[this.weaponName]['minLevel']) {
          this.weaponLevel = this.weaponsStatus[this.weaponName]['minLevel'];
        }
        // 武器スキルを自動補完
        this.resetWeaponSkills();
        // 武器ステータスを自動補完
        this.resetWeaponStatus();
        // update URL
        this.setURLParameter(URL_WEAPON_LEVEL, this.weaponLevel);
      },
      immediate: false
    },
    mirageMunitions: {
      handler: function() {
        // 武器ステータスを自動補完
        this.resetWeaponStatus();
        // update URL
        this.setURLParameter(URL_MIRAGE_MUNITIONS, this.mirageMunitions);
      },
      immediate: false
    },
    weaponTraits: {
      handler: function() {
        // 武器スキルを自動補完
        this.resetWeaponSkills();
        // 武器ステータスを自動補完
        this.resetWeaponStatus();
      },
      deep: true,
      immediate: false
    },
    sigils: {
      handler: function() {
        // サブスキルのレベルを自動補完
        for (let i=0; i < this.sigils.length; i++) {
          if (this.sigils[i].sigilSubSkillAuto) {
            this.sigils[i].sigilSubSkillRank = this.sigils[i].sigilMainSkillRank;
            this.sigils[i].sigilSubSkillLevelCurrent = this.sigils[i].sigilMainSkillLevelCurrent;
            this.sigils[i].sigilSubSkillLevelToBe = this.sigils[i].sigilMainSkillLevelToBe;
          }
        }
      },
      deep: true,
      immediate: false
    },
  }
});
