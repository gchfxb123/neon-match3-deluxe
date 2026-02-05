const Inventory = {
  boosters: {
    bomb: 0,
    shuffle: 0
  },

  add(type) {
    this.boosters[type]++;
    Save.save();
  },

  use(type) {
    if (this.boosters[type] > 0) {
      this.boosters[type]--;
      Effects.activate(type);
      Save.save();
    }
  }
};
