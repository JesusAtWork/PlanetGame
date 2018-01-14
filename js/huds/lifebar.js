class Lifebar {
	constructor(x,y,color){
		this.life = base.life;
		this.x = x;
		this.y = y;
		this.w = this.life*2;
		this.h = 50
		this.bgcolor = 0x333333;
		this.color = color;
	}
	draw(){
		var lifebar = game.add.graphics(this.x,this.y);

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
}
export default Lifebar;