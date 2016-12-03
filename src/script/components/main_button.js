import React, {Component} from 'react';


export default class MainButton extends Component {
  constructor() {
    super();
    this.state = {
      value: "Next",
    };
  }

  render() {
    return (
      // Add your component markup and other subcomponent references here.
        <button id="convo-form-enter">{this.state.value}</button>
    );
  }
}
