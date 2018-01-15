class Money {
	constructor(game){
		this.game = game;
		this.money = 250;
	}
	showMoney() {
		var style = { font: "20px Arial", fill: "#000", align: "center" };
		var moneyText = this.game.add.text(16, 64,"money: $"+this.money, style); //UPDATING
		moneyText.fixedToCamera = true;
	}
}
export default Money;