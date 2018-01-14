class Setting extends Phaser.State {
	constructor() {
		super();
	}
	preload() {
		this.stage.backgroundColor = "#fff";
		this.load.spritesheet('exitBtn',
			'././sprites/huds/exitBtn.png',
			60,64,4);
	}
	create() {
		drawMenuBackground(); //Draws the Background
		createExitBtn();

	}
	update() {
		
	}
}
export default Setting;