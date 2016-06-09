var loadState = {
//in my load state i load my effects
  preload: function() {
    //used a site to build a css loading spinner
    // i call the class and change the css property display from none to block
    $('.loader').css('display', 'block');
   //my tunes and sprites get loaded
    game.load.audio('explosion', 'assets/explosion.wav');
    game.load.audio('tunes', 'assets/Com_Truise_-_Polyhurt.mp3');
    game.load.image('space', 'assets/Space.png');
    game.load.image('menuScroll', 'assets/rsz_menuscroll.png');
    game.load.image('scrollBackground', 'assets/spaceScroll.png');
    game.load.spritesheet('boom', 'assets/explosion.png', 30, 30);
//ajax call to populate my words object
    $.ajax({
      url: 'http://api.wordnik.com:80/v4/words.json/randomWords',

      data: {
// these are just perameters for the api
// i wanted to exclude more but i couldn't get it
        hasDictionaryDef : 'true',
        // to exclude more parts of speech possibly make the value for that key an array of all the exclusions??????????
        excludePartOfSpeech : 'proper-noun',
        minCorpusCount : '0',
        maxCorpusCount : '-1',
        minDictionaryCount : '1',
        maxDictionaryCount : '-1',
        minLength : '3',
        maxLength : '6',
        limit : '1000',
        api_key : 'a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'
        
      },

      
      method: 'GET',

      success: function(data) {
  //on success i loop through the data object from my ajax call
        for(i=0;i<data.length;i++){
//declare it variable word and make it lowercase
          var word = data[i].word.toLowerCase();
//then push each word to my global object words
          game.global.words.push(word);
        }
        console.log(game.global.words);
        //on success of my ajax call i hide the css loader by changing display to none
        $('.loader').css('display', 'none');
        //I call my next game state on success as well
        game.state.start('menu');
      },
      error: function(data) {}
      // no errors please
    });   
    
  }

};