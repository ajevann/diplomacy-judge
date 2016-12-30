'use strict';

var events = {
  init: function(){
    main.units.onclick = events.unitMovement.click;
    main.units.onmousedown = events.unitMovement.mousedown;
    main.units.onmouseup = events.unitMovement.mouseup;
    main.tiles.onclick = events.tileEvents.click;
    main.tiles.onmousedown = events.tileEvents.mousedown;
    main.tiles.onmouseup = events.tileEvents.mouseup;


    var g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('title', 'currentAdjacencies');
    main.svg.appendChild(g);
    main.currentAdjacencies = document.querySelector('svg > g[title="currentAdjacencies"]');

    //
  },
  unitMovement: {
    click: function(e) {
      console.log(e.target.tagName);
      console.log(e.target.parentNode.getAttribute('type') === 'a');
    },
    mouseover: function(e) {

    },
    mousedown: function(e) {

    },
    mouseup: function(e) {

    },
    mousemove: function(e){

    }
  },
  tileEvents: {
    click: function(e) {
      if(e.target.tagName === 'text' || e.target.tagName === 'polygon'){

      }
    },
    mouseover: function(e) {

    },
    mousedown: function(e) {
      console.log(e.target.tagName);
      if(e.target.tagName === 'text' || e.target.tagName === 'polygon'){
        var abbr = e.target.parentNode.getAttribute('text');

        var i;
        for(i in adjacencies[abbr]){
          var dX = parseInt(tiles[adjacencies[abbr][i]].textX);
          var dY = parseInt(tiles[adjacencies[abbr][i]].textY);

          var g = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
          g.setAttribute('points', tiles[abbr].textX + ' ' + tiles[abbr].textY + ' ' + (dX + 5) + ' ' + (dY - 1));
          // g.setAttribute('marker-end', 'url(#triangle)');
          g.setAttribute('stroke', 'red');
          g.setAttribute('stroke-width', '1');
          g.setAttribute('stroke-dasharray', '5, 5');

          main.currentAdjacencies.appendChild(g);
        }
      }
    },
    mouseup: function(e) {
      main.currentAdjacencies.innerHTML = '';
    },
    mousemove: function(e){

    }
  }
};
