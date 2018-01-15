class Input {
	constructor(game){
		this.game = game;
	}
	readKeys(){
		var esc = this.game.input.keyboard.isDown(Phaser.Keyboard.ESC);
	}
	update() {
		//Camera
		/*var cursors = this.game.input.keyboard.createCursorKeys();

		if (this.game.input.activePointer.position.y > 420) {
			this.game.camera.y += 4;
		} else if (this.game.input.activePointer.position.y < 60) {
			this.game.camera.y -= 4;
		}

		if (this.game.input.activePointer.position.x > 580) {
			this.game.camera.x += 4;
		} else if (this.game.input.activePointer.position.x < 60) {
			this. game.camera.x -= 4;
		}*/
	}
	escapeMenu() {
		if (this.game.input.keyboard.isDown(Phaser.Keyboard.ESC)) {   // fix to esc
			var opt = prompt("1-MainMenu..2-Resume");
			if (opt==1) {
				this.game.state.start("mainMenu");
			}else if(opt==2){
				//Close Pause Menu
			}
		}
	}
}
export default Input;