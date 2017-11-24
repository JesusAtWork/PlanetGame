var gameState = {
	preload: function() {
		game.load.onLoadStart.add(loadStart, this);
		game.load.onLoadComplete.add(loadComplete, this);
		game.load.image("base1","././assets/sprites/GameState/Elements/base/base1.png");
		game.load.image("exampleEntitie","././assets/sprites/huds/entitiesIcons/example.png");
		//game.load.image("loading","././assets/sprites/huds/loading.png");
	},
	create: function() {
		t = 0
		game.world.setBounds(0, 0, 896, 1280);
		drawBackGround();

		planet.draw(); //create planet
		base.draw(); //Draws the base

		//Draw The lifebars
		playerLifebar = new Lifebar(16,16,0x00ff00);
		enemyLifebar = new Lifebar(game.width-272,16,0xff0000);

		playerLifebar.draw();
		enemyLifebar.draw();

		entities = [];
		var exampleEntitieBtn = game.add.button(32, 96, 'exampleEntitie',function(){createEntitie("example")}, this, 2, 1, 0).fixedToCamera = true;
		showScore();
	},
	update: function() {

		//Inputs
		readInputs();
		escape();

		if (playerLifebar.life<=0) {
			alert("lose");
		}else if(enemyLifebar.life<=0){
			alert("win")
		}
		//entities loop funcions

		for (var i = 0; i < entities.length; i++) {
			entities[i].walkLeft();
			entities[i].update();
		}

		t++
	}
}
