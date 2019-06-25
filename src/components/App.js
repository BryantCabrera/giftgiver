// component is also exported, but not default, so need to include {}
import React, { Component } from 'react';

class App extends Component {
    constructor() {
        // calls all constructors of parent classes
        super();

        this.state = {
            gifts: []
        };
    }

    render() {
        return (
            <div>
                <h2>Gift Giver</h2>
            </div>
        )
    }
}

export default App;