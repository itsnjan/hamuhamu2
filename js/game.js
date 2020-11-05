let fruits = [];

class Game {
  constructor() {}
  preloadGame() {
    console.log("this is the game preload");
    // this.backgroundImages = [
    //   { src: loadImage("../assets/background/plx-1.png"), x: 0, speed: 0 },
    //   { src: loadImage("../assets/background/plx-2.png"), x: 0, speed: 1 },
    //   { src: loadImage("../assets/background/plx-3.png"), x: 0, speed: 2 },
    //   { src: loadImage("../assets/background/plx-4.png"), x: 0, speed: 3 },
    //   { src: loadImage("../assets/background/plx-5.png"), x: 0, speed: 4 },
    // ];
    this.playerImage = loadImage("../assets/player/bb8.gif");
    this.coinImage = loadImage("../assets/coins/tile000.png");
    this.backgroundImage = loadImage("../assets/farm3.png");
    this.seedImage = loadImage("../assets/seed-50x50.png")
  }
  setupGame() {
    console.log("this is the game setup");
    // backgroundImage = game.backgroundImage;
    //  initialize background + player here
    // NB: we DON'T initialize the coins here because we create them dynamically in the draw
    // this.background = new Background(this.backgroundImages);
    this.player = new Player(this.playerImage);
    // this.background = this.farmImage;
    this.obstacles = [];
  }

  drawGame() {
    // console.log("this is the game draw");
    // this.background = this.farmImage;
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
    // define the obstacle drawing logic + add a new obstacle to  the array in the constructor with the image passed into it
  }
  makeSeeds() {
    console.log("this would be a seed")
    if (fruits.length <= 3) {
    fruits.push(createSprite(mouseX, mouseY, 30, 30)); }
  //if no image or animation is associated it will be a rectancle of the specified size
  //and a random color

  //now you can use the variable to set properties
  //e.g. a random velocity on the x and y coordinates
  // s.velocity.x = random(-5, 5);
  // s.velocity.y = random(-5, 5);
  console.log("fruits Array now", fruits);
  }
}