var winState = {

  create: function(){

    var winLabel = game.add.text(80, 80, 'You Won!', {font: '50px Arial', fill: '#00FF00' });

    var scoreLabel = game.add.text(80, 160, 'Your score ' + score, {font: '32px Arial', fill: '#00FF00' });

    var bsLabel = game.add.text(80, 240, 'num of backspaces used: ' + bsCount, {font: '24px Arial', fill: '#00FF00' });

    var spacebar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    spacebar.onDown.addOnce(this.restart, this);
  },

  restart: function(){
    counter = 0;
    timeCounter = 60;
    bonusTime = 0;
    inputText = '';
    score = 0;
    enterCount = 0;
    bsCount = 0;
    game.state.start('menu');
  }
}