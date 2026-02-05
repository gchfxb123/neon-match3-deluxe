AudioSystem.init();
Board.init();
UI.update();
loop();

document.getElementById("pauseBtn").onclick = () => {
  STATE.paused = true;
  UI.pause(true);
};

document.getElementById("resume").onclick = () => {
  STATE.paused = false;
  UI.pause(false);
};

document.getElementById("restart").onclick = () => {
  STATE.score = 0;
  STATE.combo = 1;
  Board.init();
  UI.pause(false);
};
AudioSystem.init();
Board.init();
UI.update();
loop();

document.getElementById("pauseBtn").onclick = () => {
  STATE.paused = true;
  UI.pause(true);
};

document.getElementById("resume").onclick = () => {
  STATE.paused = false;
  UI.pause(false);
};

document.getElementById("restart").onclick = () => {
  STATE.score = 0;
  STATE.combo = 1;
  Board.init();
  UI.pause(false);
};
