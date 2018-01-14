class planet {
	constructor(){	
		this.x = 448,
		this.y = 640,
		this.radius = 700,
		this.color = 0x00aa00,
	}
	draw(){
		circle = game.add.graphics(this.x, this.y);
		circle.beginFill("0x00aa00", 1);
		circle.drawCircle(this.x, this.y, this.radius);

		circle.pivot.x = this.x;
		circle.pivot.y = this.y;
	}
}