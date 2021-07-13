class Win extends Phaser.State {
    constructor(levelNum = 0) {
        super();
        this.levelNum = levelNum;
    }

    create () {
        let text = 'You Won! Press space to restart';
        if (Play.levelNum < Level.levels.length) {
            text = 'You Won! Press space to start the next level';
        }
        this.wonText = this.game.add.text(
            32, 32,
            text,
            { font: '20px Courier', fill: '#FFF' }
        );

        var spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.addOnce(this.restart, this);
    }

    restart () {
        if (Play.levelNum < Level.levels.length - 1) {
            Play.levelNum++;
            this.game.state.start('play');
        } else {
            Play.levelNum = 0;
            this.game.state.start('menu');
        }
    }
}