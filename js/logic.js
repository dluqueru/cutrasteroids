class Game {
    constructor(){
        this.player = null;
    }
    start(){
        this.player = new Player();
        this.player.playerLooks = this.player.getPlayer();
        this.player.definePosition();
        this.movePlayer();
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
        this.player.definePosition();
    }
}

class Player {
    constructor(){
        this.positionX = 45;
        this.positionY = 45;
        this.playerLooks = null; // this is like de the DOMelement
    }
    moveUp(){
        if(this.positionY < 95) {
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


class Asteroids {
    constructor(){

    }
}