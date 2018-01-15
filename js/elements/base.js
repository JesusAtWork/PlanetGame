class Base {
	constructor(player,game,x,y){
		this.player = player,
		this.game = game,
		this.x = x,
		this.y = y,
		this.level = 1,
		this.life = 128
	}
	draw(){
		if (this.player == 1) {
			var playerBaseSprite = this.game.add.sprite(this.x,this.y,"base"+this.level);
		}
		else if(this.player == 2){
			var enemyBaseSprite = this.game.add.sprite(this.x,this.y,"base"+this.level);
			enemyBaseSprite.angle = 180;
			enemyBaseSprite.anchor.setTo(0.5);
		}
	}	
}
export default Base;