class Score {
	showScore() {
		score = 0;

		var style = { font: "20px Arial", fill: "#000", align: "center" };
		var scoreText = game.add.text(16, 48,"score: "+score, style); //UPDATING
		scoreText.fixedToCamera = true;
	}
}
export default Score;
