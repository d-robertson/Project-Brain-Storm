var menuState = {

  create: function(){

    var nameLabel = game.add.text(80, 80, 'Project Brain Storm', {font: '50px Arial', fill: '#ffffff'});

    var startLabel = game.add.text(80, game.world.height-80, 'press the "spacebar" to start', {font: '25px Arial', fill: '#ffffff'});

    var spacebar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    spacebar.onDown.addOnce(this.start, this);
  },

  start: function(){
    game.state.start('play');
  }
};