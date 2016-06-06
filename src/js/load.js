var loadState = {

  preLoad: function() {

    var loadingLabel = game.add.text(80, 150, 'loading...', {font: '30px Courier', fill: '#ffffff'});

    // $.ajax({
    //   url: 'http://google.com',
    //   method: 'GET',
    //   success: function(data) {
    //     // Do things!!
    //     game.state.start('menu');
    //   },
    //   error: function(data) {}
    // })
  },

  create: function(){

    game.state.start('menu');
  }
};