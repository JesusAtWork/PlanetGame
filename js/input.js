function readInputs() {
	rotLeft =  game.input.keyboard.isDown(Phaser.Keyboard.LEFT)
			|| game.input.keyboard.isDown(Phaser.Keyboard.A)

	rotRight = game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)
			|| game.input.keyboard.isDown(Phaser.Keyboard.D)

	esc = game.input.keyboard.isDown(Phaser.Keyboard.ESC)
}
function escape() {
	if (esc) {
		var opt = prompt("1-MainMenu..2-Resume")
		if (opt==1) {
			game.state.start("mainMenu")
		}else if(opt==2){
			//Close Pause Menu
		}
	}
}