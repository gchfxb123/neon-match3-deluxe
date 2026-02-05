const AudioSystem = {
  bgm: document.getElementById("bgm"),
  click: document.getElementById("click"),
  match: document.getElementById("match"),
  combo: document.getElementById("comboSound"),

  init() {
    document.body.addEventListener("click", () => {
      this.bgm.volume = 0.4;
      this.bgm.play();
    }, { once: true });
  },

  play(sound) {
    if (this[sound]) {
      this[sound].currentTime = 0;
      this[sound].play();
    }
  }
};
