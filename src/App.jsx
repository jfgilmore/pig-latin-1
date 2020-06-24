import React from "react";
import toPigLatin from "./utils/pigLatin";

class App extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const english = event.target[0].value;
    const result = toPigLatin(english);
    this.setState({ pigLatin: result });
  };

  render() {
    const pigLatin = this.state?.pigLatin;
    return (
      <div className="container">
        <h1>Convert english to pig latin! 🐷</h1>
        <form onSubmit={this.handleSubmit}>
          <textarea name="pig" id="pig"></textarea>
          <input type="submit" value="Convert" />
        </form>
        <h1>Output</h1>
        <div className="output">
          <h2>{pigLatin}</h2>
        </div>
      </div>
    );
  }
}

export default App;

// todo

// 1. write the pigLatin function and pass all of the tests
// 2. put the pig latin into the output box
