import React from 'react';
import {shallow} from 'enzyme';
import MainPage from './MainPage';

let wrapper;

beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchfield: '',
        isPending: false
    };
    wrapper = shallow(<MainPage {...mockProps}/>)
});

describe('MainPage testing', () => {
    it('renders MainPage component without crashing', () => {

        expect(wrapper).toMatchSnapshot();

    });

    it('filters the robots correctly', () => {
        expect.assertions(2);
        const mockProps = {
            onRequestRobots: jest.fn(),
            robots: [
                {
                    id: 1,
                    name: 'John'
                },
                {
                    id: 2,
                    name: 'Mathew'
                },
                {
                    id: 3,
                    name: 'Johnny'
                }
            ],
            searchfield: 'oh',
            isPending: false
        };
        expect(wrapper.instance().filterRobots(mockProps.robots, mockProps.searchfield)).toEqual([{
            id: 1,
            name: 'John'
        }, {
            id: 3,
            name: 'Johnny'
        }]);
        expect(wrapper.instance().filterRobots([], '')).toEqual([]);
    });
});
