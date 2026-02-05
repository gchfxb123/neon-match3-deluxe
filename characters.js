const Characters = [
  { id: "runner", bonus: "combo", value: 1.2 },
  { id: "strategist", bonus: "score", value: 1.3 },
  { id: "lucky", bonus: "drop", value: 1.15 },
  { id: "veteran", bonus: "stability", value: 1.25 }
];

const PlayerCharacter = {
  current: "runner",

  get() {
    return Characters.find(c => c.id === this.current);
  }
};
