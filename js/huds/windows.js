class Window {
	constructor(game){
		this.game = game;
	}
	createExitBtn() {
		var exitBtn = this.game.add.button(
		32,32,'exitBtn',
		function openWindow() {
			this.game.state.start("mainMenu");
		},
		this,0,1,2,3);
	}
}
export default Window;

