var playState = {
  create: function(){
   // this is where things get jumbled
   //i start the physics add sprites and desiginate inputs 
    game.physics.startSystem(Phaser.Physics.ARCADE);
    bgScroll = game.add.tileSprite(0, 0, 600, 950, 'scrollBackground');
    // on my inputs i pass in a function which i designate later
    //and this for the game state we are in
    enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    enterKey.onDown.add(enterPress, this);
    backSpace = game.input.keyboard.addKey(Phaser.Keyboard.BACKSPACE);
    backSpace.onDown.add(bsPress, this);
    spacebar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    spacebar.onDown.add(spacePress, this);
//put the score on the screen
    scoreText = game.add.text(50, 0, score, {font: "32px Arial", fill: "#ffffff", align: "center"});
//put the timer on the screen
    timerText = game.add.text(game.world.width - 50, 0, counter, {font: "32px Arial", fill: "#ffffff", align: "center"});
//declare a game group using my words object for building my text sprites later
    words = game.add.group();
//create my explosions animation
    booms = game.add.group();
    booms.createMultiple(50, 'boom');
    booms.forEach(boomSet, this);
//adding my music and calling the function to play it
    music = game.add.audio('tunes', 0.5, true);
    music.play();
//create my explosion sound effect
    explosionSound = this.game.add.audio('explosion', 0.3, false);
//i build a for loop for checking my words object and grabbing my word sprites
    for(i=0;i<game.global.words.length;i++){
      var temp = game.add.text(0, 0, game.global.words[i], {font: "32px Arial", fill: "#ffffff", align: "center"}, words);
      //exists is only true when the sprite is on the screen so false to start
      temp.exists = false;
//enable the gravity on my word sprite
      game.physics.arcade.enable(temp);
      //if my sprite goes off the game canvas its dead
      temp.outOfBoundsKill = true;
      //check for the size of the game canvas
      temp.checkWorldBounds = true;
      //kinda confusing but this sets the sprite anchor to center, so when you interact with it you tell the center where to be
      temp.anchor.setTo(0.5);
    }
// add the word sprites to the screen
    inputText = game.add.text(game.world.centerX, game.world.centerY, '', {font: "32px Arial", fill: "#00ff00", align: "center"});

    //use a pre built phaser timer to keep track of changes
    game.time.events.loop(Phaser.Timer.SECOND, updateCounter, this); 
//add a callback funtion to check for keypresses
    game.input.keyboard.addCallbacks(this, null, null, keyPress);
// function i pass into my phaser loop
    function updateCounter() {

      if(words.children.length > 0){
        var randomNum = game.rnd.integerInRange(0, words.children.length -1);

        var randWord = words.getChildAt(randomNum);
//check to see if the word exists or is on canvas before i reset it to come back
        if(randWord.exists === false){

          randWord.reset(game.rnd.integerInRange(100, game.world.width - 100), 0); 
        }  
//give my randomword a gravity velocity
        randWord.body.velocity.setTo(0, 100);
//i increment a counter in my phaser loop
        counter++;
//make a variable to hold the value for my timer sprite
        timeCounter--;
//implement timer sprite
        timerText.text = timeCounter;

      } 
//call my win function when time runs out
      if(timeCounter === 0){
        win();
      }  
      
  
    }
// win function calls my win game state
    function win(){
      game.state.start('win');
    }
// my inpute functions called on certain key presses in my game
    function keyPress(char){
      inputText.text += char;
      
    }
// set my explosion animation
    function boomSet(boom){

      boom.anchor.x = 0.5;
      boom.anchor.y = 0.5;
      boom.animations.add('boom');
    }
// the main functionality happens with enter because thats where i check to see if the input matches any word on screen or that exists
// i loop through my words group using for each exists to see if it has that property
    function enterPress(){
      words.forEachExists(function(word){
        //if my word does exist and matches the inpute then call all the fun stuff
        if(word.text === inputText.text){
          //kill the word with destroy
          word.destroy();
          //tell the boom animation to only work on sprites that exist
          var boom = booms.getFirstExists(false);
          // reset the word x and y so it can be set again if need be
          boom.reset(word.x, word.y);
          // the size of my explosion
          boom.setScaleMinMax(5);
          //tell it to play
          boom.play('boom', 30, false, true);
          // tell the sound to play
          explosionSound.play();
          //count increment on enter press for later use
          enterCount++;
          //store the updated score
          var newScore = score += 5;
          //a increment varible on completed word
          bonusTime++;
          //checke the completed word variable so that every third enter your time goes up by 3
          if(bonusTime === 3){
            timeCounter += 3;
            //reset bonus time for next check
            bonusTime = 0;
          }
          //change the sprite property to show updated score
          scoreText.text = newScore;
        }  

      });
      //reset the input text on enter
      inputText.text = '';
    }
    //implement the backspace funtionality for in game typing
    function bsPress(){
      inputText.text = inputText.text.slice(0, -1);
      // using BS takes 1 off your score
      var newScore = score -= 1;
      //update score
      scoreText.text = newScore;
      //count increment on backspace for stats
      bsCount++;
    }
    // tell the spacebar to add a space in the sprite
    function spacePress(){
      inputText.text = inputText.text.concat(' ');
    }

    //building a pause click event to pause and unpause the game
    pause_label = game.add.text(game.world.width - 200, 0, 'Pause', { font: '24px Arial', fill: '#fff' });
    pause_label.inputEnabled = true;

    
    pause_label.events.onInputUp.add(function () {
      // if the game is running pause it
      if(game.paused === false){
        
          game.paused = true;
            
          choiseLabel = game.add.text(300, 600, 'Click to continue', { font: '30px Arial', fill: '#fff' });
          choiseLabel.anchor.setTo(0.5, 0.5);
      }
    });
    // if the game is paused make it go
    game.input.onDown.add(function() {
      if(game.paused) {
        game.paused = false;
        //get rid of the pause instructions from screen
        choiseLabel.destroy();
      }
    }, this);
      
  },
  //run the scrolling background
  update: function(){
    bgScroll.tilePosition.y += 2;
  }

};


//back up to win function to move to win state
