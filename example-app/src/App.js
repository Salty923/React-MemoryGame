import React, { Component } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import DevDeck from "./components/DevDeck";
import devs from "./devs.json"


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    devs
  };

  clickDev = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const devs = this.state.devs.filter(dev => dev.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ devs });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
      <Header />
      <Body>
        {this.state.devs.map(dev => (
          <DevDeck
            clickDev={this.clickDev}
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



