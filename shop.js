const Shop = {
  items: [
    { id: "bomb", price: 200 },
    { id: "shuffle", price: 150 },
    { id: "extraMove", price: 100 }
  ],

  buy(id) {
    const item = this.items.find(i => i.id === id);
    if (!item) return;

    if (Currency.spend(item.price)) {
      Effects.activate(item.id);
    }
  }
};
