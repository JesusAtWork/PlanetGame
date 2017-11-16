var gameState = {
	preload: function() {
		game.load.onLoadStart.add(loadStart, this);
		game.load.onLoadComplete.add(loadComplete, this);
		game.load.image("loading","././assets/sprites/huds/loading.png");
	},
	create: function() {
		game.stage.backgroundColor = "#9EE4F8";
		money = 0;

		planet = game.add.graphics(320, 640);
		planet.beginFill("0x00aa00", 1);
		planet.drawCircle(320, 640, 640);
		planet.pivot.x = 320;
		planet.pivot.y = 640;

		playerLifebar = new Lifebar(16,16,0x00ff00);
		playerLifebar.draw();

		enemyLifebar = new Lifebar(game.width-272,16,0xff0000);
		enemyLifebar.draw();
	},
	update: function() {

        if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT) || game.input.keyboard.isDown(Phaser.Keyboard.A)) {
			planet.angle -=1;
        } else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT) || game.input.keyboard.isDown(Phaser.Keyboard.D)) {
			planet.angle +=1;
        }
	}
}
