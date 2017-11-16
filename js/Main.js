var game = new Phaser.Game(640,480,Phaser.AUTO,"game");

game.state.add("mainMenu",mainMenuState);
game.state.add("credits",creditsState);
game.state.add("setting",settingState);
game.state.add("planetCreator",planetCreatorState);
game.state.add("game",gameState);

game.state.start("mainMenu");