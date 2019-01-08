import {requestRobots, setSearchField} from './actions';
import {CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_PENDING} from "./constans";
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware]);


describe('Actions testing', () => {
    it('should send forward text from searchField', () => {
        expect.assertions(1);
        const text = 'test1';
        expect(setSearchField(text)).toEqual({
            type: CHANGE_SEARCH_FIELD,
            payload: text
        })
    });

    it('handles requesting robots API', () => {
        const store = mockStore();
        store.dispatch(requestRobots());
        const action = store.getActions();
        const expectedAction = {
            type: REQUEST_ROBOTS_PENDING
        };

        expect(action[0]).toEqual(expectedAction);
    });
});