var gameState = {
	preload: function() {
		game.load.onLoadStart.add(loadStart, this);
		game.load.onLoadComplete.add(loadComplete, this);
		game.load.image("base1","././assets/sprites/GameState/Elements/base/base1.png")
		//game.load.image("loading","././assets/sprites/huds/loading.png");
		//game.load.image("guy","././assets/sprites/huds/entitiesIcons/guy.png");
		game.load.spritesheet("ped","././assets/sprites/GameState/ped/run.png",
									32,64,4);
	},
	create: function() {
		game.world.setBounds(0, 0, 896, 1280);
		drawBackGround();

		planet.draw(); //create planet
		base.draw(); //Draws the base

		//Draw The lifebars
		playerLifebar = new Lifebar(16,16,0x00ff00);
		enemyLifebar = new Lifebar(game.width-272,16,0xff0000);

		playerLifebar.draw();
		enemyLifebar.draw();

		showScore();
	},
	update: function() {
		//Inputs
		readInputs();
		escape()

		planet.rotate();

		if (playerLifebar.life<=0) {
			alert("lose");
		}else if(enemyLifebar.life<=0){
			alert("win")
		}
	}
}
