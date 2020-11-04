const game = new Game();

function preload() {
  game.preloadGame();
  backgroundPic = loadImage("../assets/farm3.png");
}
function setup() {
  createCanvas(1244, 700);
  game.setupGame();
}
function draw() {
  clear();
  background(backgroundPic);
  game.drawGame();
}

// add the jump function here:
function keyPressed() {
  if (keyCode === 32) {
    game.player.jump();
  }
}
