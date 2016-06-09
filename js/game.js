//This is the first js file my html renders

//To start I declare the game variable as new Phaser Game making a Phaser.Game object
// I pass in a x and y pixel size for my game canvas html element size
//The third parameter is the rendering context you choose. phaser suggests phaser.Auto
//The fourth parameter is my div id
var game = new Phaser.Game(600, 900, Phaser.AUTO, 'gameCanvas');
// my global array to pass my ajax return array into
// started as a hardcoded array of words for building
game.global = {words: []};
//all my global variables i created throughout.. probably way to many
var counter = 0;
var timeCounter = 60;
var bonusTime = 0;
var text;
var inputText = '';
var enterKey;
var words;
var score = 0;
var booms;
var bgScroll;
var menuScroll;
var enterCount = 0;
var bsCount = 0;
var explosionSound;
var music;

var pause_label;
var pauseMenu;
var choiseLabel;

//Using phaser syntax i add my routes
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.add('win', winState);
// here i call my first route
game.state.start('boot');






