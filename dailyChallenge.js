const DailyChallenge = {
  today: null,

  generate() {
    const day = new Date().toDateString();
    this.today = {
      date: day,
      goal: 1500 + rand(2000),
      reward: 200 + rand(300),
      completed: false
    };
    Save.save();
  },

  check(score) {
    if (!this.today.completed && score >= this.today.goal) {
      this.today.completed = true;
      Currency.add(this.today.reward);
      alert("Daily Challenge Completed!");
    }
  }
};
