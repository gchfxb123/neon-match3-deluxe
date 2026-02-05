function rand(max) {
  return Math.floor(Math.random() * max);
}

function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v));
}

function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}
