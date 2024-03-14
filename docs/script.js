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
const URL_SKILLSET = 'ss';
const URL_PLAY_CONDITIONS = 'pc';
const URL_COMBO_CONDITIONS = 'cp';
const MAX_COMBO_CONFIG = 2;

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
    comboParams: [],
    comboParamTemplate: {
      comboName: 'Normal Attack A',
      comboCount: 0,
      baseRate: 100, // 100%
      baseDamageCap: 9999,
      isCharged: false,
      isLinked: false,
      isSkilled: false,
      isSBA: false,
      isRanged: false,
      isFinisher: false,
      isThrow: false,
    },
    // const
    messageText: MESSAGE_TEXT,
    skillStatus: SKILL_STATUS,
    weaponsStatus: WEAPONS_STATUS,
    characterStatus: CHARACTER_STATUS,
    // url params
    urlWeaponTraits: '',
    urlImbues: '',
    urlSigils: '',
    urlSkillSetParams: '',
  },
  created() {
    // ページが読み込まれたときに初期のひな形をリストに追加
    this.createSigils(12);
    this.createImbues(3);
    this.createWeaponTraits(4);
    for (let i = 0; i < MAX_COMBO_CONFIG; i++) this.addComboParams();
  },
  mounted() {
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
    const pc = this.convertURLToPlayConditions();
    if (pc) this.playConditions = pc;
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
    let wt = this.convertURLToWeaponTraits();
    this.weaponTraits = wt ? wt : this.weaponTraits;
    // imbues 
    let im = this.convertURLToImbues();
    this.imbues = im ? im : this.imbues;
    // sigils
    let ss = this.convertURLToSigils();
    this.sigils = ss ? ss : this.sigils;
    // combo
    let cc = this.convertURLToComboParams();
    this.comboParams = cc ? cc : this.comboParams;
  },
  methods: {
    // util
    parseBase36ToBigInt(base36String) {
      const base36Digits = '0123456789abcdefghijklmnopqrstuvwxyz';
      let result = BigInt(0);
      const base = BigInt(36);
  
      for (let i = 0; i < base36String.length; i++) {
        const digitValue = BigInt(base36Digits.indexOf(base36String[i]));
        result = result * base + digitValue;
      }
  
      return result;
    },
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
    // convert URL to DATA
    convertURLToPlayConditions(url) {
      // see also convertPlayConditionsToURL()
      let urlParams = this.getURLParameter(URL_PLAY_CONDITIONS, url);
      if (!urlParams) return null;

      const urlPlayConditionsList = ('' + this.parseBase36ToBigInt(urlParams)).substring(1).match(/.{1,5}/g);
      if (!(urlPlayConditionsList.length == Object.keys(this.playConditions).length)) return null;
      
      let newConditions = structuredClone(this.playConditions);
      for (let i=0; i < urlPlayConditionsList.length; i++) {
        const pc = urlPlayConditionsList[i];
        newConditions[this.urlMessageTextConditions[pc.substring(0, 4)]] = (pc.substring(4, 5) == '1');
      }
      return newConditions;
    },
    convertURLToWeaponTraits(url) {
      // see also convertWeaponTraitsToURL()
      let urlParams = this.getURLParameter(URL_SKILLSET, url);
      if (!urlParams) return null;
      urlParams = urlParams.split('-');

      const urlWeaponTraitsList = ('' + this.parseBase36ToBigInt(urlParams[0])).substring(1).match(/.{1,7}/g);
      if (!(urlWeaponTraitsList.length == 4)) return null;
      
      let newWeaponTraits = structuredClone(this.weaponTraits);
      for (let i=0; i < urlWeaponTraitsList.length; i++) {
        const wt = urlWeaponTraitsList[i];
        newWeaponTraits[i] = {
          weaponTraitSkillName: this.urlMessageTextSigils[wt.substring(0, 4)],
          weaponTraitSkillLevel: parseInt(wt.substring(4, 6)),
          weaponTraitSkillAuto: false, 
        };
      }
      return newWeaponTraits;
    },
    convertURLToImbues(url) {
      // see also convertImbuesToURL()
      let urlParams = this.getURLParameter(URL_SKILLSET, url);
      if (!urlParams) return null;
      urlParams = urlParams.split('-');

      const urlImbuesList = ('' + this.parseBase36ToBigInt(urlParams[1])).substring(1).match(/.{1,6}/g);
      if (urlImbuesList.length < 3) return null;
      
      let newImbues = structuredClone(this.imbues);
      for (let i=0; i < urlImbuesList.length; i++) {
        const im = urlImbuesList[i];
        newImbues[i] = {
          imbueSkillName: this.urlMessageTextSigils[im.substring(0, 4)],
          imbueSkillLevel: parseInt(im.substring(4, 6)),
        };
      }
      return newImbues;
    },
    convertURLToSigils(url) {
      // see also convertSigilsToURL()
      let urlParams = this.getURLParameter(URL_SKILLSET, url);
      if (!urlParams) return null;
      urlParams = urlParams.split('-');

      const urlSigilsList = ('' + this.parseBase36ToBigInt(urlParams[2])).substring(1).match(/.{1,19}/g);
      if (urlSigilsList.length < 12) return null;
      
      let newSigils = structuredClone(this.sigils);
      for (let i=0; i < urlSigilsList.length; i++) {
        const sl = urlSigilsList[i];
        newSigils[i] = {
          sigilMainSkillName: this.urlMessageTextSigils[sl.substring(0, 4)],
          sigilMainSkillRank: parseInt(sl.substring(4, 5)),
          sigilMainSkillLevelCurrent: parseInt(sl.substring(5, 7)), 
          sigilMainSkillLevelToBe: parseInt(sl.substring(7, 9)), 
          sigilSubSkillName: this.urlMessageTextSigils[sl.substring(9, 13)], 
          sigilSubSkillRank: parseInt(sl.substring(13, 14)), 
          sigilSubSkillLevelCurrent: parseInt(sl.substring(14, 16)), 
          sigilSubSkillLevelToBe: parseInt(sl.substring(16, 18)), 
          sigilSubSkillAuto: false, 
        };
      }
      return newSigils;
    },
    convertURLToComboParams(url) {
      // see also convertSigilsToURL()
      const urlParams = this.getURLParameter(URL_COMBO_CONDITIONS, url);
      if (!urlParams) return null;

      const urlComboParamsList = urlParams.split('-').map((x) => ('' + this.parseBase36ToBigInt(x)).substring(1));
      if (urlComboParamsList.length < 1) return null;
      
      let newComboParams = structuredClone(this.comboParams);
      for (let i=0; i < urlComboParamsList.length; i++) {
        const cc = urlComboParamsList[i];
        newComboParams[i] = {
          comboCount: parseInt(cc.substring(0, 3)),
          baseRate: parseInt(cc.substring(3, 8)),
          baseDamageCap: parseInt(cc.substring(8, 16)),
          isCharged: parseInt(cc.substring(16, 17)),
          isLinked: parseInt(cc.substring(17, 18)),
          isSkilled: parseInt(cc.substring(18, 19)),
          isSBA: parseInt(cc.substring(19, 20)),
          isRanged: parseInt(cc.substring(20, 21)),
          isFinisher: parseInt(cc.substring(21, 22)),
          isThrow: parseInt(cc.substring(22, 23)),
        };
      }
      return newComboParams;
    },
    // convert DATA to URL
    convertPlayConditionsToURL() {
      // play conditions ---------------------
      // param: <id><flag>
      // example: 00001
      let urlPlayConditionsParams = ''
      for (let i in this.playConditions) {
        let paramTerm = (
          ''
          + this.messageText['-']['conditions'][i]
          + (this.playConditions[i] ? '1' : '0')
        );
        urlPlayConditionsParams += paramTerm;
      }
      return BigInt('1' + urlPlayConditionsParams).toString(36);
    },
    convertWeaponTraitsToURL() {
      // weapon traits ---------------------
      // param: <id><level><completion flag>
      // example: 0000151
      let urlWeaponTraitsParams = ''
      for (let i in this.weaponTraits) {
        const wt = this.weaponTraits[i];
        let paramTerm = (
          ''
          + this.messageText['-']['sigils'][wt.weaponTraitSkillName] 
          + ('00' + wt.weaponTraitSkillLevel).slice(-2)
          + (wt.weaponTraitSkillAuto ? '1' : '0')
        );
        urlWeaponTraitsParams += paramTerm;
      }
      return BigInt('1' + urlWeaponTraitsParams).toString(36);
    },
    convertImbuesToURL() {
      // imbues -----------------------------------------
      // param: <id><level>
      // example: 000010
      let urlImbuesParams = ''
      for (let i in this.imbues) {
        const im = this.imbues[i];
        let paramTerm = (
          ''
          + this.messageText['-']['sigils'][im.imbueSkillName] 
          + ('00' + im.imbueSkillLevel).slice(-2)
        );
        urlImbuesParams += paramTerm;
      }
      return BigInt('1' + urlImbuesParams).toString(36);
    },
    convertSigilsToURL() {
      // weaponTraits / imbues / sigilsはハイフンで区切る
      // 数字は36進数に変換される
      // sigils -----------------------------------------
      // param: <id><rank><level now><level tobe><sub-id>
      //        <sub-rank><sub-level now><sub-level tobe><completion flag>
      // 0000515150000515151
      let urlSigilsParams = ''
      for (let i in this.sigils) {
        const sl = this.sigils[i];
        let paramTerm = (
          ''
          + this.messageText['-']['sigils'][sl.sigilMainSkillName] 
          + sl.sigilMainSkillRank
          + ('00' + sl.sigilMainSkillLevelCurrent).slice(-2)
          + ('00' + sl.sigilMainSkillLevelToBe).slice(-2)
          + this.messageText['-']['sigils'][sl.sigilSubSkillName] 
          + sl.sigilSubSkillRank
          + ('00' + sl.sigilSubSkillLevelCurrent).slice(-2)
          + ('00' + sl.sigilSubSkillLevelToBe).slice(-2)
          + (sl.sigilSubSkillAuto ? '1' : '0')
        );
        urlSigilsParams += paramTerm;
      }
      return BigInt('1' + urlSigilsParams).toString(36) ;
    },
    convertComboParamsToURL() {
      // combo params -----------------------------------------
      // param: <combo count><rate><dmg cap><bool value1><bool value2>...
      // 00011111222222220101010101
      let urlComboParams = ''
      for (let i in this.comboParams) {
        const cp = this.comboParams[i];
        let paramTerm = (
          ''
          + ('000' + cp.comboCount).slice(-3)
          + ('00000' + cp.baseRate).slice(-5)
          + ('00000000' + cp.baseDamageCap).slice(-8)
          + (cp.isCharged ? "1" : "0")
          + (cp.isLinked ? "1" : "0")
          + (cp.isSkilled ? "1" : "0")
          + (cp.isSBA ? "1" : "0")
          + (cp.isRanged ? "1" : "0")
          + (cp.isFinisher ? "1" : "0")
          + (cp.isThrow ? "1" : "0")
        );
        paramTerm = BigInt('1' + paramTerm).toString(36);
        if (!(urlComboParams == '')) {urlComboParams += '-'}
        urlComboParams += paramTerm;
      }
      return urlComboParams;
    },
    // Initializations
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
    resetWeaponSkills() {
      const lv = Math.min(
        this.weaponsStatus[this.weaponName]['maxLevel'] - this.weaponsStatus[this.weaponName]['minLevel'], 
        Math.max(this.weaponLevel - this.weaponsStatus[this.weaponName]['minLevel'], 0)
      );
      const weaponsSkill = this.weaponsStatus[this.weaponName]['levelsSkill'][lv];
      for (let i=0; i < this.weaponTraits.length; i++) {
        if (this.weaponTraits[i].weaponTraitSkillAuto) {
          if (Object.keys(weaponsSkill).length > i) {
            this.weaponTraits[i].weaponTraitSkillName = Object.keys(weaponsSkill)[i];
            this.weaponTraits[i].weaponTraitSkillLevel = weaponsSkill[Object.keys(weaponsSkill)[i]];
          } else {
            this.weaponTraits[i].weaponTraitSkillName = '-';
            this.weaponTraits[i].weaponTraitSkillLevel = '15';
          }
        }
      }
    },
    resetWeaponStatus() {
      const lv = Math.min(
        this.weaponsStatus[this.weaponName]['maxLevel'] - this.weaponsStatus[this.weaponName]['minLevel'], 
        Math.max(this.weaponLevel - this.weaponsStatus[this.weaponName]['minLevel'], 0)
      );
      // 武器でステータスの基礎値を変える
      const weaponsStatus = this.weaponsStatus[this.weaponName]['levelsStatus'][lv];
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
    resetSelect2() {
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
    },
    // accessor
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
    setPlayConditionsAll(playCondition) {
      Object.keys(this.playConditions).forEach(key => {
        this.playConditions[key] = playCondition;
      });
    },
    addComboParams: function() {
      if (this.comboParams.length > (MAX_COMBO_CONFIG - 1)) return;
      this.comboParams.push(Object.assign({}, this.comboParamTemplate));
    },
    delComboParams: function(idx) {
      if (this.comboParams.length < 2) return;
      this.comboParams.splice(idx, 1);
    },
    // Damage Calcs
    calcComboRate(idx, dig) {
      const params = this.comboParams[idx];
      let rate = 100;
      let rateToBe = 100;
      if (params['baseRate'] == 0) return 0;
      rate = rate * parseFloat(params['baseRate']) / 100;
      rateToBe = rateToBe * parseFloat(params['baseRate']) / 100;
      // damage 与ダメージ
      const dmg = this.getSkillEffect('damage')['damage'];
      rate = rate * this.applySkillEffects(100, dmg, 0) / 100;
      rateToBe = rateToBe * this.applySkillEffects(100, dmg, 1) / 100;
      // damageWeakness 弱点部位に対する与ダメージ
      if (true) { // 実装中
        const ef = this.getSkillEffect('damageWeakness')['damageWeakness'];
        rate = rate * this.applySkillEffects(100, ef, 0) / 100;
        rateToBe = rateToBe * this.applySkillEffects(100, ef, 1) / 100;
      }
      // damageBehind 背後攻撃の与ダメージ
      if (true) { // 実装中
        const ef = this.getSkillEffect('damageBehind')['damageBehind'];
        rate = rate * this.applySkillEffects(100, ef, 0) / 100;
        rateToBe = rateToBe * this.applySkillEffects(100, ef, 1) / 100;
      }
      // damageCharged チャージアタックの与ダメージ
      if (params['isCharged']) {
        const ef = this.getSkillEffect('damageCharged')['damageCharged'];
        rate = rate * this.applySkillEffects(100, ef, 0) / 100;
        rateToBe = rateToBe * this.applySkillEffects(100, ef, 1) / 100;
      }
      // damageThrow 投擲の与ダメージ
      if (params['isThrow']) {
        const ef = this.getSkillEffect('damageThrow')['damageThrow'];
        rate = rate * this.applySkillEffects(100, ef, 0) / 100;
        rateToBe = rateToBe * this.applySkillEffects(100, ef, 1) / 100;
      }
      // damageRanged 遠距離攻撃の与ダメージ
      if (params['isRanged']) {
        const ef = this.getSkillEffect('damageRanged')['damageRanged'];
        rate = rate * this.applySkillEffects(100, ef, 0) / 100;
        rateToBe = rateToBe * this.applySkillEffects(100, ef, 1) / 100;
      }
      // damageSkilled アビリティの与ダメージ
      if (params['isSkilled']) {
        const ef = this.getSkillEffect('damageSkilled')['damageSkilled'];
        rate = rate * this.applySkillEffects(100, ef, 0) / 100;
        rateToBe = rateToBe * this.applySkillEffects(100, ef, 1) / 100;
      }
      // comboBooster 派生攻撃の与ダメージ
      const cboost = this.getSkillEffect('comboBooster')['comboBooster'];
      const cboostNow = Math.min(this.applySkillEffects(100, cboost, 0), 100 + parseInt(parseInt(params['comboCount']) / 5) * 10);
      const cboostToBe = Math.min(this.applySkillEffects(100, cboost, 1), 100 + parseInt(parseInt(params['comboCount']) / 5) * 10);
      rate = rate * cboostNow / 100;
      rateToBe = rateToBe * cboostToBe / 100;
      // damageFinisher フィニッシュの与ダメージ 
      if (params['isFinisher']) {
        const ef = this.getSkillEffect('damageFinisher')['damageFinisher'];
        rate = rate * this.applySkillEffects(100, ef, 0) / 100;
        rateToBe = rateToBe * this.applySkillEffects(100, ef, 1) / 100;
      }
      // damageLinkedAttack リンクアタックの与ダメージ 
      if (params['isLinked']) {
        const ef = this.getSkillEffect('damageLinkedAttack')['damageLinkedAttack'];
        rate = rate * this.applySkillEffects(100, ef, 0) / 100;
        rateToBe = rateToBe * this.applySkillEffects(100, ef, 1) / 100;
      }
      // damageSBA 奥義の与ダメージ 
      // damageChain CBの与ダメージ
      if (params['isSBA']) {
        const ef = this.getSkillEffect('damageSBA')['damageSBA'];
        rate = rate * this.applySkillEffects(100, ef, 0) / 100;
        rateToBe = rateToBe * this.applySkillEffects(100, ef, 1) / 100;
      }
      // キャラクター専用ジーン
      // 実装中
      if (!(dig === undefined)) return [rate.toFixed(dig), rateToBe.toFixed(dig)];
      return [rate, rateToBe]
    },
    calcComboNonCriticalDamage(idx, dig) {
      let rate = this.calcComboRate(idx);
      // 基礎ダメージに倍率を掛ける
      rate[0] = this.attackPower * rate[0] / 100;
      rate[1] = this.attackPowerToBe * rate[1] / 100;
      
      // 属性変換の倍率を掛ける
      const we = this.getSkillEffect('warElemental')['warElemental'];
      if (we) rate[0] = rate[0] * 1.2;
      if (we) rate[1] = rate[1] * 1.2;
      
      if (!(dig === undefined)) return [rate[0].toFixed(dig), rate[1].toFixed(dig)];
      return rate
    },
    calcComboCriticalDamage(idx, dig) {
      let rate = this.calcComboRate(idx);
      const ef = this.getSkillEffect('damageCritical')['damageCritical'];
      // 基礎ダメージに倍率を掛ける
      rate[0] = this.attackPower * rate[0] * (this.applySkillEffects(100, ef, 0) + 100) / 10000;
      rate[1] = this.attackPower * rate[1] * (this.applySkillEffects(100, ef, 1) + 100) / 10000;
      
      // 属性変換の倍率を掛ける
      const we = this.getSkillEffect('warElemental')['warElemental'];
      if (we) rate[0] = rate[0] * 1.2;
      if (we) rate[1] = rate[1] * 1.2;

      if (!(dig === undefined)) return [rate[0].toFixed(dig), rate[1].toFixed(dig)];
      return rate
    },
    calcComboSupplementalDamage(idx, dig) {
      const params = this.comboParams[idx];
      // 奥義のとき追撃は発生しない
      if (params['isSBA']) return [0, 0];
      
      const avgdmg = this.calcComboAverageDamage(idx);
      const sup = this.getSkillEffect('supplementaryDamageHitRate')['supplementaryDamageHitRate'];
      
      // ジーンの追撃発生率を計算
      let supRate = this.applySkillEffects(100, sup, 0) / 100 - 1;
      let supRateToBe = this.applySkillEffects(100, sup, 1) / 100 - 1;

      // 追撃ダメージを計算
      const supdmg = [avgdmg[0] * 0.2 * supRate, avgdmg[1] * 0.2 * supRateToBe];

      if (!(dig === undefined)) return [supdmg[0].toFixed(dig), supdmg[1].toFixed(dig)];
      return supdmg;
    },
    calcComboAverageDamage(idx, dig) {
      const dmg = this.calcComboNonCriticalDamage(idx);
      const cdmg = this.calcComboCriticalDamage(idx);
      const dmgCap = this.calcComboDamageCap(idx);

      const crt = this.criticalHitRate / 100;
      const crtToBe = this.criticalHitRateToBe / 100;

      const avgdmg = [
        (Math.min(dmgCap[0], dmg[0]) * (1 - crt) + Math.min(dmgCap[0], cdmg[0]) * crt),
        (Math.min(dmgCap[1], dmg[0]) * (1 - crtToBe) + Math.min(dmgCap[1], cdmg[1]) * crtToBe),
      ];

      if (!(dig === undefined)) return [avgdmg[0].toFixed(dig), avgdmg[1].toFixed(dig)];
      return avgdmg;
    },
    calcComboDamageCap(idx, dig) {
      const params = this.comboParams[idx];
      if (params['baseDamageCap'] == 0) return 0;
      // ベースダメージ上限
      const cap = this.getSkillEffect('damageCap')['damageCap'];
      let rate = this.applySkillEffects(100, cap, 0);
      let rateToBe = this.applySkillEffects(100, cap, 1);

      // 追加のダメージ上限
      if (params['isSBA']) {
        const ef = this.getSkillEffect('sbaDamageCap')['sbaDamageCap'];
        rate = rate + this.applySkillEffects(100, ef, 0) + 54 - 100 + 20; // 20%は上限突破分
        rateToBe = rateToBe + this.applySkillEffects(100, ef, 1) + 54 - 100 + 20; // 20%は上限突破分
      } 
      if (params['isSkilled']) {
        const ef = this.getSkillEffect('skilledDamageCap')['skilledDamageCap'];
        rate = rate + this.applySkillEffects(100, ef, 0) + 54 - 100 + 20; // 20%は上限突破分
        rateToBe = rateToBe + this.applySkillEffects(100, ef, 1) + 54 - 100 + 20; // 20%は上限突破分
      } 
      if (!params['isSBA'] && !params['isSkilled']) {
        const ef = this.getSkillEffect('attackDamageCap')['attackDamageCap'];
        rate = rate + this.applySkillEffects(100, ef, 0) + 54 - 100 + 20; // 20%は上限突破分
        rateToBe = rateToBe + this.applySkillEffects(100, ef, 1) + 54 - 100 + 20; // 20%は上限突破分
      }

      // 属性変換の倍率を掛ける
      const we = this.getSkillEffect('warElemental')['warElemental'];
      if (we) rate = rate * 1.2;
      if (we) rateToBe = rateToBe * 1.2;

      rate = params['baseDamageCap'] * rate / 100;
      rateToBe = params['baseDamageCap'] * rateToBe / 100;

      if (!(dig === undefined)) return [rate.toFixed(dig), rateToBe.toFixed(dig)];
      return [rate, rateToBe];
    },
    calcComboDamageOvercap(idx, dig) {
      const dmg = this.calcComboNonCriticalDamage(idx);
      const cdmg = this.calcComboCriticalDamage(idx);
      const dmgCap = this.calcComboDamageCap(idx);

      const crt = this.criticalHitRate / 100;
      const crtToBe = this.criticalHitRateToBe / 100;

      const overcap = [
        (dmg[0] * (1 - crt) + cdmg[0] * crt) / dmgCap[0] * 100,
        (dmg[1] * (1 - crtToBe) + cdmg[1] * crtToBe) / dmgCap[1] * 100,
      ];

      if (!(dig === undefined)) return [overcap[0].toFixed(dig), overcap[1].toFixed(dig)];
      return overcap;
    }
  },
  computed: {
    urlMessageTextSigils: function () {
      return Object.entries(MESSAGE_TEXT['-']['sigils']).reduce((acc, [key, value]) => {
        acc[value] = key;
        return acc;
      }, {})
    },
    urlMessageTextConditions: function () {
      return Object.entries(MESSAGE_TEXT['-']['conditions']).reduce((acc, [key, value]) => {
        acc[value] = key;
        return acc;
      }, {})
    },
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
      // カタストロフィ
      let catastrophe = this.applySkillEffects(100, this.getSkillEffect('catastrophe')['catastrophe'], idx);
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
          // カタストロフィ
          catastrophe - 100
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
      // カタストロフィ
      let catastrophe = this.applySkillEffects(100, this.getSkillEffect('catastrophe')['catastrophe'], idx);
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
          // カタストロフィ
          catastrophe - 100
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
    playConditions: {
      handler: function() {
        // update URL
        this.setURLParameter(URL_PLAY_CONDITIONS, this.convertPlayConditionsToURL());
      },
      deep: true,
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
        // URLパラメータにセット
        this.urlWeaponTraits = this.convertWeaponTraitsToURL();
      },
      deep: true,
      immediate: false
    },
    imbues: {
      handler: function() {
        // URLパラメータにセット
        this.urlImbues = this.convertImbuesToURL();
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
        // URLパラメータにセット
        this.urlSigils = this.convertSigilsToURL();
      },
      deep: true,
      immediate: false
    },
    comboParams: {
      handler: function() {
        // URLパラメータにセット
        this.setURLParameter(URL_COMBO_CONDITIONS, this.convertComboParamsToURL());
      },
      deep: true,
      immediate: false
    },
    urlWeaponTraits: {
      handler: function() {
        this.urlSkillSetParams = (
          this.urlWeaponTraits
          + '-' + this.urlImbues 
          + '-' + this.urlSigils
        );
      },
      immediate: false
    },
    urlImbues: {
      handler: function() {
        this.urlSkillSetParams = (
          this.urlWeaponTraits
          + '-' + this.urlImbues 
          + '-' + this.urlSigils
        );
      },
      immediate: false
    },
    urlSigils: {
      handler: function() {
        this.urlSkillSetParams = (
          this.urlWeaponTraits
          + '-' + this.urlImbues 
          + '-' + this.urlSigils
        );
      },
      immediate: false
    },
    urlSkillSetParams: {
      handler: function() {
        this.setURLParameter(URL_SKILLSET, this.urlSkillSetParams);
      },
      immediate: false
    },
  }
});
