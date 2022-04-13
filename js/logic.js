class Game {
    constructor(){
        this.player = null;
        this.asteroid = null;
        this.time = 0;
        this.asteroids = [];
        this.background = document.getElementById('background');
        this.gameOver = document.getElementById('game-over-screen');
    }
    start(){
        this.player = new Player();
        this.player.playerLooks = this.player.getPlayer();
        this.player.definePosition();
        this.movePlayer();

        this.background.style.display = 'block';
        this.gameOver.style.display = 'none'

        // this.asteroid = new Asteroid();
        // this.asteroid.asteroidLooks = this.asteroid.getAsteroid();
        // this.asteroid.definePosition();

        setInterval(()=>{
            this.time++;

            // create asteroids
            if(this.time % 30 === 0){
                const newAsteroid = new Asteroid();
                this.asteroids.push(newAsteroid);
                newAsteroid.asteroidLooks = newAsteroid.getAsteroid();
                newAsteroid.definePosition();
            }

            // move and detect collision
            this.asteroids.forEach((asteroid) => {
              asteroid.moveAsteroid();
              asteroid.definePosition();
              this.objectCollision(asteroid);
            });

            
        }, 50);
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
}

class Player {
    constructor(){
        this.positionX = 45;
        this.positionY = 45;
        this.height = 5;
        this.width = 3;
        this.playerLooks = null; // this is like de the DOMelement
    }
    moveUp(){
        if(this.positionY < 94) {
        this.positionY+=4;
        }
    }
    moveDown(){
        if(this.positionY > 2) {
        this.positionY-=4; 
        }
    }
    moveRight(){
        if(this.positionX < 97) {
        this.positionX+=2;
        }
    }
    moveLeft(){
        if(this.positionX > 1) {
            this.positionX-=2;
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
        this.positionY = Math.random() * (90 - 0);
        this.height = 20;
        this.width = 10;
        this.asteroidLooks = null;
    }
    moveAsteroid(){
        this.positionX++;
        //  if(this.positionX >= 100){
        //      .remove                                 // OJOJO overflow hidden (CSS)
        // }
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