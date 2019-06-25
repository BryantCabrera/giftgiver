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