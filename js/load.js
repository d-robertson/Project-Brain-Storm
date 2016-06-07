var loadState = {



  preload: function() {

    var loadingLabel = game.add.text(80, 150, 'loading...', {font: '30px Courier', fill: '#ffffff'});

    game.load.image('space', 'assets/Space.png');
    game.load.image('menuScroll', 'assets/rsz_menuscroll.png');
    game.load.image('scrollBackground', 'assets/spaceScroll.png');
    game.load.spritesheet('boom', 'assets/explosion.png', 30, 30);

    $.ajax({
      url: 'http://api.wordnik.com:80/v4/words.json/randomWords?hasDictionaryDef=true&includePartOfSpeech=noun&excludePartOfSpeech=proper-noun&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&limit=50&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5',
      key: '7297d5fa96bc0bb79650f0128c508392115d047b7c7e7095a',
      method: 'GET',
      success: function(data) {
        // Do things!!
        console.log(data);

        for(i=0;i<data.length;i++){

          var word = data[i].word;

          game.global.words.push(word);
        }
        console.log(game.global.words);
        game.state.start('menu');
      },
      error: function(data) {}
    });   
    
  }

  // create: function(){


  //   game.state.start('menu');
  // }
};