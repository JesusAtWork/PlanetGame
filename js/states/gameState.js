var gameState = {
	preload: function() {
		game.load.onLoadStart.add(loadStart, this);
		game.load.onLoadComplete.add(loadComplete, this);
		//game.load.image("loading","././assets/sprites/huds/loading.png");
		game.load.image("guy","././assets/sprites/GameState/entitiesIcons/guy.png");
	},
	create: function() {
		drawBackGround();
		showScore();

		planet.draw();

		playerLifebar = new Lifebar(16,16,0x00ff00);
		enemyLifebar = new Lifebar(game.width-272,16,0xff0000);

		playerLifebar.draw();
		enemyLifebar.draw();
	},
	update: function() {
		//Inputs
		readInputs();
		escape()

		planet.rotate();
	}
}
