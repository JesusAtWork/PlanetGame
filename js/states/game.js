import Preloader from './Preloader'
import Background from './elements/Background';

import Base from './elements/base';
import EnemyBase from './elements/base';
import Entitie from './elements/entitie';
import Planet from './elements/planet';

import Hud from './huds/entitieCreator';
import Lifebar from './huds/lifebar';
import Planet from './huds/money';
import Score from './huds/score';
import Money from './huds/money';

class Game extends Phaser.State {
	constructor() {
		super();
	}
	preload() {
		this.load.onLoadStart.add(Preloader.loadStart, this);
		this.load.onLoadComplete.add(Preloader.loadComplete, this);
		this.load.image("base1","././assets/sprites/GameState/Elements/base/base1.png");
		this.load.image("exampleEntitie","././assets/sprites/huds/entitiesIcons/example.png");
		//this.load.image("loading","././assets/sprites/huds/loading.png");
	}
	create() {
		t = 0
		this.world.setBounds(0, 0, 896, 1280);
		Background.drawBackGround();

		planet = new Planet;
		planet.draw();

		//Draw The lifebars
		playerLifebar = new Lifebar(16,16,0x00ff00);
		enemyLifebar = new Lifebar(this.width-272,16,0xff0000);

		playerLifebar.draw();
		enemyLifebar.draw();

		base = new Base;
		base.draw();

		enemyBase = new EnemyBase;
		enemyBase.draw();

		entities = [];
		var exampleEntitieBtn = this.add.button(32, 96, 'exampleEntitie',function(){createEntitie("example")}, this, 2, 1, 0).fixedToCamera = true;
		Score.showScore();
		Money.showMoney();
	}
	update() {
		//Inputs
		readInputs();
		escape();

		if (playerLifebar.life<=0) {
			alert("lose");
		}else if(enemyLifebar.life<=0){
			alert("win")
		}
		//entities loop funcions

		for (var i = 0; i < entities.length; i++) {
			entities[i].walkLeft();
			entities[i].update();
		}

		t++
	}
}
export default gameState;