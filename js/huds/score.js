class Score {
	constructor(game){
		this.game = game;
		this.score = 0;
	}
	showScore() {
		var style = { font: "20px Arial", fill: "#000", align: "center" };
		var scoreText = this.game.add.text(16, 48,"score: "+this.score, style); //UPDATING
		scoreText.fixedToCamera = true;
	}
}
export default Score;