class Level extends Phaser.Sprite {

    // Design the levels. x = wall, o = coin, ! = lava.
    static levels = [
         [
            'xxxxxxxxxxxxxxxxxxxxxx',
            'x         !          x',
            'x                 o  x',
            'x         o          x',
            'x                    x',
            'x     o   !    x     x',
            'xxxxxxxxxxxxxxxx!!!!!x',
        ],
        [
            'xxxxxxxxxxxxxxxxxxxxxx',
            'x            !   !   x',
            'x            !   !   x',
            'x    o       !!!!!   x',
            'x        o           x',
            'x                o   x',
            'xxxxxxxxxxxxxxxxxxxxxx',
        ],
        [
            'xxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            'x               !  xo      ox',
            'x            x     xx       x',
            'x            !           x  x',
            'x         x  !  x    x      x',
            'x         !  !  ! x!!!!!!!!!x',
            'xxxxx     xxxxxxxxxxxxxxxxxxx',
                'x         x',
                'x         x',
                'x  !!!    x',
                'x        xxx',
                'xo      !!x',
                'xx      xxx',
                'xxxxx  xxxxx',
                'x        xxxxxxxxxxxxxxxxxxxx                                                    ',
                'x                          ox                                                    ',
                'x           xxxxx          xx      x          x                                  ',
                'x!  x  !      xo        x      x          x                                      ', 
                'x!!   !!      xxxxxxx              x                       o                     ',
                'x!!!!!!!xxxx                x                o             x                     ',   
                'xxxxxxxxxxxxxxxxxxxxxxxxxxxxx                x       x                           ',
                                '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
                                '   !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!      ',
                                '       !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!          ',
                                '            !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!               ',
        ],
        [
            'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            'xo     o x  x    xx        !    xx                      xxxxx',
            'x     xxxx  x     x        !   ox    xxxxxxxx            x  x',
            'x         o x  !  x    xx  x    x   xx!!!!!x    x     x  o  x',
            'x!x!xxx     x  xx x     x  xx   x               x x!!!!!xx  x', 
            'x  !    x!!xxx  x xx   xx  x  x xxx            xxx           x',
            'x              xx x    x      x x  x          xx             x',
            'x      xxxxxxxxxx x   xxxxxxxxx x       x       x           x',
            'x      !          xx                       x    x           x',
            'xx     !o         x                     x  !x   xo          x',
            'x     xxx x   x!xxx!!!x     x!! !!xx    !  !    xx!x!       x',
            'x      x    x x       x    xx      xx   !  !   x            x',
            'xxx    x      x  xxx  x   xx   o    xx  !  !  x o     x     x',
            'x   o  xo                xx             !    x ooo    !!!!!!x',
            'xxxxxxxxx!!!!xxx!!!!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxx!!xxxxxxxx',
        ],
    ];

    constructor (game) {
        super(game);
        this.create();
    }

    create () {
        this.walls = this.game.add.group();
        this.coins = this.game.add.group();
        this.enemies = this.game.add.group();

        var level = Level.levels[Play.levelNum];

        for (var i = 0; i < level.length; i++) {
            for (var j = 0; j < level[i].length; j++) {

                // Create a wall and add it to the 'walls' group
                if (level[i][j] == 'x') {
                    var wall = this.game.add.sprite(30+20*j, 30+20*i, 'floor1');
                    this.walls.add(wall);
                    wall.body.immovable = true; 
                }

                // Create a coin and add it to the 'coins' group
                else if (level[i][j] == 'o') {
                    var coin = this.game.add.sprite(30+20*j, 30+20*i, 'coin');
                    this.coins.add(coin);
                }

                // Create a enemy and add it to the 'enemies' group
                else if (level[i][j] == '!') {
                    var enemy = this.game.add.sprite(30+20*j, 30+20*i, 'lava');
                    this.enemies.add(enemy);
                }
            }
        }
    }
}