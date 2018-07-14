// variables for player movement around board
const colSet = 101;
const rowSet = 83;

// Enemy class
class Enemy {
  constructor() {
    this.x = 0;
    this.y = 63;
    this.sprite = 'images/enemy-bug.png';
    this.speed = 5;
  };
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  if (this.x < 500) {
    this.x += this.speed * dt;
  } else {
    this.x = -101;
  };




  //   if ((this.x === player.x) && (this.y === player.y)) {
  //     player.x = rowSet * 2.4;
  //     player.y = colSet * 4;
  //   }
};

// Render enemy

Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};


//METHODS
//update position
//check for collision
//do player's x/y match enemy?
//check win
//do player's x/y reach top?

//reset Player
//set x/y to start position

// Player class
class Player1 {
  constructor() {
    this.sprite = 'images/char-boy.png';
    this.homeX = rowSet * 2.4;
    this.homeY = colSet * 4;
    this.x = this.homeX;
    this.y = this.homeY;

  };

  // move player
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
    };
  };
  render() {
    if (enemy.y === (this.y - 9)) {
      if ((Math.round(enemy.x) >= Math.round(this.x) - 75) &&
        (Math.round(enemy.x) <= Math.round(this.x) + 75)) {

        this.x = this.homeX;
        this.y = this.homeY;
      }
    };
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

    console.log(Math.round(enemy.x), Math.round(enemy.y));
    // console.log('player' + Math.round(this.x), 'player' + this.y);
    console.log('playerx' + Math.round(this.x), 'playery' + (this.y - 9));



  };
};

const player = new Player1();

const allEnemies = [];
const enemy = new Enemy();
allEnemies.push(enemy);




// for (let i = 1; i <= 2; i++) {
//   for (let j = 1; j <= 3; j++) {
//     const enemy = new Enemy();
//     enemy.square = Math.floor(Math.random() * 200) + 20;
//     enemy.y = (j * 83) - 20;
//     allEnemies.push(enemy);
//   }
// };

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