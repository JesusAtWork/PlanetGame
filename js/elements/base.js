var base = {
	x: planet.x-64,
	y: planet.y-planet.radius/2-90,
	rot: 0,
	level: 1,
	life: planet.life, //initial life
	draw: function() {
		baseSprite = game.add.sprite(this.x,this.y,"base"+this.level);
	}
}
