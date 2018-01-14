class Background {
	drawBackground() {
		game.stage.backgroundColor = "#9EE4F8";
	}
	drawMenuBackground() {
		//draws the border

	    var border = game.add.graphics(0, 0);
	    border.lineStyle(16, 0x000000, 1);
	    border.drawRect(0, 0, game.width, game.height);
	}
}
export default Background;