import MainMenu from './states/mainMenu.js';
import Credits from './states/credits.js';
import Setting from './states/setting.js';
import Game from './states/game.js';

var game = new Phaser.Game(640,480,Phaser.AUTO,"game");

game.state.add("mainMenu", new MainMenu(game));
game.state.add("credits", new Credits(game));
game.state.add("setting", new Setting(game));
game.state.add("game", new Game(game));

game.state.start("mainMenu");