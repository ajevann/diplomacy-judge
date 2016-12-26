function move(from, to) {
  // if(there is a piece at from)

  //if from and to are adjacentTiles
  if(adjacencies[from].indexOf(to) > -1){
    var piece = document.querySelector('g[text="' + from + '"][type="f"], g[text="' + from + '"][type="a"]');
    if(piece){
      piece.setAttribute('transform', 'translate(' + tiles[to].loc + ')');
      piece.setAttribute('title', tiles[to].title);
      piece.setAttribute('text', tiles[to].text);
      
      var country = piece.getAttribute('country');

      //if sc exists
      var scFrom = document.querySelector('g[text="' + from + '"][type="sc"] circle');
      if (scFrom) {
        scFrom.setAttribute('country', 'Unowned');
      }

      var scTo = document.querySelector('g[text="' + to + '"][type="sc"] circle');
      if (scTo) {
        scTo.setAttribute('country', country);
      }
    }else{
      console.log('no piece at', from);
    }
  }else{
    console.log('invalid move, tiles are not adjacent');
  }
}
