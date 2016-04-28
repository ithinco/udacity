var ENEMYNUMBER = 3;
var SPEEDLEVEL = 3;

var TILE_WIDTH = 101;
var TILE_HEIGHT = 83;


// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

    // Setting the Enemy initial location
    this.x = 0;
    this.y = (Math.floor((Math.random() * 10) % 3) * TILE_HEIGHT) + 71;
    this.orix = this.x;
    this.oriy = this.y;

    //Setting the Enemy speed
    this.speed = Math.floor(Math.random() * TILE_WIDTH);
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    //Updates the Enemy location
    this.x += this.speed * dt * SPEEDLEVEL;

    if (this.x >= TILE_WIDTH * 5) {
        this.x = this.orix;
    };

    //Handles collision with the Player
    if (((this.x + TILE_WIDTH >= player.x && this.x <= player.x) ||
         (player.x + TILE_WIDTH >= this.x && player.x <= this.x)) && this.y == player.y){
        player.reset();
    };
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(){
    this.sprite = 'images/char-boy.png';
    this.x = Math.floor(Math.floor(Math.random() * 10) / 2) * TILE_WIDTH;
    this.y = Math.floor(Math.floor(Math.random() * 10) / 5) * TILE_HEIGHT + 320;
    this.orix = this.x;
    this.oriy = this.y;
};

Player.prototype.update = function(direction) {
    //Updates the Player location
    switch(direction){
        case "left":
            if (this.x > 100) {
                this.x -= TILE_WIDTH;
            }
            break;
        case "right":
            if (this.x < TILE_WIDTH * 4) {
                this.x += TILE_WIDTH;
            }
            break;
        case "up":
            if (this.y > 0) {
                this.y -= TILE_HEIGHT;
                if (this.y < 0) {
                    this.reset();
                }
            }
            break;
        case "down":
            if (this.y < 403) {
                this.y += TILE_HEIGHT;
            }
            break;
    }
    //Handles collision with Enemies.

};

Player.prototype.reset = function(){
    this.x = this.orix;
    this.y = this.oriy;
}

Player.prototype.handleInput = function(key_code){
    this.update(key_code);
}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [];
while(allEnemies.length < ENEMYNUMBER) {
    var tmpEm = new Enemy();
    allEnemies.push(tmpEm);
};

var player = new Player();

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
