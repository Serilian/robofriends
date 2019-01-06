import React from 'react';
import {shallow} from 'enzyme';
import CardList from './CardList';



describe('correctly renders CardList component', () => {
    it('renders Card component', () => {

        const mockRobots = [
            {id: 1, name: 'Johm', username: 'JohnJohn', email: 'john@john.com'}
        ];

        expect(shallow(<CardList robots={mockRobots}/>).length).toEqual(1);
        expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot();
    });
});
