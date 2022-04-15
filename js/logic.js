class Game {
    constructor(){
        this.player = null;
        this.asteroid = null;
        this.time = 0;
        this.asteroidArr = [];
        this.laserArr = [];
        this.background = document.getElementById('background');
        this.gameOver = document.getElementById('game-over-screen');
    }
    start(){
        this.player = new Player();
        this.player.playerLooks = this.player.getPlayer();
        this.player.definePosition();
        this.movePlayer();
        this.shoot();
        
        this.background.style.display = 'block';
        this.gameOver.style.display = 'none';

        let audio = new Audio('./music/dr-who-2010-theme.mp3');
        audio.play();

        // this.asteroid = new Asteroid();
        // this.asteroid.asteroidLooks = this.asteroid.getAsteroid();
        // this.asteroid.definePosition();

        setInterval(()=>{
            this.time++;

            // create asteroids
            if(this.time % 15 === 0){
                const newAsteroid = new Asteroid();
                this.asteroidArr.push(newAsteroid);
                newAsteroid.asteroidLooks = newAsteroid.getAsteroid();
                newAsteroid.definePosition();
            }

            // move and detect collision
            this.asteroidArr.forEach((asteroid) => {
              asteroid.moveAsteroid();
              asteroid.definePosition();
              this.objectCollision(asteroid);
              this.eraseAsteroid(asteroid);
              this.laserArr.forEach((laser) => {
                this.laserCollision(laser, asteroid);
            });
            });
            this.laserArr.forEach((laser) => {
                laser.moveLaser();
                laser.definePosition();
            });
            
        }, 30);
    }

    movePlayer(direction){
        if (direction === 'up') {
            this.player.moveUp();
        } else if (direction === 'down') {
            this.player.moveDown();
        } else if (direction === 'right') {
            this.player.moveRight();
        } else if (direction === 'left') {
            this.player.moveLeft();
        } 
        // else if (direction === 'UR') {
        //     this.player.moveUR();
        // } else if (direction === 'DR') {
        //     this.player.moveDR();
        // } else if (direction === 'DL') {
        //     this.player.moveDL();
        // } else if (direction === 'UL') {
        //     this.player.moveUL();
        // }
        this.player.definePosition();
    }

    objectCollision(asteroid){
        if (this.player.positionX < asteroid.positionX + asteroid.width &&
            this.player.positionX + this.player.width > asteroid.positionX &&
            this.player.positionY < asteroid.positionY + asteroid.height &&
            this.player.height + this.player.positionY > asteroid.positionY) {
                this.background.style.display = 'none';
                this.gameOver.style.display = 'block';
        }
    }

    laserCollision(laser, asteroid){
        if (laser.positionX < asteroid.positionX + asteroid.width &&
            laser.positionX + laser.width > asteroid.positionX &&
            laser.positionY < asteroid.positionY + asteroid.height &&
            laser.height + laser.positionY > asteroid.positionY){
                this.laserArr.splice(this.laserArr.indexOf(laser), 1);
                this.asteroidArr.splice(this.asteroidArr.indexOf(asteroid), 1);
                laser.laserLooks.remove();
                asteroid.asteroidLooks.remove();
                console.log('hello');
            }
    }

    eraseAsteroid(asteroid){
        if(asteroid.positionX > 87){
            asteroid.asteroidLooks.remove();
            this.asteroidArr.shift();
        }
    }
    shoot(){
        const laser = new Laser(this.player.positionX, this.player.positionY);
        this.laserArr.push(laser);
        laser.laserLooks = laser.getLaser();
        laser.definePosition();
        this.laserArr.forEach((laser) => {
            laser.moveLaser();
            laser.definePosition();
        })
    }
}

class Player {
    constructor(){
        this.positionX = 45;
        this.positionY = 45;
        this.height = 8;
        this.width = 3;
        this.playerLooks = null; // this is like de the DOMelement
    }
    moveUp(){
        if(this.positionY < 94) {
        this.positionY+=5;
        }
    }
    moveDown(){
        if(this.positionY > 2) {
        this.positionY-=5; 
        }
    }
    moveRight(){
        if(this.positionX < 97) {
        this.positionX+=3;
        }
    }
    moveLeft(){
        if(this.positionX > 1) {
            this.positionX-=3;
        }
    }
    // moveUR(){
    //     (this.positionX+=2) && (this.positionY+=4);
    // }
    // moveDR(){
    //     (this.positionX+=2) && (this.positionY-=4);
    // }
    // moveDL(){
    //     (this.positionX-=2) && (this.positionY-=4);
    // }
    // moveUL(){
    //     (this.positionX-=2) && (this.positionY+=4);
    // }
    getPlayer(){
        const background = document.getElementById('background');
        const rocket = document.createElement ('div');
        rocket.className = "rocket"
        background.appendChild(rocket);
        return rocket;
    }
    definePosition(){
        this.playerLooks.style.left = this.positionX +'vw';
        this.playerLooks.style.bottom = this.positionY +'vh';
    }
}

const newPlayer = new Player();


class Asteroid {
    constructor(){
        this.positionX = -10;
        this.positionY = Math.random() * (85 - 0);
        this.height = 20;
        this.width = 10;
        this.asteroidLooks = null;
    }
    moveAsteroid(){
        this.positionX++;
    }
    getAsteroid(){
        const background = document.getElementById('background');
        const rock = document.createElement ('div');
        rock.className = "rock";
        background.appendChild(rock);
        return rock;
    }
    definePosition(){
        this.asteroidLooks.style.left = this.positionX +'vw';
        this.asteroidLooks.style.bottom = this.positionY +'vh';
    }

}
const newAsteroide = new Asteroid();

class Laser {
    constructor(positionX, positionY){
        this.height = 1;
        this.width = 0.5;
        this.positionX = positionX;
        this.positionY = positionY;
        this.laserLooks = null;
    }
    moveLaser(){
        this.positionX --;
    } 
    getLaser(){
        const background = document.getElementById('background');
        const pew = document.createElement ('div');
        pew.className = "pew";
        background.appendChild(pew);
        return pew;
    }
    definePosition(){
        this.laserLooks.style.left = this.positionX +'vw';
        this.laserLooks.style.bottom = this.positionY +'vh';
    }
  }