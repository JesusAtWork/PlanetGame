import Background from './elements/Background';
import Window from './huds/windows';

class Credits extends Phaser.State {
	constructor() {
		super();
	}
	preload() {
		this.stage.backgroundColor = "#fff";
		this.load.spritesheet('exitBtn',
			'././assets/sprites/huds/exitBtn.png',
			60,64,4);
	}
	create() {
		Background.drawMenuBackground(); //Draws the Background
		Window.createExitBtn();
		var style = { font: "20px Arial", fill: "#000", align: "center" };
		var programingText = this.add.text(96, 128,"Programed by Marcelo cornejo", style);

		var artworkText = this.add.text(96, 196,"Artwork by Marcelo cornejo", style);
	}
	update() {
		
	}
}
export default Credits;