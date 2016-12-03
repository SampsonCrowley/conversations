import React from 'react';
import {render} from 'react-dom';
import App from './components/app';

if(document.body.contains(document.getElementById("convo-form"))){
  var mainForm = document.getElementById("convo-form")
  mainForm.style.display = "none";
  var cfw = document.createElement('div');
  cfw.id = 'convo-form-window';
  document.body.appendChild(cfw);

  render(
    <App />,
    document.getElementById('convo-form-window')
  );
}
