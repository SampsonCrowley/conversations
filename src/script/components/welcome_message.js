import React, {Component} from 'react';


export default class WelcomeMessage extends Component {
  constructor() {
    super();
    this.state = {
      value: "Next",
    };
  }

  render() {
    return (
      // Add your component markup and other subcomponent references here.
      <li className="other">
        <div className="msg">
          <p>Hi! Welcome to conversation forms. I'm Converso, your friendly form-bot.
            Here, instead of filling out a boring form, we're going to have a pleasant
            conversation. When I ask a question, type your answer into the input box below.
          </p>
          <p> When your answer is ready, press the "NEXT" button. Or, you can simply press the ENTER (or RETURN) key on your keyboard</p>
        </div>
      </li>
    );
  }
}
