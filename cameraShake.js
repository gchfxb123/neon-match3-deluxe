const Camera = {
  shakeTime: 0,

  shake(intensity = 5) {
    this.shakeTime = intensity;
  },

  apply(ctx) {
    if (this.shakeTime > 0) {
      const dx = rand(this.shakeTime) - this.shakeTime / 2;
      const dy = rand(this.shakeTime) - this.shakeTime / 2;
      ctx.translate(dx, dy);
      this.shakeTime--;
    }
  }
};
