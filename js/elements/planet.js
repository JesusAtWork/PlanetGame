var planet = {
	x:448,
	y:640,
	r:640,
	color:0x00aa00,
	draw : function(){
		circle = game.add.graphics(this.x, this.y);
		circle.beginFill("0x00aa00", 1);
		circle.drawCircle(this.x, this.y, this.r);

		circle.pivot.x = this.x;
		circle.pivot.y = this.y;
	},
	rotate(){
		if (rotLeft) {
			circle.angle -=1;
			baseSprite.x +=1
        } else if (rotRight) {
			circle.angle +=1;
			baseSprite.x -=1
        }
	}
}