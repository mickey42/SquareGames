class Play extends Phaser.State {

    static levelNum = 0;

    create () {
        this.env();

        this.player = new Player(this.game, 70, 100);
        this.level = new Level(this.game);
        this.numCoins = this.level.coins.children.length;
    }

    update () {
        // Make the player and the walls collide
        this.game.physics.arcade.collide(this.player, this.level.walls);

        // Call the 'takeCoin' function when the player takes a coin
        this.game.physics.arcade.overlap(this.player, this.level.coins, this.takeCoin, null, this);

        // Call the 'restart' function when the player touches the enemy
        this.game.physics.arcade.overlap(this.player, this.level.enemies, this.restart, null, this);
    }

    env () {
        this.game.stage.backgroundColor = Math.random()*0xFFFFFF<<0;
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.world.enableBody = true;
    }

    restart () {
        this.game.state.start('lose');
    }

    takeCoin (player, coin) {
        coin.kill();
        if (--this.numCoins <= 0) {
            this.game.state.start('win');
        }
    }
}