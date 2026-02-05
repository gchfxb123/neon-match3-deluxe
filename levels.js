const Levels = {
  current: 1,

  data: [
    { moves: 20, target: 500 },
    { moves: 18, target: 800 },
    { moves: 16, target: 1200 },
    { moves: 14, target: 2000 },
    { moves: 12, target: 3000 }
  ],

  get() {
    return this.data[this.current - 1] || this.data[this.data.length - 1];
  },

  next() {
    this.current++;
    Save.save();
  }
};
