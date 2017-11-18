var base = {
	x: 396,
	y: 232,
	rot: 0,
	level: 1,
	life: planet.life, //initial life
	draw: function() {
		baseSprite = game.add.sprite(this.x,this.y,"base"+this.level);
	}
}