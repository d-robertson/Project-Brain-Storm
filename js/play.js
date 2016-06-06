var playState = {
  create: function(){

    this.keyboard = game.input.keyboard;

    this.player = game.add.text(80, 80, 'Player1!', {font: '50px Arial', fill: '#00FF00' });
    game.physics.arcade.enable(this.player);

    this.win = game.add.text(160, 160, 'win!', {font: '50px Arial', fill: '#00FF00' });
    game.physics.arcade.enable(this.win);

  },

  update: function(){
    game.physics.arcade.overlap(this.player, this.win, this.Win, null, this);

    if(this.keyboard.isDown(Phaser.Keyboard.A)) {
      this.player.body.velocity.x = -175;
    } else if (this.keyboard.isDown(Phaser.Keyboard.D)) {
      this.player.body.velocity.x = 175;
    } else {
      this.player.body.velocity.x = 0;
    }

    if(this.keyboard.isDown(Phaser.Keyboard.W)) {
      this.player.body.velocity.y = -175;
    } else if (this.keyboard.isDown(Phaser.Keyboard.S)) {
      this.player.body.velocity.y = 175;
    } else {
      this.player.body.velocity.y = 0;
    }
  },

  Win: function(){
    game.state.start('win');
  }
};

