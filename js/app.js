const colSet = 101;
const rowSet = 83;

// Enemies our player must avoid
var Enemy = function() {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started

  //x position
  //y position
  this.x = 0;
  this.y = 63;

  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.

  //if enemy has not passed right boundary
  //move forward-increment x by dt * speed
  //else
  //reset position to left boundary


};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

// Player1 class

//CONSTRUCTOR

//PROPERTIES
//x pos
//y pos
//sprite

//METHODS
//update position
//check for collision
//do player's x/y match enemy?
//check win
//do player's x/y reach top?

//render
//draw player at current x/y pos

//handle keyboard input
//update player x/y pos from input

//reset Player
//set x/y to start position



class Player1 {
  constructor() {
    this.sprite = 'images/char-boy.png';
    this.homeX = rowSet * 2.4;
    this.homeY = colSet * 4;
    this.x = this.homeX;
    this.y = this.homeY;
  }

  handleInput(input) {
    switch (input) {
      case 'left':
        this.x = this.x > 0 ? this.x - colSet : this.x;
        break;
      case 'up':
        this.y = this.y > 0 ? this.y - rowSet : this.y;
        break;
      case 'right':
        this.x = this.x < 400 ? this.x + colSet : this.x;
        break;
      case 'down':
        this.y = this.y < 400 ? this.y + rowSet : this.y;
        break;
      default:
        break;

    }
  }

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

  }

}

const player = new Player1();

//more original code
// var Player = function() {
//   this.sprite = 'images/char-boy.png';
// };
//
// Player.prototype.update = function(dt) {
//
// };
//
// Player.prototype.render = function() {
//   ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
// };

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

// my orig code
var allEnemies = [];



//new Player object

//init allEnemies array
//for each enemy create and push new Enemy object to allEnemies array
const enemy = new Enemy();

allEnemies.push(enemy);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});