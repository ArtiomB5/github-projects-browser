import { ItemType } from "../API";
import * as reducer from "./reposReducer";

let initialState = {} as reducer.StateType;
let repos = [
  {
    id: 1,
    full_name: "full_name1",
    owner: {
      login: "login1",
      avatar_url: "avatar_url1",
    },
    html_url: "html_url1",
    description: "description1",
    watchers: 1,
    ssh_url: "ssh_url1",
    clone_url: "clone_url1",
    created_at: "created_at1",
  },
  {
    id: 2,
    full_name: "full_name2",
    owner: {
      login: "login2",
      avatar_url: "avatar_url2",
    },
    html_url: "html_url2",
    description: "description2",
    watchers: 2,
    ssh_url: "ssh_url2",
    clone_url: "clone_url2",
    created_at: "created_at2",
  },
];

beforeEach(() => {
  initialState = {
    totalCount: 0,
    items: [] as ItemType[],
    isSearching: false,
    sortHightLow: true,
  };
});

test("Should create SET_REPOS action", () => {
  expect(reducer.setRepos(repos)).toEqual({
    type: "repos/setRepos",
    payload: repos,
  });
});

test("Should create SET_TOTAL_COUNT action", () => {
  expect(reducer.setTotalCount(2)).toEqual({
    type: "repos/setTotalCount",
    payload: 2,
  });
});

test("Should create SET_SEARCHING action", () => {
  expect(reducer.setIsSearching(true)).toEqual({
    type: "repos/setIsSearching",
    payload: true,
  });
});

test("Should create SET_BY_DATE action", () => {
  expect(reducer.sortByDate(false)).toEqual({
    type: "repos/sortByDate",
    payload: false,
  });
});

test("Should set repos", () => {
  const action = reducer.setRepos(repos);
  const newState = { ...initialState, items: repos };
  expect(reducer.reposReducer(initialState, action)).toEqual(newState);
});

test("Should set total count", () => {
  const action = reducer.setTotalCount(5);
  const newState = { ...initialState, totalCount: 5 };
  expect(reducer.reposReducer(initialState, action)).toEqual(newState);
});

test("Should set total isSearching", () => {
  const action = reducer.setIsSearching(true);
  const newState = { ...initialState, isSearching: true };
  expect(reducer.reposReducer(initialState, action)).toEqual(newState);
});

test("Should set sort type", () => {
  const action = reducer.sortByDate(false);
  const newState = { ...initialState, sortHightLow: false };
  expect(reducer.reposReducer(initialState, action)).toEqual(newState);
});
