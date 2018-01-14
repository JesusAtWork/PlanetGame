class Base {
	constructor(){
		this.x = planet.x-64,
		this.y = planet.y-planet.radius/2-90,
		this.rot = 0,
		this.level = 1,
		this.life = 128,
	}
	draw(){
		baseSprite = game.add.sprite(this.x,this.y,"base"+this.level);
	}	
}
class EnemyBase {
	constructor(){
		this.x = planet.x+64,
		this.y = planet.y+planet.radius/2+90,
		this.rot = 180,
		this.level = 1,
		this.life = 128,
	}
	draw(){
		baseSprite = game.add.sprite(this.x,this.y,"base"+this.level);
		baseSprite.angle = this.rot;
	}
}
export default Base;
export default EnemyBase;