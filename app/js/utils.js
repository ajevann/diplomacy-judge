'use strict';

var utils = {
  hexGrid: function(size) {
    var g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('title', 'hexgrid');

    var limit = Math.floor(main.svg.clientWidth / size);
    var sr3 = Math.sqrt(3);
    var s = size;
    var h = sr3 * s;
    var d = s * 2;

    var
      a = {
        x: 0,
        y: 0
      },
      b = {
        x: (h / 2),
        y: -(s / 2)
      },
      c = {
        x: (h),
        y: 0
      },
      d = {
        x: (h),
        y: s
      },
      e = {
        x: (h / 2),
        y: (s + (s / 2))
      },
      f = {
        x: 0,
        y: s
      };

    var i, j;
    for (i = 1; i < limit; i++) {
      for (j = 1; j < limit; j++) {
        var p = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        p.setAttribute('type', 'hexgrid');

        var hspace = h * j;
        i % 2 === 0 ? hspace = hspace - (h / 2) : 0;
        var vspace = (size * 2) * i - (i * (size / 2));

        p.setAttribute('points', (a.x + hspace) + ',' + (a.y + vspace) + ' ' +
          (b.x + hspace) + ',' + (b.y + vspace) + ' ' +
          (c.x + hspace) + ',' + (c.y + vspace) + ' ' +
          (d.x + hspace) + ',' + (d.y + vspace) + ' ' +
          (e.x + hspace) + ',' + (e.y + vspace) + ' ' +
          (f.x + hspace) + ',' + (f.y + vspace)
        );

        g.appendChild(p);
      }
    }

    g.setAttribute('transform', 'translate(-100, -100)');
    main.svg.appendChild(g);
  },
  squareGrid: function(size) {
    var g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('title', 'grid');

    var i, j = 0, length = document.body.clientWidth;
    for (i = 0; i < length; i += size) {
      var l = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      l.setAttribute('x1', 0);
      l.setAttribute('y1', i);
      l.setAttribute('x2', length);
      l.setAttribute('y2', i);
      l.setAttribute('stroke', 'black');
      (i % (size * 10) === 0) ? l.setAttribute('stroke-width', '0.25') : l.setAttribute('stroke-width', '0.1');
      g.appendChild(l);

      l = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      l.setAttribute('x1', i);
      l.setAttribute('y1', 0);
      l.setAttribute('x2', i);
      l.setAttribute('y2', length);
      l.setAttribute('stroke', 'black');
      (i % (size * 10) === 0) ? l.setAttribute('stroke-width', '0.25') : l.setAttribute('stroke-width', '0.1');
      g.appendChild(l);

      if(i % (size * 10) === 0){
        if(j === 0){
          var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
          var textNode = document.createTextNode("A, 1");
          text.setAttribute('x', i + 0.5);
          text.setAttribute('y', size - 0.2);
          text.setAttribute('font-size', size);
          text.appendChild(textNode);

          g.appendChild(text);
        }else{
          var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
          var textNode = document.createTextNode(String.fromCharCode(j + 65));
          text.setAttribute('x', i + 0.2);
          text.setAttribute('y', size - 0.2);
          text.setAttribute('font-size', size);
          text.appendChild(textNode);

          g.appendChild(text);

          var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
          var textNode = document.createTextNode(j);
          text.setAttribute('x', 1 - 0.2);
          text.setAttribute('y', i - ((size * 10) - size) - 0.2);
          text.setAttribute('font-size', size);
          j > 1 ? text.appendChild(textNode) : 0;

          g.appendChild(text);
        }

        j++;
      }
    }

    main.svg.appendChild(g);
  },
  drawAdjacencies: function() {
    var i, j;

    var g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('title', 'adjacencies');

    for (i in adjacencies) {
      for (j = 0; j < adjacencies[i].length; j++) {
        var from = tiles[i].loc;
        var to = tiles[adjacencies[i][j]].loc;

        var l = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        l.setAttribute('type', 'adjacencies');
        l.setAttribute('x1', from.split(',')[0]);
        l.setAttribute('x2', to.split(',')[0]);
        l.setAttribute('y1', from.split(',')[1]);
        l.setAttribute('y2', to.split(',')[1]);

        g.appendChild(l);
      }
    }

    main.svg.appendChild(g);
  }
};
