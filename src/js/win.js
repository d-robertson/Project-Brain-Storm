var winState = {

  create: function(){

    var winLabel = game.add.text(80, 80, 'You Won!', {font: '50px Arial', fill: '#00FF00' });

    var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);

    wkey.onDown.addOnce(this.restart, this);
  },

  restart: function(){
    game.state.start('menu');
  }
}