import Background from '../elements/Background.js';
import Window from '../huds/windows.js';

class Setting extends Phaser.State {
	constructor(game) {
		super();
		this.game = game;	
	}
	preload() {
		this.stage.backgroundColor = "#fff";
		this.load.spritesheet('exitBtn','././assets/sprites/huds/exitBtn.png',60, 64, 4);
	}
	create() {
		//var background = new Background(this.game)
		var window = new Window(this.game)
		//background.drawMenuBackground();
		window.createExitBtn();

	}
	update() {
		
	}
}
export default Setting;