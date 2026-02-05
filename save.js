const Save = {
  key: "NEON_MATCH3_SAVE",

  save() {
    localStorage.setItem(this.key, JSON.stringify({
      coins: Currency.coins,
      level: Levels.current
    }));
  },

  load() {
    const data = JSON.parse(localStorage.getItem(this.key));
    if (!data) return;

    Currency.coins = data.coins || 0;
    Levels.current = data.level || 1;
  }
};
save() {
  localStorage.setItem(this.key, JSON.stringify({
    coins: Currency.coins,
    level: Levels.current,
    skins: Skins.owned,
    equipped: Skins.equipped,
    inventory: Inventory.boosters,
    leaderboard: Leaderboard.scores
  }));
}
