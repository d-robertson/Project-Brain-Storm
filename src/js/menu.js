var menuState = {

  create: function(){

    menuScroll = game.add.tileSprite(0, 0, 600, 950, 'menuScroll');

    var nameLabel1 = game.add.text(300, 80, 'Project', {font: '60px Arial', fill: '#ffffff'});
    var nameLabel1 = game.add.text(300, 130, 'Brain', {font: '70px Arial', fill: '#ffffff'});
    var nameLabel1 = game.add.text(300, 200, 'Storm', {font: '80px Arial', fill: '#ffffff'});

    var directions1 = game.add.text(150, 400, 'Timer starts at 60 secs', {font: '25px Arial', fill: '#FF0000'});
    var directions2 = game.add.text(150, 430, 'kill 3 words get 3 secs', {font: '25px Arial', fill: '#FF0000'});
    var directions3 = game.add.text(30, 460, 'using the backspace takes 1 point from your score', {font: '25px Arial', fill: '#FF0000'});
    var directions4 = game.add.text(140, 490, 'killing a word gives you 5 points', {font: '25px Arial', fill: '#FF0000'});
    var directions5 = game.add.text(50, 520, 'kill as many as you can before the time runs out', {font: '25px Arial', fill: '#FF0000'});

    var startLabel = game.add.text(150, game.world.height-80, 'press the "spacebar" to start', {font: '25px Arial', fill: '#ffffff'});

    var spacebar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    spacebar.onDown.addOnce(this.start, this);
  },

  update: function(){
    menuScroll.tilePosition.y += 1;
  },

  start: function(){
    game.state.start('play');
  }
};