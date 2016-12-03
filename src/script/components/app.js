import React, {Component} from 'react';
import ConvoContainer from './convo_container'
require('./conversation_forms.scss');

export default class App extends Component {



  render() {
    return (
      // Add your component markup and other subcomponent references here.
      <ConvoContainer />
    );
  }
}
