var winState = {

  create: function(){

    var winLabel = game.add.text(80, 80, 'You Won!', {font: '50px Arial', fill: '#00FF00' });

    var scoreLabel = game.add.text(80, 80, 'Your ' + score, {font: '32px Arial', fill: '#00FF00' });

    var bsLabel = game.add.text(80, 80, 'num of backspaces used: ' + bsCount, {font: '50px Arial', fill: '#00FF00' });

    var spacebar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    spacebar.onDown.addOnce(this.restart, this);
  },

  restart: function(){
    game.state.start('menu');
  }
}