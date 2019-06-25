// component is also exported, but not default, so need to include {}
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Gift from './Gift';

class App extends Component {
    constructor() {
        // calls all constructors of parent classes
        super();

        this.state = {
            gifts: []
        };
    }

    // arrow functions allow this to be automatically applied to this method
    // we don’t want the method to create its own this object so we can be sure this refers to the class/component so we can update state
    addGift = () => {
        const { gifts } = this.state

        const ids = this.state.gifts.map(gift => gift.id);

        // spread operator spreads out the ids from above
        // ternary takes care of edge case when we have an empty array in the beginning
        const max_id = ids.length > 0 ? Math.max(...ids) : 0;

        gifts.push({ id: max_id + 1 });

        this.setState({
            gifts
        });
    }

    removeGift = id => {
        // filter with implicit return
        const gifts = this.state.gifts.filter(gift => gift.id !== id);

        this.setState({ gifts });
    }

    render() {
        return (
            <div>
                <h2>Gift Giver</h2>

                <div className='gift-list'>
                    { // interpolation lets us add logic to our render function
                        this.state.gifts.map(gift => {
                            return (
                                <Gift key={gift.id} />
                            )
                        })
                    }
                </div>

                <Button className='btn-add' onClick={this.addGift}>Add Gift</Button>
            </div>
        )
    }
}

export default App;