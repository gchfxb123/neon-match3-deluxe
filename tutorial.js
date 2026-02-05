const Tutorial = {
  step: 0,
  steps: [
    "Swap gems to match 3!",
    "Combos give more points!",
    "Use power-ups to win!"
  ],

  next() {
    if (this.step < this.steps.length) {
      alert(this.steps[this.step]);
      this.step++;
    }
  }
};
