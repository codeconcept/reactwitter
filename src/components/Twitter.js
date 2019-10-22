import React from "react";
import Tweet from "./Tweet";
import { getTweets } from "./../services/tweetService";

class Twitter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allTweets: []
    };
  }
  componentDidMount() {
    this.setState({
      allTweets: getTweets()
    });
  }
  render() {
    return (
      <div>
        {this.state.allTweets.map(t => (
          <Tweet content={t} key={t.id} />
        ))}
      </div>
    );
  }
}

export default Twitter;
