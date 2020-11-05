let fruits = [];
let score = 0;

class Game {
  constructor() {}
  preloadGame() {
    console.log("this is the game preload");
    this.playerImage = loadImage("./assets/player/bb8.gif");
    this.coinImage = loadImage("./assets/coins/tile000.png");
    this.backgroundImage = loadImage("./assets/farm3.png");
    this.seedImage = loadImage("./assets/seed-50x50.png")
    this.hamsterImage50 = loadImage("./assets/hamster-gray-50.png");
  }
  setupGame() {
    console.log("this is the game setup");
    //  initialize background + player here
    // NB: we DON'T initialize the coins here because we create them dynamically in the draw
    // this.background = new Background(this.backgroundImages);
    this.player = new Player(this.playerImage);
    // this.background = this.farmImage;
    this.obstacles = [];
    let hamster = createSprite(width / 2, height / 2, 50, 50);
    this.hamster = hamster;
    this.hamster.addImage(this.hamsterImage50);
    this.hamster.height = 50;
    this.hamster.width = 50;
    this.hamster.area = (this.hamster.height*this.hamster.width);
    this.hamster.areaSqrt = Math.sqrt(this.hamster.area)

  }

  drawGame() {
    // console.log("this is the game draw");
    background(this.backgroundImage); //!
    this.player.drawPlayer();
    if (frameCount % 80 === 0) {
      console.log("this will be the push event");
      this.obstacles.push(new Obstacle(this.coinImage));
      this.makeSeeds();
      this.checkSeeds();
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
    score = this.hamster.width - 44; //tba -50 instead of 44
    strokeWeight(0);
    fill("#233C2B");
    rect(12, 12, 200, 50, 10, 10, 10, 10);
    fill(255, 255, 255);
    textSize(25);
    text(`Nom-Score: ${score}`, 20, 45);
    // * Ende Score * ///
    // define the obstacle drawing logic + add a new obstacle to  the array in the constructor with the image passed into it
  }// End of game.draw()
  makeSeeds() {
    console.log("this would be a seed")
    if (fruits.length < 4) {
      let fruit = createSprite(Math.round(random(width)), Math.round(random(height)), 50, 50);
      fruit.bonus = 22; // tbd set image 
      fruit.addImage(this.seedImage);
      fruits.push(fruit);
      // fruits.push()(createSprite(mouseX, mouseY, 30, 30)); 
    }
  }//end makeSeeds()

  checkSeeds() {
    fruits.forEach((element) => {
        console.log("this is the checkSeed", element)
        if (this.hamster.collide(element)) {
          console.log("it's collided");
          // adjust hamster size
          // tbd: put in external function
         let areaSqrt = (Math.round(Math.sqrt((element.width*element.height)+(this.hamster.width*this.hamster.height))));
         this.hamster.height = areaSqrt;
         this.hamster.width = this.hamster.height;
         this.hamsterImage50.resize(this.hamster.height,this.hamster.width)
         console.log("new area sqrt",areaSqrt);
         //tbd: remove element
         element.remove();
        } else {
          console.log("it didn't collide");
        }
      }
    )
  } // end check checkSeeds()
} // end of draw
// // !!! 
// tbd: put this all into a filter 
// checkSeeds() {
//   fruits.forEach((element) => {
//     console.log(element);
//   //   if (this.hamster.collide(element)) {
//   //     return false;
//   //   } else {
//   //     console.log("it collided");
//   //     score += 10;
//   //     // tbd: increase hamster size
//   //     // game.hamster.width+= Math.sqrt(element.width*element.height+this.hamster.width*this.hamster.height)
//   //     consolelog("updated score", score);
//   //     return true; 
//   //   }
//   }
//   )
// }

// //if no image or animation is associated it will be a rectancle of the specified size
// //and a random color

// //now you can use the variable to set properties
// //e.g. a random velocity on the x and y coordinates
// // s.velocity.x = random(-5, 5);
// // s.velocity.y = random(-5, 5);
// console.log("fruits Array now", fruits);
// }

// * WIN & LOSE * //
// tbd: add pop-up
// win () {
//   if (this.hamster.width > 400) {
//   console.log("You've won! Go on and nom some more!"); 
//   }
// }
// loose () {
//   if (hamster collided with enemy)
//   console.log("Oh noes, that was scaryy! And so close! You run away and leave all your seeds behind.")
// }

// falls was kaputt geht nochmal der loop. er muss ausserhalb der draw! 
// checkSeeds() {
//   fruits.forEach((element) => {
//     console.log("this is the checkSeed", element)
//     if (this.hamster.collide(element)) {
//       console.log("it's collided")
//     }
//     else {
//       console.log("it didn't collide");
//     }

//   }

//   )
// }