import React from 'react';
import { shallow } from 'enzyme';
import Gift from './Gift';

describe('Gift', () => {
    const mockRemove = jest.fn();
    const id = 1;

    // We need to mimic passing props by passing in props in our tests to the component being tested
    const props = {gift: { id }, removeGift: mockRemove}
    const gift = shallow(<Gift {...props} />);

    it('renders properly', () => {
        expect(gift).toMatchSnapshot();
    });

    it('initializes a person and present in `state`', () => {
        expect(gift.state()).toEqual({
            person: '',
            present: ''
        });
    });

    describe('when typing into the person input', () => {
        const person = 'Uncle';

        beforeEach(() => {
            // change event = simulates a user typing into an input and changing it
            // we have to specify what we want the input to change to
            gift.find('.input-person').simulate('change', {
                target: { value: person }
            });
        });

        it('updates the person in `state`', () => {
            expect(gift.state().person).toEqual(person);
        });
    });

    describe('when typing into the present input', () => {
        const present = 'Golf Clubs';

        beforeEach(() => {
            gift.find('.input-present').simulate('change', {
                target: { value: present }
            })
        });

        it('updates the present in`state`', () => {
            expect(gift.state().present).toEqual(present);
        });
    });

    describe('when clicking the `Remove Gift` button', () => {
        beforeEach(() => {
            gift.find('.btn-remove').simulate('click');
        });

        it('calls the removeGift callback', () => {
            // Jest lets us create mock functions by using Jest.fn method
            // a.Lets us check whether or not the function is called
            // b.Lets us check whether or not the function is called with certain arguments
            expect(mockRemove).toHaveBeenCalledWith(id);
            
        });
    });
});