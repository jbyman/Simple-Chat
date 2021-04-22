import "./App.css";
import React from "react";
import MessageFeed from "./components/MessageFeed";
import MessageSend from "./components/MessageSend";

class App extends React.Component {
  render() {
    return (
      <>
        <div className="main">
          <header>
            <p className="main_header">Simple Chat</p>
          </header>
          <div className="input_text">
            <div className="prompt">Type Something:</div>
            <br />
            <br />

            <MessageSend ws={this.props.ws} />
          </div>
          <MessageFeed ws={this.props.ws} />
        </div>
      </>
    );
  }
}

export default App;
