"use strict";

var main = {
  svg: null,
  init: function() {
    main.svg = document.querySelector('svg'); //Get svg element
    construct.tiles();
    construct.supplyCenters();
    construct.tileNames('abbr'); //full/abbr

    // utils.hexGrid(5);
    utils.squareGrid(5);

    // utils.drawAdjacencies();

    var numOfPlayers = 1;
    construct.startingPositions(numOfPlayers);

    events.init();
  }
};

main.init();
