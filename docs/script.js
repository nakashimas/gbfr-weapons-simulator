// Add your JavaScript code here
new Vue({
  el: '#app',
  data: {
    sigils: [],
    sigilTemplate: {
      sigilMainSkillName: 'tyranny',
      sigilMainSkillRank: 4,
      sigilMainSkillLevelCurrent: 15, 
      sigilMainSkillLevelToBe: 15, 
      sigilSubSkillName: 'attackPower', 
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
    console.log(this.sigils)
  },
  methods: {
    createSigils(n) {
      for (let i=0; i < n; i++) {
        this.sigils.push(Object.assign({}, this.sigilTemplate));
      }
    }
  }
});
