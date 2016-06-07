var playState = {
  create: function(){
    
    game.physics.startSystem(Phaser.Physics.ARCADE);
    bgScroll = game.add.tileSprite(0, 0, 600, 1000, 'scrollBackground');
    enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    enterKey.onDown.add(enterPress, this);
    backSpace = game.input.keyboard.addKey(Phaser.Keyboard.BACKSPACE);
    backSpace.onDown.add(bsPress, this);
    spacebar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    spacebar.onDown.add(spacePress, this);

    scoreText = game.add.text(50, 0, score, {font: "32px Arial", fill: "#ffffff", align: "center"});

    timerText = game.add.text(game.world.width - 50, 0, counter, {font: "32px Arial", fill: "#ffffff", align: "center"});

    words = game.add.group();

    booms = game.add.group();
    booms.createMultiple(50, 'boom');
    booms.forEach(boomSet, this);

    for(i=0;i<game.global.words.length;i++){
      var temp = game.add.text(0, 0, game.global.words[i], {font: "32px Arial", fill: "#ffffff", align: "center"}, words);
      temp.exists = false;
      game.physics.arcade.enable(temp);
      temp.outOfBoundsKill = true;
      temp.checkWorldBounds = true;
      temp.anchor.setTo(0.5);
    }

    inputText = game.add.text(game.world.centerX, game.world.centerY, '', {font: "32px Arial", fill: "#00ff00", align: "center"});

    
    game.time.events.loop(Phaser.Timer.SECOND, updateCounter, this); 

    game.input.keyboard.addCallbacks(this, null, null, keyPress);

    function updateCounter() {

      if(words.children.length > 0){
        var randomNum = game.rnd.integerInRange(0, words.children.length -1);

        var randWord = words.getChildAt(randomNum);

        if(randWord.exists === false){

          randWord.reset(game.rnd.integerInRange(100, game.world.width - 100), 0); 
        }  

        randWord.body.velocity.setTo(0, 100);

        counter++;

        timerText.text = counter;

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

    function boomSet(boom){

      boom.anchor.x = 0.5;
      boom.anchor.y = 0.5;
      boom.animations.add('boom');
    }

    function enterPress(){
      words.forEachExists(function(word){
        if(word.text === inputText.text){
          word.destroy();
          var boom = booms.getFirstExists(false);
          boom.reset(word.x, word.y);
          boom.setScaleMinMax(5);
          boom.play('boom', 30, false, true);

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

    function spacePress(){
      inputText.text = inputText.text.concat(' ');
    }

  },

  update: function(){
    bgScroll.tilePosition.y += 2;
  }

};

