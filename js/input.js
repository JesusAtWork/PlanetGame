function readInputs() {
	esc = game.input.keyboard.isDown(Phaser.Keyboard.ESC);
	moveCamera();
}
function escape() {
	if (esc) {
		var opt = prompt("1-MainMenu..2-Resume");
		if (opt==1) {
			game.state.start("mainMenu");
		}else if(opt==2){
			//Close Pause Menu
		}
	}
}
function moveCamera() {
    var cursors = game.input.keyboard.createCursorKeys();

    if (game.input.activePointer.position.y > 420) {
        game.camera.y += 4;
    } else if (game.input.activePointer.position.y < 60) {
        game.camera.y -= 4;
    }

    if (game.input.activePointer.position.x > 580) {
        game.camera.x += 4;
    } else if (game.input.activePointer.position.x < 60) {
        game.camera.x -= 4;
    }
}
