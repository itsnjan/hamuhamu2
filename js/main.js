const game = new Game();

function preload() {
  game.preloadGame();
}
function setup() {
  createCanvas(1244, 700);
  game.setupGame();
}
function draw() {
  clear();
  background(game.backgroundImage); //!
  game.drawGame();
}

// add the jump function here:
function keyPressed() {
  if (keyCode === 32) {
    game.player.jump();
  }
}
