class Window {
	createExitBtn() {
		var exitBtn = game.add.button(
		32,32,'exitBtn',
		function openWindow() {
			game.state.start("mainMenu");
		},
		this,0,1,2,3);
	}
}
export default Window;

