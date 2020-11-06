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
  game.drawGame();
  drawSprites();
  game.hamster.position.x = mouseX; //tbd: maybe this could be put into game.js?
  game.hamster.position.y = mouseY;

  // win condition
update();
} // add function draw()


function update() {
  if (game.winning) {
    console.log("you win!!!");
    image(game.goldhamsterImage, 0, 0);
    frameRate(0);
  }
}
// add the jump function here:
function keyPressed() {
  if (keyCode === 87) {
    game.winning = true;
  }
}