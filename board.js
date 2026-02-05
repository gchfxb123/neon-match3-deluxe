const Board = {
  init() {
    STATE.board = [];
    for (let r = 0; r < CONFIG.rows; r++) {
      STATE.board[r] = [];
      for (let c = 0; c < CONFIG.cols; c++) {
        STATE.board[r][c] = rand(CONFIG.gemTypes);
      }
    }
  },

  swap(a, b) {
    const t = STATE.board[a.r][a.c];
    STATE.board[a.r][a.c] = STATE.board[b.r][b.c];
    STATE.board[b.r][b.c] = t;
  }
};
