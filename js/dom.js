let game = new Game();
const player = new Player();
const asteroid = new Asteroid();
game.start();

let keysPressed = {};
document.addEventListener('keydown', (e) => {
    keysPressed[e.key] = true;
    if(e.key === 'ArrowUp'){
        game.movePlayer('up');
    } else if(e.key === 'ArrowDown'){
        game.movePlayer('down');
    } else if(e.key === 'ArrowRight'){
        game.movePlayer('right');
    } else if(e.key === 'ArrowLeft'){
        game.movePlayer('left');
    } else if(e.key === ' '){
        game.shoot();
    }
    // else if(keysPressed['ArrowUp'] && e.key =='ArrowRight'){
    //     game.movePlayer('UR');
    // } else if(e.key === 'ArrowDown'+'ArrowRight'){
    //     game.movePlayer('DR');
    // } else if(e.key === 'ArrowDown'+'ArrowLeft'){
    //     game.movePlayer('DL');
    // } else if(e.key === 'ArrowUp'+'ArrowLeft'){
    //     game.movePlayer('UL');
    // }
})
// document.addEventListener('keyup', (e) => {
//     delete keysPressed[e.key];
//  });


