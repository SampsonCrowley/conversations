import React, {Component} from 'react';
import MainInput from './main_input';


export default class MainInputController extends Component {

  constructor() {
    super();

    this.state = {
      value: null
    }
    this.handleInput = this.handleInput.bind(this)
    this.onClick = this.onClick.bind(this)
    this.onKeyUp= this.onClick.bind(this)
  }

  handleInput(value){
    this.setState({
      value: value
    });
  }

  onClick(){
    this.props.onClick(this.state.value)
    this.setState({
      value: null
    });
  }

  render() {
    return (
      // Add your component markup and other subcomponent references here.
      <div>
        <MainInput
          inputType={this.props.inputType}
          hidden={ this.props.msg == "SUBMIT" ? "hidden" : null }
          onChange={this.handleInput}
          onClick={this.onClick}
          inputVal={this.state.value} />
        <button id="convo-form-enter"
          onClick={this.onClick}>{this.props.msg}</button>
      </div>
    );
  }
}
