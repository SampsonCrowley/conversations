import React, {Component} from 'react';
import WelcomeMessage from './welcome_message';

export default class ChatWindow extends Component {
  constructor() {
    super();
    var mainForm = document.getElementById("convo-form");
    var all = [...mainForm.childNodes];
    var inputItems = []
    all.forEach(function(item){
      if (item.nodeType != 3) {
        inputItems.push(item);
      }
    })
    this.state = {
      inputs: inputItems
    };
  }

  render() {
    let items = ""
    this.state.inputs.forEach(function (item){
      items += item.id
    })
    return (
      // Add your component markup and other subcomponent references here.
      <ol className="convo-chat-history">
        <WelcomeMessage />
        {items}
      </ol>
    );
  }
}
