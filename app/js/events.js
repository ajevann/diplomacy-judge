'use strict';

var events = {
  init: function(){
    if(main.units){
      main.units.onclick = events.unitMovement.click;
      main.units.onmousedown = events.unitMovement.mousedown;
      main.units.onmouseup = events.unitMovement.mouseup;
    }
    if(main.tiles){
      main.tiles.onclick = events.tileEvents.click;
      main.tiles.onmousedown = events.tileEvents.mousedown;
      main.tiles.onmouseup = events.tileEvents.mouseup;
    }
  },
  unitMovement: {
    click: function(e) {
      main.currentAdjacencies.innerHTML = '';
    },
    mouseover: function(e) {

    },
    mousedown: function(e) {
      if(e.target.parentNode.getAttribute('type') === 'unit'){
        var abbr = e.target.parentNode.getAttribute('text');

        var i;
        for(i in adjacencies[main.adjacenciesToShow][abbr]){
          var sloc = tiles[abbr].loc;
          var sX = parseInt(sloc.split(',')[0]);
          var sY = parseInt(sloc.split(',')[1]);

          var dloc = tiles[adjacencies[main.adjacenciesToShow][abbr][i]].loc;
          var dX = parseInt(dloc.split(',')[0]);
          var dY = parseInt(dloc.split(',')[1]);


          var g = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
          g.setAttribute('points', sX + ' ' + sY + ' ' + (dX) + ' ' + (dY));
          g.setAttribute('marker-end', 'url(#circleFilled)');
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
  },
  tileEvents: {
    click: function(e) {
      main.currentAdjacencies.innerHTML = '';
    },
    mouseover: function(e) {

    },
    mousedown: function(e) {
      if(e.target.tagName === 'text' || e.target.tagName === 'polygon'){
        var abbr = e.target.parentNode.getAttribute('text');

        var i;
        for(i in adjacencies[main.adjacenciesToShow][abbr]){
          var dX = parseInt(tiles[adjacencies[main.adjacenciesToShow][abbr][i]].textX);
          var dY = parseInt(tiles[adjacencies[main.adjacenciesToShow][abbr][i]].textY);

          var g = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
          g.setAttribute('points', tiles[abbr].textX + ' ' + tiles[abbr].textY + ' ' + (dX + 5) + ' ' + (dY - 1));
          g.setAttribute('marker-end', 'url(#circleOutline)');
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
