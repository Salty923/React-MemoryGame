import React, { Component } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import DevDeck from "./components/DevDeck";
import devs from "./devs.json"


class App extends Component {
      state = {
        devs,
        clicked: 'no',
        score:0,
        highScore:0
      }
  
  

  clickDev = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    this.setState({clicked:'yes'});
    this.score++;
    console.log(this.state.clicked);
   
  };

    shuffle= ()=>{
    var input = this;
    for (var i = input.length - 1; i >= 0; i--) {
      var randomIndex = Math.floor(Math.random() * (i + 1));
      var itemAtIndex = input[randomIndex];
      input[randomIndex] = input[i];
      input[i] = itemAtIndex;
    }
    return input;
  }


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
      <Header score={this.state.score}
              highScore={this.state.highScore}/>
      <Body>
        {this.state.devs.map(dev => (
          <DevDeck
            clickDev={this.clickDev}
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



