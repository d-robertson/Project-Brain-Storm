var game = new Phaser.Game(600, 1000, Phaser.AUTO, 'gameCanvas');

game.global = {words: []};



var counter = 0;
var text;
var inputText = '';
var enterKey;
var words;
var score = 0;
var booms;
var bgScroll;
var menuScroll;

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.add('win', winState);

game.state.start('boot');