"use strict";

var main = {
  bodyEL: null,
  inputFieldsEL: null,
  displayFieldsEL: null,
  commands: [],
  init: function(){
    main.bodyEL = document.querySelector('body');

    main.inputFieldsEL = document.createElement('inputfields');
    main.inputFieldsEL.innerHTML = main.construct.inputFields();
    main.bodyEL.appendChild(main.inputFieldsEL);

    main.displayFieldsEL = document.createElement('displayfields');
    main.bodyEL.appendChild(main.displayFieldsEL);

    main.bodyEL.onclick = main.events.click;
  },
  refresh: function(){
    console.log(main.construct.displayFields());
    document.querySelector('displayfields').innerHTML = main.construct.displayFields();
  },
  construct: {
    inputFields: function(){
      var s = '';

      s += '<row><input placeholder="Command or Query..." type="query"/><execute>Execute</execute></row>';

      return s;
    },
    displayFields: function(){
      var s = '';

      for(var i in main.commands){
        s += '<command>' + main.commands[i] + '</command>';
      }

      return s;
    }
  },
  events: {
    click: function(e){
      if(e.target.tagName.toLowerCase() === 'execute'){
        var queryValue = document.querySelector('input[type="query"]').value;
        main.commands.push(queryValue);

        main.refresh();
        document.querySelector('input[type="query"]').value = '';
      }
    }
  }

};

main.init();
