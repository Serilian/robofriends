import React from 'react';
import {shallow} from 'enzyme';
import CounterButton from './CounterButton';

describe('CounterButton testing', () => {
    it('renders CounterButton component properly', () => {
        const mockColor = 'red';
        expect(shallow(<CounterButton color={mockColor}/>).length).toMatchSnapshot();

    });

    it('corectly increments the counter', () => {
        expect.assertions(2);
        const mockColor = 'red';

        const wrapper = shallow(<CounterButton color={mockColor}/>);

        wrapper.find('[id="counter"]').simulate('click');
        expect(wrapper.state()).toEqual({count: 1});
        wrapper.find('[id="counter"]').simulate('click');
        expect(wrapper.state()).toEqual({count: 2});
    });

});
