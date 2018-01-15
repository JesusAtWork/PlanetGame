class Lifebar {
	constructor(game,x,y,color){
		this.game = game;
		this.life = 128;
		this.x = x;
		this.y = y;
		this.w = this.life*2;
		this.h = 50
		this.bgcolor = 0x333333;
		this.color = color;
	}
	draw(){
		var lifebar = this.game.add.graphics(this.x,this.y);

		//Draw's the Background
		lifebar.beginFill(this.bgcolor, 1);
		lifebar.lineStyle(2,0x000000,1)
		lifebar.drawRect(0, 0, 256, 32);

		//Draw's the fill
		lifebar.beginFill(this.color, 1);
		lifebar.drawRect(0, 0, this.w, 32);

		lifebar.fixedToCamera = true;

		//lifebar.clear();	HACER QUE SE ACTUALISE
	}
	update(){
		if (playerLifebar.life<=0) {
			alert("lose");
		}else if(enemyLifebar.life<=0){
			alert("win")
		}
	}
}
export default Lifebar;