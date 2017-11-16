var settingState = {
	preload: function() {
		game.stage.backgroundColor = "#fff";
		game.load.spritesheet('exitBtn',
			'././sprites/huds/exitBtn.png',
			60,64,4);
	},
	create: function() {
		drawMenuBackground(); //Draws the Background
		createExitBtn();

	},
	update: function() {
		
	}
}