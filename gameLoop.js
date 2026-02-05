const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

function drawBoard() {
  for (let r = 0; r < CONFIG.rows; r++) {
    for (let c = 0; c < CONFIG.cols; c++) {
      const g = STATE.board[r][c];
      if (g !== null) {
        ctx.fillStyle = `hsl(${g * 60},80%,60%)`;
        ctx.fillRect(
          c * CONFIG.tileSize,
          r * CONFIG.tileSize,
          CONFIG.tileSize - 2,
          CONFIG.tileSize - 2
        );
      }
    }
  }
}

function loop() {
  if (!STATE.paused) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBoard();
    Particles.update(ctx);
    UI.update();
  }
  requestAnimationFrame(loop);
}
