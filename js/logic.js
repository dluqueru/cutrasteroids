class Game {
    constructor(){
        this.player = null;
        this.asteroid = null;
        this.time = 0;
        this.asteroids = [];
    }
    start(){
        this.player = new Player();
        this.player.playerLooks = this.player.getPlayer();
        this.player.definePosition();
        this.movePlayer();
        this.asteroid = new Asteroid();
        this.asteroid.asteroidLooks = this.asteroid.getAsteroid();
        this.asteroid.definePosition();

        setInterval(()=>{
            this.asteroid.moveAsteroid()
            this.asteroid.definePosition()
            // this.objectCollision(asteroid);

            if(this.time % 10 === 0){
                const newAsteroid = new Asteroid();
                newAsteroid.asteroidLooks = this.asteroid.getAsteroid();
                this.asteroids.push(newAsteroid);
            }
            this.time++;
        }, 100)
        
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
    // objectCollision(player, asteroid){
    //     let dx = (player.positionX + player.width) - (asteroid.positionX + asteroid.width);
    //     let dy = (player.positionY + player.height) - (asteroid.positionY + asteroid.height);
    //     let distance = Math.sqrt(dx * dx + dy * dy);

    //     if (distance < player.width + asteroid.width) {
    //     // collision detected!
    //     console.log('Game Over champ');
    //     }
    // }
}

class Player {
    constructor(){
        this.positionX = 45;
        this.positionY = 45;
        this.height = 5;
        this.width = 5;
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
        this.positionX = 20;
        this.positionY = 20;
        this.height = 20;
        this.width = 20;
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
const newAsteroid = new Asteroid();