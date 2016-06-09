var bootState = {
// using phaser you have four main functions 
//preload, create, update
//in each of my states i can use all of them or none of them
//create is used for building
  create: function(){
//
    game.physics.startSystem(Phaser.Physics.ARCADE);
// I call my next game state
    game.state.start('load');

  }
};