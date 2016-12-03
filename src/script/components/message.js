import React, {Component} from 'react';


export default class Message extends Component {
  constructor() {
    super();
    this.state = {
      value: "Next",
    };
  }

  render() {
      var message = this.props.data.lines.map(function(line, i) {
        return (
          <p key={i}>{line}</p>
        );
      });
    return (
      // Add your component markup and other subcomponent references here.
      <li className="other">
        <div className="msg">
          {message}
        </div>
      </li>
    );
  }
}
