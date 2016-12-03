import React, {Component} from 'react';
import ChatWindow from './chat_window'
import MainInputController from './main_input_controller'

export default class ConvoContainer extends Component {
  constructor() {
    super();
    var inputItems = [
      {
        type: "question",
        lines:[
          "Hi! Welcome to conversation forms. I'm Converso, your friendly form-bot. Here, instead of filling out a boring form, we're going to have a pleasant conversation. When I ask a question, type your answer into the input box below.",
          "When your answer is ready, press the \"NEXT\" button. Or, you can simply press the ENTER (or RETURN) key on your keyboard"
        ]
      }
    ]
    var additionalItems = []
    var mainForm = document.getElementById("convo-form");
    var all = [...mainForm.childNodes];
    all.forEach(function(item){
      if (item.nodeType != 3) {
        if(item.type == "hidden"){

          additionalItems.push(
            {
              name: item.name,
              value: item.value
            }
          )
        } else {
          var line
          var hidden = false
          if(item.dataset.question){
            line = item.dataset.question
          }else if(item.id){
            line = "What is your " + item.id + "?"
          }else {
            line = "What is your " + item.name + "?"
          }
          if(item.type == "password" ||
          item.name == "password" ||
          item.dataset.secure){
            hidden = true
          }
          inputItems.push({
            type:"question",
            lines:[line],
          });
          inputItems.push({
            name: item.name,
            type:"response",
            value: "",
            hidden: hidden
          });
        }
      }
    })
    this.state = {
      returnForm: mainForm,
      additional: additionalItems,
      inputType: "text",
      numMessages: 2,
      children: inputItems,
      buttonMsg: "NEXT"
    }
    this.onNext = this.onNext.bind(this)

  }

  executeAjax() {
    if (typeof XMLHttpRequest !== 'undefined') {
      return new XMLHttpRequest();
    }
    var versions = [
      "MSXML2.XmlHttp.6.0",
      "MSXML2.XmlHttp.5.0",
      "MSXML2.XmlHttp.4.0",
      "MSXML2.XmlHttp.3.0",
      "MSXML2.XmlHttp.2.0",
      "Microsoft.XmlHttp"
    ];

    var xhr;
    for (var i = 0; i < versions.length; i++) {
      try {
          xhr = new ActiveXObject(versions[i]);
          break;
      } catch (e) {
      }
    }
    return xhr;
  }

  sendAjax (url, method, data, callback, async) {
    if (async === undefined) {
        async = true;
    }
    var data = this.urlParams(data)

    var x = this.executeAjax();
    if(method == 'GET'){
      url += (data.length ? '?' + data : '')
      data = null
    }
    x.open(method, url, async);
    x.onreadystatechange = function () {
      if (x.readyState == 4) {
        callback(x.responseText)
      }
    };
    if (method == 'POST') {
      x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    }
    x.send(data)
  }

  urlParams(data) {
    var query = [];
    for (var key in data) {
        query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
    }
    return query.join('&')
  }

  onNext(value) {
    var numMessages = this.state.numMessages + 1
    if(numMessages <= this.state.children.length){
      var children = this.state.children
      if(children[numMessages + 1]){
        if(children[numMessages + 1].hidden){
          this.setState({
            inputType: "password"
          })
        }else {
          this.setState({
            inputType: "text"
          })
        }
      }
      children[numMessages - 1] = {
        name: children[numMessages - 1].name,
        type: "response",
        value: value,
        hidden: children[numMessages - 1].hidden
      }
      this.setState({
        children: children
      })
      if(numMessages < children.length){
        this.setState({
          numMessages: numMessages + 1
        });
      }else{
        this.setState({
          numMessages: children.length,
          buttonMsg: "SUBMIT"
        });
      }
    }else{

      var data={};
      this.state.children.forEach(function(item){
        if (item.type == "response") {
          data[item.name]=item.value
        }
      })
      this.state.additional.forEach(function(item){
        data[item.name]=item.value
      })
      var url = this.state.returnForm.action || window.location.href
      var method = this.state.returnForm.method ? this.state.returnForm.method.toUpperCase() : 'GET'
      this.sendAjax(url, method, data, function(responseText) { alert(responseText); })

    }
  }

  render() {
    return (
      // Add your component markup and other subcomponent references here.
      <div className="convo-window">
        <ChatWindow numChildren={this.state.numMessages} children={this.state.children} />
        <MainInputController onClick={this.onNext} msg={this.state.buttonMsg} inputType={this.state.inputType} hidden={this.state.hidden}/>
      </div>
    );
  }
}
