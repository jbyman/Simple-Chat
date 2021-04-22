import React from "react";

class MessageSend extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      ws: this.props.ws,
    };

    this.sendMessage = this.sendMessage.bind(this);
  }

  sendMessage(e) {
    e.preventDefault();

    if (this.state) {
      try {
        this.state.ws.send(this.state.message);
      } catch (error) {
        console.log(error);
      }
    }
  }

  render() {
    return (
      <>
        <form onSubmit={this.sendMessage}>
          <input
            type="text"
            onChange={(e) => this.setState({ message: e.target.value })}
          ></input>
          <input type="submit" value="Send"></input>
        </form>
      </>
    );
  }
}

export default MessageSend;
