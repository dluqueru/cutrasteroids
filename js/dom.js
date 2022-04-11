let game = new Game();
const player = new Player();
game.start();

document.addEventListener('keydown', (e) => {
    if(e.key === 'ArrowUp'){
        game.movePlayer('up');
    } else if(e.key === 'ArrowDown'){
        game.movePlayer('down');
    } else if(e.key === 'ArrowRight'){
        game.movePlayer('right');
    } else if(e.key === 'ArrowLeft'){
        game.movePlayer('left');
    }
})