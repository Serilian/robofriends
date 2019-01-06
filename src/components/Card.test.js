import React from 'react';
import {shallow} from 'enzyme';
import Card from './Card';


describe('correctly renders Card component', () => {
    it('renders Card component', () => {
        expect(shallow(<Card/>).length).toEqual(1);            expect(shallow(<Card/>)).toMatchSnapshot();
    });
});
