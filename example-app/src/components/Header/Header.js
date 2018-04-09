import React, { Component } from 'react';
import './Header.css';
let score =0;
let topScore =0;


class Header extends Component {
    render() {
        return (
            <div className='container'>
                <div className="App">
                    <header className="App-header">
                        <h3 className="score">Score: <span id="score">{score}</span>|Top Score: <span id="topScore">{topScore}</span></h3>
                        <h1 className="App-title">The Developer Deck!</h1>
                    </header>
                    <p className="App-intro">
                        Click to hire all 12, but not twice!
                    </p>
                </div>
            </div>
        );
    }
}

export default Header;