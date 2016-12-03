import React, {Component} from 'react';


export default class MainInput extends Component {
  constructor() {
    super();
    this.state = {
      value: "Next",
    };
  }

  render() {
    return (
      // Add your component markup and other subcomponent references here.
        <input type="text" id="convo-form-input" placeholder="Enter your response here..." />
    );
  }
}
