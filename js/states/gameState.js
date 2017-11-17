var gameState = {
	preload: function() {
		game.load.onLoadStart.add(loadStart, this);
		game.load.onLoadComplete.add(loadComplete, this);
		game.load.image("base","././assets/sprites/GameState/Elements/base/base.png")
		//game.load.image("loading","././assets/sprites/huds/loading.png");
		//game.load.image("guy","././assets/sprites/huds/entitiesIcons/guy.png");
	},
	create: function() {
		drawBackGround();
		showScore();

		planet.draw(); //create planet

		//Draw The lifebars
		playerLifebar = new Lifebar(16,16,0x00ff00);
		enemyLifebar = new Lifebar(game.width-272,16,0xff0000);

		playerLifebar.draw();
		enemyLifebar.draw();

		base.draw(); //Draws the base
	},
	update: function() {
		//Inputs
		readInputs();
		escape()

		planet.rotate();
	}
}
