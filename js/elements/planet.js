var planet = {
	x:320,
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
        } else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT) || game.input.keyboard.isDown(Phaser.Keyboard.D)) {
			circle.angle +=1;
        }
	}
}