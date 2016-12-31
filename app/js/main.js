"use strict";

var main = {
  svg: null,
  tileNames: 'abbr', //full/abbr
  squareGridSize: 5,
  adjacenciesToShow: 'all', // land, sea, or all
  init: function() {
    main.svg = document.querySelector('svg');
    construct.tiles();

    // utils.hexGrid(5);
    utils.squareGrid(5);

    // utils.drawAdjacencies(main.adjacenciesToShow);

    construct.supplyCenters();
    construct.tileNames('abbr');

    var numOfPlayers = 7;
    construct.startingPositions(numOfPlayers);

    events.init();

    test.run();
  }
};

main.init();
