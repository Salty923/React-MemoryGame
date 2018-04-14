import React, { Component } from 'react';
import DevDeck from '../DevDeck';
import devs from "../../devs.json";

class Board extends Component {
    state = {
        devs,
    };
    render() { 
        return (
            <div className="Board">
                {this.state.devs.map(dev => {
                    return (
                        <DevDeck
                            clickDev={this.clickDev}
                            clicked={this.state.clicked}
                            id={dev.id}
                            key={dev.id}
                            image={dev.image}
                        />
                    )
                })}
            </div>
          )
    }
}
 
export default Board;