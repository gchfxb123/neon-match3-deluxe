const Skins = {
  owned: ["default"],
  equipped: "default",

  all: {
    default: { price: 0 },
    neon: { price: 300 },
    gold: { price: 800 },
    dark: { price: 1200 }
  },

  buy(name) {
    const skin = this.all[name];
    if (!skin) return;

    if (Currency.spend(skin.price)) {
      this.owned.push(name);
      Save.save();
    }
  },

  equip(name) {
    if (this.owned.includes(name)) {
      this.equipped = name;
      Save.save();
    }
  }
};
