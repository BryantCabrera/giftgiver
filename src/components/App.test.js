import React from 'react';
//shallow lets us render the outer .jsx, but not the content in the child components
    // returns an object that represents our app environment
import { shallow } from 'enzyme';
import App from './App';

// gather related tests and group them together in a describe function
// refactoring into describe will make the old snapshot obsolete, so press u in test command terminal to update snapshot
describe('App', () => {
    const app = shallow(<App />);

    // use a global it function
    // parameters: ("description of test", function for test)
    it('renders correctly', () => {
        expect(app).toMatchSnapshot();
    });

    it('initializes the `state` with an empty list of gifts', () => {
        expect(app.state().gifts).toEqual([]);
    });

    // can create nested describe buttons for tests that simulate the same action
    describe('when clicking the `add-gift` button', () => {
        beforeEach(() => {
            app.find('.btn-add').simulate('click');
        });

        afterEach(() => {
            app.setState({
                gifts: []
            });
        });

        it('adds a new gift to `state`', () => {
            // find Add give button
            // finds class name
            // use simulations they provide
            // app.find('.btn-add').simulate('click');

            // make sure state updates
            // to create unique IDs, we get their index +1 so we always get a unique ID for the next object
            expect(app.state().gifts).toEqual([{ id: 1 }]);
        });

        // BEWARE: test pollution
        // a.	= when one test affects the others
        // i.E.g.updating state
        // b.Ideally, we want each test to be an isolated case
        it('adds a new gift to the rendered list', () => {
            // app.find('.btn-add').simulate('click');

            // .children() returns an array of the inner child nodes of the node that we're looking at.  can look at its length
            expect(app.find('.gift-list').children().length).toEqual(1);
        });

        it('creates a Gift component', () => {
            // .exists returns a Boolean that depends on whether or not the node is actually there
            expect(app.find('Gift').exists()).toBe(true);
        });
    }); 
});
