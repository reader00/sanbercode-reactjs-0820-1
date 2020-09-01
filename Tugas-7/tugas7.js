// ------------------------- Soal 1 -------------------------
// Release 1
class Animal {
  constructor(name) {
    this._band = 4;
    this._cold_blooded = false;
    this._name = name;
  }

  get name() {
    return this._name;
  }

  get legs() {
    return this._band;
  }

  get cold_blooded() {
    return this._cold_blooded;
  }

  set name(name) {
    this._name;
  }

  set legs(legs) {
    this._band = legs;
  }

  set cold_blooded(cb) {
    this._cold_blooded = cb;
  }
}

var sheep = new Animal("shaun");

console.log(sheep.name);
console.log(sheep.legs);
console.log(sheep.cold_blooded);

// Release 2
console.log();
class Frog extends Animal {
  jump() {
    console.log("hop hop");
  }
}

class Ape extends Animal {
  constructor(name) {
    super(name);
    this._band = 2;
  }

  yell() {
    console.log("Auooo");
  }
}

var sungokong = new Ape("kera sakti");
sungokong.yell(); // "Auooo"

var kodok = new Frog("buduk");
kodok.jump(); // "hop hop"

// ------------------------- Soal 2 -------------------------
console.log();

class Clock {
  constructor({ template }) {
    this._template = template;
    this._timer = null;
  }

  render = () => {
    var date = new Date();

    var hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    var mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    var secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    var output = this._template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
  };

  stop() {
    clearInterval(this._timer);
  }

  start() {
    this.render();
    this._timer = setInterval(this.render, 1000);
  }
}

var clock = new Clock({ template: "h:m:s" });
clock.start();
