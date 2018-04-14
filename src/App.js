import React, { Component } from "react";
import Header from "./components/Header";
import Board  from './components/Board';
import devs from "./devs.json"


class App extends Component {
      state = {
        devs: devs,
        score:0,
        highScore:0,
        freeDevs: devs
      }

      

  render() {
    return (
      <div>
      <Header score={this.state.score}
              highScore={this.state.highScore}/>
      <Board />
      
      </div>
    );
  }
}


export default App;



