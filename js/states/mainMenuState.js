var mainMenuState = {
	preload: function() {
		game.stage.backgroundColor = "#fff";

		game.load.image("logo", "././assets/sprites/mainMenuState/logo.png");
		game.load.spritesheet('playBtn',
			'././assets/sprites/mainMenuState/playBtn.png',
			240,84,4);
		game.load.spritesheet('settingBtn',
			'././assets/sprites/mainMenuState/settingBtn.png',
			240,84,4);
		game.load.spritesheet('creditsBtn',
			'././assets/sprites/mainMenuState/creditsBtn.png',
			240,84,4);
		game.load.spritesheet('archievementsBtn',
			'././assets/sprites/mainMenuState/archievementsBtn.png',
			240,84,4);
	},
	create: function() {
		drawMenuBackground(); //Draws the Background
		//Create Logo

		var logo = game.add.sprite(game.width/2,96, "logo");
		logo.anchor.setTo(0.5)

		//Create Play Buttom

		var playBtn = game.add.button(
			game.world.centerX,
			game.world.centerY,
			'playBtn',
			function openWindow() {
				game.state.start("game");
			},
			this,0,1,2,3);

		playBtn.anchor.setTo(0.5)
		playBtn.input.useHandCursor = true;

		//Create Setting Buttom

		var settingBtn = game.add.button(
			game.world.centerX,
			game.world.centerY+80,
			'settingBtn',
			function openWindow() {
				game.state.start("setting");
			},
			this,0,1,2,3);

		settingBtn.anchor.setTo(0.5)
		settingBtn.input.useHandCursor = true;

		//Create credits Buttom

		var creditsBtn = game.add.button(
			game.world.centerX,
			game.world.centerY+160,
			'creditsBtn',
			function openWindow() {
				game.state.start("credits");
			},
			this,0,1,2,3);

		creditsBtn.anchor.setTo(0.5)
		creditsBtn.input.useHandCursor = true;

		//Create archievements Buttom

		var archivementsBtn = game.add.button(
			game.world.centerX+200,
			game.world.centerY,
			'archievementsBtn',
			function openWindow() {
				game.state.start("archievements");
			},
			this,0,1,2,3);

		archivementsBtn.anchor.setTo(0.5)
		archivementsBtn.input.useHandCursor = true;
	},
	update: function() {
		
	}
}