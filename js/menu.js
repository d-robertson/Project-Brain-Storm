var menuState = {
//my menu is ugly
//i use create to build all my text on the canvas
  create: function(){
// calling Phaser functions like tileSprite and text build sprites on the screen 
// we can interact with using usually x,y,idstring and maybe a few other parameters
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
// i declare a event listener to wait for spacebar input to run the next code
    var spacebar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
// when i reference this its the global game object
    spacebar.onDown.addOnce(this.start, this);
  },
//the update function checks for changes in the game
//i tell my menu background to scroll on the y axis 1px per update loop
  update: function(){
    menuScroll.tilePosition.y += 1;
  },
//call the play game state
  start: function(){
    game.state.start('play');
  }
};