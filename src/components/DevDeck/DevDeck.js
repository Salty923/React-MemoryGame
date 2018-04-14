import React, {Component} from "react";
import './DevDeck.css';


class DevDeck extends Component{
    state ={
        clicked:"no"
    };

    clickDev = id => {

        //   shuffle= ()=>{
  //   var input = this;
  //   for (var i = input.length - 1; i >= 0; i--) {
  //     var randomIndex = Math.floor(Math.random() * (i + 1));
  //     var itemAtIndex = input[randomIndex];
  //     input[randomIndex] = input[i];
  //     input[i] = itemAtIndex;
  //   }
  //   return input;
  // }

        if (this.state.clicked === 'no') {
            this.setState({
                clicked: 'yes'
            });
        } else {
            console.log('you lose');
        }
        console.log(this.state.clicked);

    };

    render(){
        return(
            <div className="text-center">
                <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6 img-container">
                    <img onClick={this.clickDev} alt={this.props.name} src={this.props.image} />
                    <h1>{this.state.clicked}</h1>
                </div>
            </div>
        );
    }
}

export default DevDeck;