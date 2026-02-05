const Leaderboard = {
  scores: [],

  submit(score) {
    this.scores.push({
      name: "Player",
      score,
      time: Date.now()
    });

    this.scores.sort((a, b) => b.score - a.score);
    this.scores = this.scores.slice(0, 10);
    Save.save();
  }
};
