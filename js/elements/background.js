class Background {
	constructor(game){
		this.game = game;
	}
	drawBackground() {
		this.game.state.backgroundColor = "#9EE4F8";
	}
	drawBackgroundMenu() {
		//draws the border
	    var border = this.game.add.graphics(0, 0);
	    border.lineStyle(16, 0x000000, 1);
	    border.drawRect(0, 0, 640, 480);
	}
}
export default Background;