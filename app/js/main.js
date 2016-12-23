"use strict";

var main = {
  bodyEL: null,
  inputFieldsEL: null,
  displayFieldsEL: null,
  commands: [],
  init: function() {
    var i = 0;
    for (i = 0; i < land_tiles_template.length; i++) {
      console.log(land_tiles_template[i]);
    }

    console.table(sea_tiles_template.length);
  },
  refresh: function() {
    //
  },
  construct: {
    //
  },
  events: {
    click: function(e) {
      //
    }
  }

};

main.init();
