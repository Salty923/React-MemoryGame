import React from 'react';
import './Header.css';

 const Header = (props) => (
            <div className='container'>
                <div className="App">
                    <header className="App-header">
                        <h3 className="score">Score: <span id="score">{props.score}</span>|Top Score: <span id="topScore">{props.highScore}</span></h3>
                        <h1 className="App-title">The Developer Deck!</h1>
                    </header>
                    <p className="App-intro">
                        Click to hire all 12, but not twice!
                    </p>
                </div>
            </div>
        );

export default Header;