import React, {Component} from 'react';
import ChatWindow from './chat_window'
import MainButton from './main_button'
import MainInput from './main_input'

export default class ConvoContainer extends Component {

  render() {
    return (
      // Add your component markup and other subcomponent references here.
      <div className="convo-window">
        <ChatWindow />
        <MainInput />
        <MainButton />
      </div>
    );
  }
}
