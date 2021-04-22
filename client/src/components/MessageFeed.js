import React from "react";

class MessageFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      ws: this.props.ws,
    };
    this.updateMessageFeed = this.updateMessageFeed.bind(this);
    this.updateMessageFeed();
  }

  updateMessageFeed() {
    console.log("updated");
    if (this.state.ws) {
      const ws = this.state.ws;
      const messageFeed = this;
      ws.onmessage = function (msg) {
        console.log(msg.data);
        messageFeed.setState({ content: msg.data });
      };
    }
  }

  render() {
    return (
      <>
        <div className="message_feed">{this.state.content}</div>
      </>
    );
  }
}

export default MessageFeed;
