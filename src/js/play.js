var playState = {
  create: function(){
    
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.add.sprite(0, 0, 'space');
    enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    enterKey.onDown.add(enterPress, this);
    backSpace = game.input.keyboard.addKey(Phaser.Keyboard.BACKSPACE);
    backSpace.onDown.add(bsPress, this);

    scoreText = game.add.text(50, 0, score, {font: "32px Arial", fill: "#ffffff", align: "center"});


    words = game.add.group();

    for(i=0;i<game.global.words.length;i++){
      var temp = game.add.text(0, 0, game.global.words[i], {font: "32px Arial", fill: "#ffffff", align: "center"}, words);
      temp.exists = false;
      game.physics.arcade.enable(temp);
      temp.outOfBoundsKill = true;
      temp.checkWorldBounds = true;
    }

    inputText = game.add.text(game.world.centerX, game.world.centerY, '', {font: "32px Arial", fill: "#00ff00", align: "center"});

    this.boom = this.game.add.group();
    // seans github for animation sprite help
    //https://github.com/srobertson421/space-shooter/blob/master/enemy.js#L3
    

    game.time.events.loop(Phaser.Timer.SECOND, updateCounter, this); 

    game.input.keyboard.addCallbacks(this, null, null, keyPress);


    function updateCounter() {

      if(words.children.length > 0){
        var randomNum = game.rnd.integerInRange(0, words.children.length -1);

        var randWord = words.getChildAt(randomNum);

        randWord.reset(game.rnd.integerInRange(100, game.world.width - 100), 0); 

        randWord.body.velocity.setTo(0, 100);

        counter++;
      } else {

        win();
      }

      
    }

    function win(){
      game.state.start('win');
    }

    function keyPress(char){
      inputText.text += char;
      
    }

    function enterPress(){
      words.forEachExists(function(word){
        if(word.text === inputText.text){
          word.destroy();

          var newScore = score += 5;

          scoreText.text = newScore;

          console.log(scoreText.text);
        } 

        

      });

      inputText.text = '';

        console.log("enter");
    }

    function bsPress(){
      inputText.text = inputText.text.slice(0, -1);

      var newScore = score -= 1;

      scoreText.text = newScore;

      console.log(scoreText.text);
    }

    

  },

  update: function(){
    
  }

  
};

