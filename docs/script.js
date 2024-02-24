// Add your JavaScript code here
new Vue({
  el: '#app',
  data: {
    lang: 'ja',
    weaponName: 'amenoHabakiri',
    weaponLevel: 150,
    weaponTraits: [],
    weaponTraitTemplate: {
      weaponTraitSkillName: '-',
      weaponTraitSkillLevel: 25,
      weaponTraitSkillAuto: true, 
    },
    imbues: [],
    imbueTemplate: {
      imbueSkillName: '-',
      imbueSkillLevel: 10,
    },
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
    messageText: MESSAGE_TEXT,
    skillStatus: SKILL_STATUS
  },
  created() {
    // ページが読み込まれたときに初期のひな形をリストに追加
    this.createSigils(12);
    this.createImbues(3);
    this.createWeaponTraits(2);
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
    }
  },
  computed: {
    totalSkillLevels: function () {
      // ジーンと加護、武器スキルのレベル合計を計算
      let totalLevels = {};
      // total sigil skill levels
      for (let i=0; i < this.sigils.length; i++) {
        const mainName = this.sigils[i].sigilMainSkillName;
        const subName = this.sigils[i].sigilSubSkillName;
        const mainLevel = this.sigils[i].sigilMainSkillLevelCurrent;
        const subLevel = this.sigils[i].sigilSubSkillAuto ? mainLevel : this.sigils[i].sigilSubSkillLevelCurrent;
        const mainLevelTo = this.sigils[i].sigilMainSkillLevelToBe;
        const subLevelTo = this.sigils[i].sigilSubSkillAuto ? mainLevelTo : this.sigils[i].sigilSubSkillLevelToBe;

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
    totalSkillEffects: function () {
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
      return Object.keys(totalEffects).map(function (key) {return {statusName: key, effects: totalEffects[key]}});
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
    }
  }
});
