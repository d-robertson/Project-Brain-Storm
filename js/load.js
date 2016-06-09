var loadState = {

  preload: function() {
    $('.loader').css('display', 'block');
    // game.load.audio('spaceTune', ['assets/SpaceAwesome.mp3', 'assets/SpaceAwesome.ogg']);
    // game.load.audio('laser', ['assets/laser.mp3', 'assets/laser.ogg']);
    game.load.audio('explosion', 'assets/explosion.wav');
    game.load.audio('tunes', 'assets/Com_Truise_-_Polyhurt.mp3');
    game.load.image('space', 'assets/Space.png');
    game.load.image('menuScroll', 'assets/rsz_menuscroll.png');
    game.load.image('scrollBackground', 'assets/spaceScroll.png');
    game.load.spritesheet('boom', 'assets/explosion.png', 30, 30);

    $.ajax({
      url: 'http://api.wordnik.com:80/v4/words.json/randomWords',

      data: {

        hasDictionaryDef : 'true',
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
  
        for(i=0;i<data.length;i++){

          var word = data[i].word.toLowerCase();

          game.global.words.push(word);
        }
        console.log(game.global.words);
        $('.loader').css('display', 'none');
        game.state.start('menu');
      },
      error: function(data) {}
    });   
    
  }

};