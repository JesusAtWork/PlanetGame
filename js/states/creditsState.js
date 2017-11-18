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
		var style = { font: "20px Arial", fill: "#000", align: "center" };
		var programingText = game.add.text(96, 128,"Programed by Marcelo cornejo", style);

		var artworkText = game.add.text(96, 196,"Artwork by Marcelo cornejo", style);
	},
	update: function() {
		
	}
}