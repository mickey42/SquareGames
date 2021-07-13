// on instancie le jeu
var config = {
    width: 1300,
    height: 700,
    rendered: Phaser.AUTO,
    resolution: window.devicePixelRatio,
    antialias: false
}

var game = new Phaser.Game(config);

// les différents status du jeu
game.state.add('boot', new Boot());
game.state.add('load', new Load());
game.state.add('menu', new Menu());
game.state.add('play', new Play());
game.state.add('win',  new Win());
game.state.add('lose', new Lose());

game.state.start('boot');