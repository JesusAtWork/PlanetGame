class Preloader{
	constructor(game){
		this.game = game;
	}
	loadStart() {
		//this.game.stage.backgroundColor = "#000";
		//this.game.add.sprite(game.width-64,game.height-64,"loading")
	}
	loadComplete() {
		//console.log("loaded")
	}
}
export default Preloader;
