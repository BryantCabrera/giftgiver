import React from 'react';
//shallow lets us render the outer .jsx, but not the content in the child components
    // returns an object that represents our app environment
import { shallow } from 'enzyme';
import App from './App';

const app = shallow(<App />);

// use a global it function
    // parameters: ("description of test", function for test)
it('renders correctly', () => { 
    expect(app).toMatchSnapshot();
});

it('initializes the `state` with an empty list of gifts', () => {
    expect(app.state().gifts).toEqual([]);
});

it('adds a new gift to `state` when clicking the `add gift` button', () => {
    // find Add give button
        // finds class name
        // use simulations they provide
    app.find('.btn-add').simulate('click');

    // make sure state updates
        // to create unique IDs, we get their index +1 so we always get a unique ID for the next object
    expect(app.state().gifts).toEqual([{ id: 1 }]);
});

it('adds a new gift to the rendered list when clicking the `add gift` button', () => {
    app.find('.btn-add').simulate('click');

    // .children() returns an array of the inner child nodes of the node that we're looking at.  can look at its length
    expect(app.find('.gift-list').children().length).toEqual(1);
});