const Currency = {
  coins: 0,

  add(amount) {
    this.coins += amount;
    UI.updateCoins();
    Save.save();
  },

  spend(amount) {
    if (this.coins >= amount) {
      this.coins -= amount;
      UI.updateCoins();
      Save.save();
      return true;
    }
    return false;
  }
};
