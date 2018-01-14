import MainMenu from './states/mainMenu';
import Credits from './states/credits';
import Setting from './states/setting';
import Game from './states/game';

var game = new Phaser.Game(640,480,Phaser.AUTO,"game");

game.state.add("mainMenu", new MainMenu());
game.state.add("credits", new Credits());
game.state.add("setting", new Setting());
game.state.add("game", new Game());

game.state.start("mainMenu");