class Game {
    constructor(){
        this.player = null;
    }
    start(){
        this.player = new Player();
        this.player.playerLooks = this.player.getPlayer();
        //this.player.getPlayer()
        this.player.definePosition();
        this.movePlayer();
    }
    movePlayer(direction){
        if (direction === 'up') {
            player.moveUp();
        } else if (direction === 'down') {
            player.moveDown();
        } else if (direction === 'right') {
            player.moveRight();
        } else if (direction === 'left') {
            player.moveLeft();
        }
    }

}

class Player {
    constructor(){
        this.positionX = 50;
        this.positionY = 50;
        this.playerLooks = null; // this is like de the DOMelement
    }
    moveUp(){
        if(this.positionY < 100) {
        this.positionY++;
        }
    }
    moveDown(){
        if(this.positionY > 0) {
        this.positionY--; 
        }
    }
    moveRight(){
        if(this.positionX < 100) {
        this.positionX++;
        }
    }
    moveLeft(){
        if(this.positionX > 0) {
            this.positionX--;
        }
    }
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
this.playerLooks


class Asteroids {
    constructor(){

    }
}