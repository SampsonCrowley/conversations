import React, {Component} from 'react';


export default class Response extends Component {
  constructor() {
    super();
    this.state = {
      value: "Next",
    };
  }

  render() {
    var message = this.props.data.value
    if(this.props.data.hidden){
      message = "[SECURITY FILTERED INPUT]"
    }
    return (
      // Add your component markup and other subcomponent references here.
      <li className="self" ref={this.props.refKey}>
        <div className="msg">
          <p>{message}</p>
        </div>
      </li>
    );
  }
}
