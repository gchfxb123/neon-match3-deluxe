const UI = {
  scoreEl: document.getElementById("score"),
  comboEl: document.getElementById("combo"),
  overlay: document.getElementById("overlay"),

  update() {
    this.scoreEl.textContent = "Score: " + STATE.score;
    this.comboEl.textContent = "Combo: x" + STATE.combo;
  },

  pause(show) {
    this.overlay.classList.toggle("hidden", !show);
  }
};
updateCoins() {
  document.getElementById("coins").textContent =
    "Coins: " + Currency.coins;
},

updateLevel() {
  document.getElementById("level").textContent =
    "Level " + Levels.current;
}
