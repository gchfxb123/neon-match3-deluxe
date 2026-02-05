const Difficulty = {
  update() {
    if (STATE.combo >= 5) {
      CONFIG.gemTypes = Math.min(8, CONFIG.gemTypes + 1);
    }
  }
};
