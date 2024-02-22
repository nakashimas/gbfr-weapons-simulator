// Add your JavaScript code here
new Vue({
  el: '#app',
  data: {
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
    messageText: MESSAGE_TEXT
  },
  created() {
    // ページが読み込まれたときに初期のひな形をリストに追加
    this.createSigils(12);
  },
  methods: {
    createSigils(n) {
      for (let i=0; i < n; i++) {
        this.sigils.push(Object.assign({}, this.sigilTemplate));
      }
    }
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
