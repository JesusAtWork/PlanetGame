class Money {
	showMoney() {
		money = 250;

		var style = { font: "20px Arial", fill: "#000", align: "center" };
		var moneyText = game.add.text(16, 64,"money: $"+money, style); //UPDATING
		moneyText.fixedToCamera = true;
	}
}
export default Money;