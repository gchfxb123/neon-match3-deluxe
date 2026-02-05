const Matcher = {
  find() {
    let matches = [];

    // horizontal
    for (let r = 0; r < CONFIG.rows; r++) {
      let count = 1;
      for (let c = 1; c <= CONFIG.cols; c++) {
        if (c < CONFIG.cols && STATE.board[r][c] === STATE.board[r][c - 1]) {
          count++;
        } else {
          if (count >= 3) {
            for (let i = 0; i < count; i++) {
              matches.push({ r, c: c - 1 - i });
            }
          }
          count = 1;
        }
      }
    }

    // vertical
    for (let c = 0; c < CONFIG.cols; c++) {
      let count = 1;
      for (let r = 1; r <= CONFIG.rows; r++) {
        if (r < CONFIG.rows && STATE.board[r][c] === STATE.board[r - 1][c]) {
          count++;
        } else {
          if (count >= 3) {
            for (let i = 0; i < count; i++) {
              matches.push({ r: r - 1 - i, c });
            }
          }
          count = 1;
        }
      }
    }

    return matches;
  }
};
if (matches.length > 0) {
  STATE.combo++;
  STATE.score += matches.length * CONFIG.baseScore * STATE.combo;
  AudioSystem.play("match");
  Camera.shake(8);
}
