class Planet {
	constructor(game){
		this.game = game;
		this.x = 320,
		this.y = 264,
		this.radius = 328,
		this.color = 0x00aa00
	}
	draw(){
		var circle = this.game.add.graphics(this.x, this.y);
		circle.beginFill("0x00aa00", 1);
		circle.drawCircle(this.x, this.y, this.radius);

		circle.pivot.x = this.x;
		circle.pivot.y = this.y;
	}
}
export default Planet;