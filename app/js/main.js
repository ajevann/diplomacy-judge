"use strict";

var main = {
  svg: null,
  init: function() {
    main.svg = document.querySelector('svg'); //Get svg element

    var i, j;
    for (i in tiles) {
        construct.tile(tiles[i]);
        // construct.supplyCenter(tiles[i]);
    }

    // utils.drawAdjacencies();

    var numOfPlayers = 1;
    // construct.startingPositions(numOfPlayers);

    // utils.hexGrid(5);
    // utils.squareGrid(5);
  }
};

main.init();
