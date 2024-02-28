// Add your JavaScript code here
new Vue({
  el: '#app',
  data: {
    lang: 'ja',
    // status
    healthRate: 100,
    healthBase: 2500,
    attackPowerBase: 0, 
    criticalHitRateBase: 0, 
    stunPowerBase: 0,
    playerConditions: {
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
  },
  methods: {
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
    sumSkillEffects(a, b) {
      // マイナス記号・パーセント表記などを考慮して足し算を行う
      aPercentile = parseInt(a.split("|")[1].replace("%", ""));
      aNumerical = parseInt(a.split("|")[0]);
      bPercentile = parseInt(b.split("|")[1].replace("%", ""));
      bNumerical = parseInt(b.split("|")[0]);
      return '' + (aNumerical + bNumerical) + '|' + (aPercentile + bPercentile) + '%'
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

      skillEffectsPercentile = parseInt(skillEffectValue.split("|")[1].replace("%", ""));
      skillEffectsNumerical = parseInt(skillEffectValue.split("|")[0]);
      return (parseInt(baseStatus) + skillEffectsNumerical) * (100 + skillEffectsPercentile) / 100
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
      this.healthBase = weaponsStatus['health'] + this.mirageMunitions * 10 + characterStatus['health'];
      this.attackPowerBase = weaponsStatus['attackPower'] + this.mirageMunitions * 2 + characterStatus['attackPower'];
      this.criticalHitRateBase = weaponsStatus['criticalHitRate'] + characterStatus['criticalHitRate'];
      this.stunPowerBase = weaponsStatus['stunPower'] + characterStatus['stunPower'];
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
            parseInt(totalLevels[mainName][0]) + parseInt(mainLevel),
            parseInt(totalLevels[mainName][1]) + parseInt(mainLevel),
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
            parseInt(totalLevels[mainName][0]) + parseInt(mainLevel),
            parseInt(totalLevels[mainName][1]) + parseInt(mainLevelTo),
          ]
        } else {
          totalLevels[mainName] = [mainLevel, mainLevelTo]
        }
        if (subName in totalLevels) {
          totalLevels[subName] = [
            parseInt(totalLevels[subName][0]) + parseInt(subLevel),
            parseInt(totalLevels[subName][1]) + parseInt(subLevelTo),
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
            parseInt(totalLevels[mainName][0]) + parseInt(mainLevel),
            parseInt(totalLevels[mainName][1]) + parseInt(mainLevel),
          ]
        } else {
          totalLevels[mainName] = [mainLevel, mainLevel]
        }
      }
      // convert map to arraylist
      return Object.keys(totalLevels).map(function (key) {return {skillName: key, level: totalLevels[key]}});
    },
    totalSkillEffectMaps: function () {
      // スキルの上昇量を計算
      let totalEffects = {};
      for (let i=0; i < this.totalSkillLevels.length; i++) {
        const skillName = this.totalSkillLevels[i]['skillName'];
        let skillLevel = this.totalSkillLevels[i]['level'][0];
        let skillLevelToBe = this.totalSkillLevels[i]['level'][1];
        // 最大レベルで丸める
        skillLevel = skillLevel > this.skillStatus[skillName]['maxLevel'] ? this.skillStatus[skillName]['maxLevel'] : skillLevel;
        skillLevelToBe = skillLevelToBe > this.skillStatus[skillName]['maxLevel'] ? this.skillStatus[skillName]['maxLevel'] : skillLevelToBe;
        // 最小レベルで丸める
        skillLevel = skillLevel < this.skillStatus[skillName]['minLevel'] ? this.skillStatus[skillName]['minLevel'] : skillLevel;
        skillLevelToBe = skillLevelToBe < this.skillStatus[skillName]['minLevel'] ? this.skillStatus[skillName]['minLevel'] : skillLevelToBe;
        // 効果量
        let skillEffect = this.skillStatus[skillName]['levels'][parseInt(skillLevel) - this.skillStatus[skillName]['minLevel']];
        let skillEffectToBe = this.skillStatus[skillName]['levels'][parseInt(skillLevelToBe) - this.skillStatus[skillName]['minLevel']];
        // 合計を計算
        for (let key in skillEffect){
          if (key in totalEffects) {
            totalEffects[key] = [
              this.sumSkillEffects(totalEffects[key][0], skillEffect[key]), 
              this.sumSkillEffects(totalEffects[key][0], skillEffectToBe[key]),
            ]
          } else {
            totalEffects[key] = [skillEffect[key], skillEffectToBe[key]]
          }
        }
      }
      // convert map to arraylist
      return totalEffects;
    },
    totalSkillEffects: function () {
      // convert map to arraylist
      const totalEffects = this.totalSkillEffectMaps;
      return Object.keys(totalEffects).map(function (key) {return {statusName: key, effects: totalEffects[key]}});
    },
    health: function() {
      // 体力を計算
      return this.healthBase;
    },
    attackPower: function() {
      // 攻撃力を計算
      return this.attackPowerBase;
    },
    criticalHitRate: function() {
      // クリティカル率を計算
      return this.applySkillEffects(this.criticalHitRateBase, this.totalSkillEffectMaps['criticalHitRate'], 0);
    },
    stunPower: function() {
      // スタン値を計算
      return this.applySkillEffects(this.stunPowerBase, this.totalSkillEffectMaps['stunPower'], 0);
    },
    healthToBe: function() {
      // 体力を計算 (ToBeの方のレベルで計算)
      return this.healthBase;
    },
    attackPowerToBe: function() {
      // 攻撃力を計算 (ToBeの方のレベルで計算)
      return this.attackPowerBase;
    },
    criticalHitRateToBe: function() {
      // クリティカル率を計算 (ToBeの方のレベルで計算)
      return this.applySkillEffects(this.criticalHitRateBase, this.totalSkillEffectMaps['criticalHitRate'], 1);
    },
    stunPowerToBe: function() {
      // スタン値を計算 (ToBeの方のレベルで計算)
      return this.applySkillEffects(this.stunPowerBase, this.totalSkillEffectMaps['stunPower'], 1);
    },
  },
  watch: {
    sigils: {
      handler: function(newValue, oldValue) {
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
    weaponName: {
      handler: function(newValue, oldValue) {
        // 武器スキルを自動補完
        this.resetWeaponSkills();
        // 武器ステータスを自動補完
        this.resetWeaponStatus();
      },
      immediate: false
    },
    weaponLevel: {
      handler: function(newValue, oldValue) {
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
      },
      immediate: false
    },
    weaponTraits: {
      handler: function(newValue, oldValue) {
        // 武器スキルを自動補完
        this.resetWeaponSkills();
        // 武器ステータスを自動補完
        this.resetWeaponStatus();
      },
      deep: true,
      immediate: false
    },
    mirageMunitions: {
      handler: function(newValue, oldValue) {
        // 武器ステータスを自動補完
        this.resetWeaponStatus();
      },
      immediate: false
    },
  }
});
