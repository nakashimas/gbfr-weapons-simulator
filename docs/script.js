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
    },
    // weapons
    weaponName: 'amenoHabakiri',
    weaponLevel: 160,
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
      // 
      aPercentile = parseInt(a.split("|")[1].replace("%", ""));
      aNumerical = parseInt(a.split("|")[0]);
      bPercentile = parseInt(b.split("|")[1].replace("%", ""));
      bNumerical = parseInt(b.split("|")[0]);
      return '' + (aNumerical + bNumerical) + '|' + (aPercentile + bPercentile) + '%'
    },
    resetWeaponSkills() {
      for (let i=0; i < this.weaponTraits.length; i++) {
        const weaponsSkill = this.weaponsStatus[this.weaponName]['levelsSkill'][this.weaponLevel - this.weaponsStatus[this.weaponName]['minLevel']];
        if (this.weaponTraits[i].weaponTraitSkillAuto && Object.keys(weaponsSkill).length > i) {
          this.weaponTraits[i].weaponTraitSkillName = Object.keys(weaponsSkill)[i];
          this.weaponTraits[i].weaponTraitSkillLevel = weaponsSkill[Object.keys(weaponsSkill)[i]];
        }
      }
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
      return this.criticalHitRateBase;
    },
    stunPower: function() {
      // スタン値を計算
      return this.stunPowerBase;
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
      },
      immediate: false
    },
    weaponTraits: {
      handler: function(newValue, oldValue) {
        // 武器スキルを自動補完
        this.resetWeaponSkills();
      },
      deep: true,
      immediate: false
    },
  }
});
