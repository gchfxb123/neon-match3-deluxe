const Gravity = {
  apply() {
    for (let c = 0; c < CONFIG.cols; c++) {
      let pointer = CONFIG.rows - 1;
      for (let r = CONFIG.rows - 1; r >= 0; r--) {
        if (STATE.board[r][c] !== null) {
          STATE.board[pointer][c] = STATE.board[r][c];
          if (pointer !== r) STATE.board[r][c] = null;
          pointer--;
        }
      }
      while (pointer >= 0) {
        STATE.board[pointer][c] = rand(CONFIG.gemTypes);
        pointer--;
      }
    }
  }
};
