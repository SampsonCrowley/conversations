import React, {Component} from 'react';


export default class MainInput extends Component {
  constructor() {
    super();
    this.state = {
      value: null,
    };
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.updateInputValue = this.updateInputValue.bind(this)
  }

  handleKeyPress(e){
    if(e.key == 'Enter'){
      e.preventDefault()
      this.props.onClick()
    }
  }

  updateInputValue(e) {
    this.props.onChange(e.target.value)
  }

  render() {
    return (
      // Add your component markup and other subcomponent references here.
        <input id="convo-form-input"
               type={this.props.inputType}
               className={this.props.hidden}
               onKeyUp={this.handleKeyPress}
               onChange={this.updateInputValue}
               placeholder="Enter your response here..."
               value={this.props.inputVal} />
    );
  }
}
