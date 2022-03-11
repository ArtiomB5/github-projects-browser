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
    total_count: 0,
    items: [] as ItemType[],
    isSearching: false,
    sortHightLow: true,
  };
});

test("Should create SET_REPOS action", () => {
  expect(reducer.SetRepos(repos)).toEqual({
    type: "SET_REPOS",
    payload: repos,
  });
});

test("Should create SET_TOTAL_COUNT action", () => {
  expect(reducer.SetTotalCount(2)).toEqual({
    type: "SET_TOTAL_COUNT",
    payload: 2,
  });
});

test("Should create SET_SEARCHING action", () => {
  expect(reducer.SetIsSearching(true)).toEqual({
    type: "SET_SEARCHING",
    payload: true,
  });
});

test("Should create SET_BY_DATE action", () => {
  expect(reducer.SortByDate(false)).toEqual({
    type: "SET_BY_DATE",
    payload: false,
  });
});

test("Should set repos", () => {
  const action = reducer.SetRepos(repos);
  const newState = { ...initialState, items: repos };
  expect(reducer.reposReducer(initialState, action)).toEqual(newState);
});

test("Should set total count", () => {
  const action = reducer.SetTotalCount(5);
  const newState = { ...initialState, total_count: 5 };
  expect(reducer.reposReducer(initialState, action)).toEqual(newState);
});

test("Should set total isSearching", () => {
  const action = reducer.SetIsSearching(true);
  const newState = { ...initialState, isSearching: true };
  expect(reducer.reposReducer(initialState, action)).toEqual(newState);
});

test("Should set sort type", () => {
  const action = reducer.SortByDate(false);
  const newState = { ...initialState, sortHightLow: false };
  expect(reducer.reposReducer(initialState, action)).toEqual(newState);
});
