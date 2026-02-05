const Animation = {
  scale: 1,

  pop() {
    this.scale = 1.2;
  },

  update() {
    this.scale += (1 - this.scale) * 0.2;
  }
};
