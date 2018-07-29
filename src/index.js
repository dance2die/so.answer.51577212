import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class Reddit extends React.Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios
      .get(`https://www.reddit.com/r/reactjs.json`)
      .then(res => {
        const posts = res.data.data.children.map(obj => obj.data);
        this.setState({ posts });
      })
      .catch(error => {
        console.log(error.response);
      });
  }

  render() {
    return (
      <div id="reddit_data">
        <h1>/r/reactjs</h1>
        <ul>
          {this.state.posts.map(post => {
            return <li key={post.id}>{post.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Reddit />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
