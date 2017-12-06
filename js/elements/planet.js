var planet = {
	x:448,
	y:640,
	radius:700,
	color:0x00aa00,
	draw : function(){
		circle = game.add.graphics(this.x, this.y);
		circle.beginFill("0x00aa00", 1);
		circle.drawCircle(this.x, this.y, this.radius);

		circle.pivot.x = this.x;
		circle.pivot.y = this.y;
	},
}