'use strict';

var construct = {
  tiles: function(){
    var g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('title', 'tiles');
    main.svg.appendChild(g);
    main.tiles = document.querySelector('svg > g[title="tiles"]');

    var i;
    for (i in tiles) {
        construct.tile(tiles[i]);
    }
  },
  tile: function(o) {
    var g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('title', o.title);
    g.setAttribute('text', o.text);
    g.setAttribute('type', 't');

    if (o.d) {
      var p = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      p.setAttribute('class', o.class);
      p.setAttribute('d', o.d);
      g.appendChild(p);
    } else if (o.class === 'lw') {
      var pl = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
      pl.setAttribute('class', 'l');
      pl.setAttribute('points', o.pointsL);
      g.appendChild(pl);

      var pw = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
      pw.setAttribute('class', 'w');
      pw.setAttribute('points', o.pointsW);
      g.appendChild(pw);
    } else {
      var p = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
      p.setAttribute('class', o.class);
      p.setAttribute('points', o.points);
      g.appendChild(p);
    }

    main.tiles.appendChild(g);
  },
  tileNames: function(format){
    var g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('title', 'tileNames');
    main.svg.appendChild(g);
    main.tileNames = document.querySelector('svg > g[title="tileNames"]');

    var i;
    for (i in tiles) {
        construct.tileName(tiles[i], format);
    }
  },
  tileName: function(o, format) {
    var g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('title', o.title);
    g.setAttribute('text', o.text);
    g.setAttribute('type', 't');

    var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    var textNode = document.createTextNode((format === 'abbr' ? o.text : o.title));

    text.setAttribute('x', o.textX);
    text.setAttribute('y', o.textY);
    text.setAttribute('text-anchor', 'middle');
    text.setAttribute('class', 'name');
    text.appendChild(textNode);

    g.appendChild(text);
    main.tileNames.appendChild(g);
  },
  supplyCenters: function(){
    var g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('title', 'supplyCenters');
    main.svg.appendChild(g);
    main.supplyCenters = document.querySelector('svg > g[title="supplyCenters"]');

    var i;
    for (i in tiles) {
        construct.supplyCenter(tiles[i]);
    }
  },
  supplyCenter: function(o) {
    if (o.scloc) {
      var g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      g.setAttribute('title', o.title);
      g.setAttribute('text', o.text);
      g.setAttribute('type', 'sc');

      var sc = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      sc.setAttribute('r', '3');
      sc.setAttribute('country', 'Unowned');
      sc.setAttribute('uid', o.text);
      sc.setAttribute('transform', 'translate(' + o.scloc + ')');

      g.appendChild(sc);
      main.supplyCenters.appendChild(g);
    }
  },
  startingPositions: function(numOfPlayers) {
    var g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('title', 'units');
    main.svg.appendChild(g);
    main.units = document.querySelector('svg > g[title="units"]');

    var i, j;
    for (i in startingPositions) {
      for (j in startingPositions[i]) {
        if (startingPositions[i][j][0] === 'sc') {
          document.querySelector('g[title="' + startingPositions[i][j][1] + '"] > circle').setAttribute('country', i);
        } else if (startingPositions[i][j][0] === 'a') {
          construct.landUnit({
            country: i,
            title: startingPositions[i][j][1],
            text: startingPositions[i][j][2]
          });
          // document.querySelector('g[title="' + startingPositions[i][j][1] + '"] > circle').setAttribute('country', i);
        } else if (startingPositions[i][j][0] === 'f') {
          construct.seaUnit({
            country: i,
            title: startingPositions[i][j][1],
            text: startingPositions[i][j][2]
          });
          // document.querySelector('g[title="' + startingPositions[i][j][1] + '"] > circle').setAttribute('country', i);
        }
      }
    }

  },
  seaUnit: function(o) {
    var g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('title', o.title);
    g.setAttribute('text', o.text);
    g.setAttribute('type', 'f');
    g.setAttribute('country', o.country);
    g.setAttribute('transform', 'translate(' + tiles[o.text].loc + ')');

    //boat shape
    // var p1 = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    // p1.setAttribute('points', '-2,-3 10,-3 -2,-13');
    // g.appendChild(p1);
    //
    // var p2 = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    // p2.setAttribute('points', '-12,-1 -6,5 6,5 12,-1');
    // g.appendChild(p2);

    //rectangle
    var p = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    p.setAttribute('points', '-5,0 10,0 10,5 -5,5');
    g.appendChild(p);

    main.units.appendChild(g);
  },
  landUnit: function(o) {
    var g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('title', o.title);
    g.setAttribute('text', o.text);
    g.setAttribute('type', 'a');
    g.setAttribute('country', o.country);
    g.setAttribute('transform', 'translate(' + tiles[o.text].loc + ')');

    //cannon shape
    // var p1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    // p1.setAttribute('d', 'M9,-6 L2,0 M9,6 L0,0');
    // g.appendChild(p1);
    //
    // var p2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    // p2.setAttribute('d', 'M-11,-6 v4 h17 a2,2 0,0 0 0,-4z');
    // g.appendChild(p2);
    //
    // var c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    // c.setAttribute('r', '6');
    // g.appendChild(c);

    //square
    var p = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    p.setAttribute('points', '-5,-5 5,-5 5,5 -5,5');
    g.appendChild(p);

    main.units.appendChild(g);
  }
};
