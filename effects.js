const Effects = {
  activate(type) {
    switch (type) {
      case "bomb":
        this.bomb();
        break;
      case "shuffle":
        this.shuffle();
        break;
      case "extraMove":
        STATE.moves += 5;
        break;
    }
  },

  bomb() {
    for (let i = 0; i < 5; i++) {
      const r = rand(CONFIG.rows);
      const c = rand(CONFIG.cols);
      STATE.board[r][c] = null;
      Particles.spawn(c * CONFIG.tileSize, r * CONFIG.tileSize);
    }
    Gravity.apply();
  },

  shuffle() {
    Board.init();
  }
};
