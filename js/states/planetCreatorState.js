var planetCreatorState = {
	preload: function() {
		game.stage.backgroundColor = "#FF4040";
	},
	create: function() {
		planetName = prompt("How do you want to name you'r planet?")
		planetColor = prompt("Color? (HEX)")
		game.state.start("game")
	},
	update: function() {
		
	}
}
