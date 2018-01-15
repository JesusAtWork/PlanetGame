import Background from '../elements/Background.js';
import Window from '../huds/windows.js';

class Credits extends Phaser.State {
	constructor(game) {
		super();
		this.game = game;
	}
	preload() {
		this.stage.backgroundColor = "#fff";
		this.load.spritesheet('exitBtn',
			'././assets/sprites/huds/exitBtn.png',
			60,64,4);
	}
	create() {
		var window = new Window(this.game);
		window.createExitBtn();
		//var background = new Background(this.game);
		//background.drawMenuBackground();
		var style = { font: "20px Arial", fill: "#000", align: "center" };
		var programingText = this.game.add.text(96, 128,"Programed by Marcelo cornejo", style);

		var artworkText = this.game.add.text(96, 196,"Artwork by Marcelo cornejo", style);
	}
	update() {
		
	}
}
export default Credits;