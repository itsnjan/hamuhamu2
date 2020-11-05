let fruits = [];
let score =0;

class Game {
  constructor() {}
  preloadGame() {
    console.log("this is the game preload");
    this.playerImage = loadImage("../assets/player/bb8.gif");
    this.coinImage = loadImage("../assets/coins/tile000.png");
    this.backgroundImage = loadImage("../assets/farm3.png");
    this.seedImage = loadImage("../assets/seed-50x50.png")
  }
  setupGame() {
    console.log("this is the game setup");
    //  initialize background + player here
    // NB: we DON'T initialize the coins here because we create them dynamically in the draw
    // this.background = new Background(this.backgroundImages);
    this.player = new Player(this.playerImage);
    // this.background = this.farmImage;
    this.obstacles = [];
    let hamster = createSprite(width/2, height/2, 50, 50);
    this.hamster = hamster;
    this.hamster.height = 50;
    this.hamster.width = 50;
  }

  drawGame() {
    // console.log("this is the game draw");
    background(this.backgroundImage);//!
    this.player.drawPlayer();
    if (frameCount % 80 === 0) {
      console.log("this will be the push event");
      this.obstacles.push(new Obstacle(this.coinImage));
      this.makeSeeds();
    }

    this.obstacles.forEach(function (obstacle) {
      obstacle.drawObstacle();
    });
    //  call the draw functions for the player + the background
    this.obstacles = this.obstacles.filter((obstacle) => {
      if (obstacle.collision(this.player) || obstacle.x < 0) {
        return false;
      } else {
        return true;
      }
    });
        // * SCORE * //
        score = this.hamster.width-44; //tba -50 instead of 44
        strokeWeight(0);
        fill("#233C2B");
        rect(12,12,200,50,10,10,10,10);
        fill(255,255,255);
        textSize(25);
        text(`Nom-Score: ${score}`,20,45);
        // * Ende Score * ///
    // define the obstacle drawing logic + add a new obstacle to  the array in the constructor with the image passed into it
  }
  makeSeeds() {
    console.log("this would be a seed")
    if (fruits.length <= 3) {
    fruits.push(createSprite(mouseX, mouseY, 30, 30)); 
  }

  //if no image or animation is associated it will be a rectancle of the specified size
  //and a random color

  //now you can use the variable to set properties
  //e.g. a random velocity on the x and y coordinates
  // s.velocity.x = random(-5, 5);
  // s.velocity.y = random(-5, 5);
  console.log("fruits Array now", fruits);
  }
  win () {
    if (this.hamster.width > 400) {
    console.log("You've won! Go on and nom some more!"); 
    }
  }
  // loose () {
  //   if (hamster collided with enemy)
  //   console.log("Oh noes, that was scaryy! And so close! You run away and leave all your seeds behind.")
  // }
}