import React from 'react';
import {shallow} from 'enzyme';
import Header from './Header';


describe('correctly renders Card component', () => {
    it('renders Header component', () => {
        expect(shallow(<Header/>)).toMatchSnapshot();
    });
});
