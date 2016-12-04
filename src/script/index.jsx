import React from 'react';
import {render} from 'react-dom';
import App from './components/app';


var tid = setInterval( function () {
    if ( document.readyState !== 'complete' ) return;
    clearInterval( tid );
    // do your work
    if(document.body.contains(document.getElementById("convo-form"))){
      var mainForm = document.getElementById("convo-form")
      mainForm.style.display = "none";
      var cfw = document.createElement('div');
      cfw.id = 'convo-form-window';
      mainForm.parentNode.insertBefore(cfw, mainForm.nextSibling);

      render(
        <App />,
        document.getElementById('convo-form-window')
      );
    }
}, 10 );
