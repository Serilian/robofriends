import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS
} from "./constans";
import * as reducers from "./reducers";

describe("searchRobots reducer", () => {
  const initialSearchState = {
    searchfield: ""
  };

  it("should return initial state", () => {
    expect(reducers.searchRobots(undefined, undefined)).toEqual({
      searchfield: ""
    });
  });

  it("should handle changeSearchField event", () => {
    expect(
      reducers.searchRobots(initialSearchState, {
        type: CHANGE_SEARCH_FIELD,
        payload: "abc"
      })
    ).toEqual({
      searchfield: "abc"
    });
  });
});

describe("requestRobots reducer", () => {
  const initialRobotsState = {
    robots: [],
    isPending: false,
    error: ""
  };

  it("should return initial state", () => {
    expect(reducers.requestRobots(undefined, undefined)).toEqual(
      initialRobotsState
    );
  });

  it("should handle REQUEST_ROBOTS_PENDING event", () => {
    expect(
      reducers.requestRobots(initialRobotsState, {
        type: REQUEST_ROBOTS_PENDING
      })
    ).toEqual({
      robots: [],
      isPending: true,
      error: ""
    });
  });

  it("should handle REQUEST_ROBOTS_SUCCESS event", () => {
    expect(
      reducers.requestRobots(initialRobotsState, {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: [{}, {}, {}, {}]
      })
    ).toEqual({
      robots: [{}, {}, {}, {}],
      isPending: false,
      error: ""
    });
  });

  it("should handle REQUEST_ROBOTS_FAILED event", () => {
    expect(
      reducers.requestRobots(initialRobotsState, {
        type: REQUEST_ROBOTS_FAILED,
        payload: "Some crappy error"
      })
    ).toEqual({
      robots: [],
      isPending: false,
      error: "Some crappy error"
    });
  });
});
