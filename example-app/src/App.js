import React, { Component } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import DevDeck from "./components/DevDeck";
import devs from "./devs.json"


class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        devs,
        clicked: 'no',
        score:0,
        highScore:0
      }
  }
  

  clickDev = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    this.setState({clicked:'yes'});
    console.log(this.state.clicked);
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
      <Header score={this.setState.score}
              highScore={this.setState.highScore}/>
      <Body>
        {this.state.devs.map(dev => (
          <DevDeck
            clicked={this.state.clicked}
            id={dev.id}
            key={dev.id}
            image={dev.image}
          />
        ))}
      </Body>
      </div>
    );
  }
}

export default App;



