import Background from '../elements/background.js';
class MainMenu extends Phaser.State {
	constructor() {
		super();
	}
	preload(){
		this.stage.backgroundColor = "#fff";

		this.load.image("logo", "././assets/sprites/mainMenuState/logo.png");
		this.load.spritesheet('playBtn',
			'././assets/sprites/mainMenuState/playBtn.png',
			480,84,4);
		this.load.spritesheet('settingBtn',
			'././assets/sprites/mainMenuState/settingBtn.png',
			240,84,4);
		this.load.spritesheet('creditsBtn',
			'././assets/sprites/mainMenuState/creditsBtn.png',
			240,84,4);
	}
	create() {
		//Background.drawBackgroundMenu(); //Draws the Background

		var logo = this.add.sprite(320,96, "logo");
		logo.anchor.setTo(0.5)

		//Create Play Buttom

		var playBtn = this.add.button(
			this.world.centerX,
			this.world.centerY,
			'playBtn',
			function openWindow() {
				this.state.start("game");
			},
			this,0,1,2,3);

		playBtn.anchor.setTo(0.5)
		playBtn.input.useHandCursor = true;

		//Create Setting Buttom

		var settingBtn = this.add.button(
			200,
			this.world.centerY+100,
			'settingBtn',
			function openWindow() {
				this.state.start("setting");
			},
			this,0,1,2,3);

		settingBtn.anchor.setTo(0.5)
		settingBtn.input.useHandCursor = true;

		//Create credits Buttom

		var creditsBtn = this.add.button(
			450,
			this.world.centerY+100,
			'creditsBtn',
			function openWindow() {
				this.state.start("credits");
			},
			this,0,1,2,3);

		creditsBtn.anchor.setTo(0.5)
		creditsBtn.input.useHandCursor = true;
	}
	update() {
		
	}
}
export default MainMenu;