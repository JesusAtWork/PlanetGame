//This file define a lot of funcions

function drawMenuBackground() {
	//draws the border

    var border = game.add.graphics(0, 0);
    border.lineStyle(16, 0x000000, 1);
    border.drawRect(0, 0, game.width, game.height);
}
function drawWindowHud(size) {
	if (size = "big") {
	    var windowHud = game.add.graphics(0,0);
    	windowHud.beginFill(0x000000, 0.5);
	    windowHud.drawRect(32, 32, 576, 416);
	}
}
function createPed() {
	//create Ped
}
function createExitBtn() {
	var exitBtn = game.add.button(
	32,32,'exitBtn',
	function openWindow() {
		game.state.start("mainMenu");
	},
	this,0,1,2,3);
}
function loadStart() {
	//game.stage.backgroundColor = "#000";
	//game.add.sprite(game.width-64,game.height-64,"loading")
}
function loadComplete() {

}

/*
	NOTAS:
	--Hacer engine de btns,  |MyButton| de acuerdo al legth
	--boton de exit de huds
*/
