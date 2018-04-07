import React, { Component } from 'react';
import '../styles/Box.css';

class Box extends Component {
    constructor(props){
        super(props);

        this.state = {clicked:'no'};
    }
    render() {
        return (
            <div>
                <button className="box" onClick={event => this.setState({ clicked: 'yes' })} />
                the state is {this.state.clicked}
            </div>
        );
    }
}

export default Box;