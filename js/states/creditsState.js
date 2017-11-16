var creditsState = {
	preload: function() {
		game.stage.backgroundColor = "#fff";
		game.load.spritesheet('exitBtn',
			'././assets/sprites/huds/exitBtn.png',
			60,64,4);
	},
	create: function() {
		drawMenuBackground(); //Draws the Background
		createExitBtn();
		alert("programed by Marcelo Cornejo");
		alert("artwork by Marcelo Cornejo");
	},
	update: function() {
		
	}
}