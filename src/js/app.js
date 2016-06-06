var game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameCanvas', { preload: preload, create: create, update: update });

  game.global = {words: [ 'good', 'bad', 'great', 'gun', 'ass', 'pain', 'type', 'work', 'loser', 'babe', 'why', 'tough', 'not', 'hot', 'shot', 'plot', 'snot', 'caught', 'slot', 'brought', 'thought', 'distraught', 'powerful', 'weak', 'sick', 'like', 'fox']
  };

  function preload(){
    game.load.image('space', 'assets/Space.png');
    
  }

  var counter = 0;
  var text;
  var inputText = '';
  var enterKey;
  var words;

  function create(){
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.add.sprite(0, 0, 'space');
    enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    enterKey.onDown.add(enterPress, this);


    words = game.add.group();

    for(i=0;i<game.global.words.length;i++){
      var temp = game.add.text(0, 0, game.global.words[i], {font: "32px Arial", fill: "#ffffff", align: "center"}, words);
      temp.exists = false;
      game.physics.arcade.enable(temp);
      temp.outOfBoundsKill = true;
      temp.checkWorldBounds = true;
    }

    inputText = game.add.text(game.world.centerX, game.world.centerY, '', {font: "32px Arial", fill: "#00ff00", align: "center"});
    

    game.time.events.loop(Phaser.Timer.SECOND, updateCounter, this); 

    game.input.keyboard.addCallbacks(this, null, null, keyPress);



  }

  function update(){

  }

  function updateCounter() {

    var randomNum = game.rnd.integerInRange(0, words.children.length -1);

    var randWord = words.getChildAt(randomNum);

    randWord.reset(game.rnd.integerInRange(50, game.world.width - 50), 0); 

    randWord.body.velocity.setTo(0, 100);

    counter++;

    
  }

  function keyPress(char){
    inputText.text += char;
    
  }

  function enterPress(){
    words.forEachExists(function(word){
      if(word.text === inputText.text){
        word.destroy();
      }

    });

    inputText.text = '';

      console.log("enter");
  }
 