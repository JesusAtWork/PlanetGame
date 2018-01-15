import Preloader from '../Preloader.js'
import Background from '../elements/Background.js';

import Input from '../input.js'
import Base from '../elements/base.js';
import Entitie from '../elements/entitie.js';
import Planet from '../elements/planet.js';

import EntitieGenerator from '../huds/entitieGenerator.js';
import Lifebar from '../huds/lifebar.js';
import Score from '../huds/score.js';
import Money from '../huds/money.js';

var entities = [];
var time = 0

class Game extends Phaser.State {
	constructor(game) {
		super();
		this.game = game;
	}
	preload() {
		var preloader = new Preloader;

		//this.load.onLoadStart.add(preloader.loadStart(this.game), this);
		//this.load.onLoadComplete.add(preloader.loadComplete(this.game), this);
		this.load.image("base1","././assets/sprites/GameState/Elements/base/base1.png");  
		this.load.image("exampleEntitie","././assets/sprites/huds/entitiesIcons/example.png");
		//this.load.image("loading","././assets/sprites/huds/loading.png");
	}
	create() {
		//this.world.setBounds(0, 0, 896, 1280);

		var background = new Background(this.game);
		background.drawBackground();

		var planet = new Planet(this.game);
		planet.draw();

		var playerLifebar = new Lifebar(this.game,16,16,0x00ff00);
		var enemyLifebar = new Lifebar(this.game,this.game.width-256,16,0xff0000);

		var playerBase = new Base(1,this.game,296,52);
		var enemyBase = new Base(2,this.game,328,452);

		playerLifebar.draw();
		enemyLifebar.draw();

		playerBase.draw();
		enemyBase.draw();

		var entitieGenerator = new EntitieGenerator(this.game);
		var exampleEntitieBtn = this.add.button(32, 96, 'exampleEntitie',function(){
			entitieGenerator.create(money.money,"example",entities)
		},this, 2, 1, 0).fixedToCamera = true;

		var score = new Score(this.game);
		var money = new Money(this.game);

		score.showScore();
		money.showMoney();
	}
	update() {
		//Inputs
		var input = new Input(this.game);
		input.update();
		input.readKeys();
		input.escapeMenu();

		//Lifebar

		//playerLifebar.update();
		//enemyLifebar.update();

		//entities loop funcions

		for (var i = 0; i < entities.length; i++) {
			entities[i].walkLeft();
			entities[i].update();
		}

		time++
	}
}
export default Game;