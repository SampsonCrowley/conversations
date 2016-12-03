import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Message from './message';
import Response from './response';

export default class ChatWindow extends Component {

  constructor() {
    super();
    this.componentDidUpdate = this.componentDidUpdate.bind(this)
  }

  componentDidUpdate() {
    // Scroll as new elements come along
    var node = ReactDOM.findDOMNode(this.refs.mainChat)
    node.scrollTop = node.scrollHeight;
  }

  render() {
    const children = [];

    for (var i = 0; i < this.props.numChildren && i < this.props.children.length; i += 1) {
      if(this.props.children[i].type == "response"){
        children.push(<Response key={i} data={this.props.children[i]} />);
      }else{
        children.push(<Message key={i} data={this.props.children[i]} />);
      }
    };

    return (
      // Add your component markup and other subcomponent references here.
      <ol className="convo-chat-history" ref="mainChat">
        {children}
      </ol>
    );
  }
}
