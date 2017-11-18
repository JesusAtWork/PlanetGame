score = 0;

function showScore() {
	var style = { font: "20px Arial", fill: "#000", align: "center" };
	var scoreText = game.add.text(16, 48,"score: "+score, style); //UPDATING
	scoreText.fixedToCamera = true;
}