import { createSlice } from "@reduxjs/toolkit";
import { Dispatch } from "redux";
import { API, ItemType, ResponseType } from "../API";

const initialState = {
  totalCount: 0,
  items: [] as ItemType[],
  isSearching: false,
  sortHightLow: true,
};

const counterSlice = createSlice({
  name: 'repos',
  initialState,
  reducers: {
    setRepos(state, action: {payload: ItemType[]}) {
      state.items = action.payload;
    },
    setTotalCount(state, action: {payload: number}) {
      state.totalCount = action.payload;
    },
    setIsSearching(state, action: {payload: boolean}) {
      state.isSearching = action.payload;
    },
    sortByDate(state, action: {payload: boolean}) {
      state.sortHightLow = action.payload;
      state.items = state.items.sort((a, b) => {
        const DateA = new Date(a.created_at).valueOf();
        const DateB = new Date(b.created_at).valueOf();
        return state.sortHightLow ? DateA - DateB : DateB - DateA;
      })
    },
  },
})

export const {setRepos, setTotalCount, setIsSearching, sortByDate} = counterSlice.actions;

export const reposReducer = counterSlice.reducer;

//thunks
export const fetchRepos = (searchRequest: string) => {
  return (dispatch: Dispatch<ThunkDispatch>) => {
    API.getRepos(searchRequest).then((resp: ResponseType) => {
      dispatch(setIsSearching(true));
      dispatch(setRepos(resp.data.items));
      dispatch(setTotalCount(resp.data.total_count));
      dispatch(setIsSearching(false));
    });
  };
};

export type StateType = {
  totalCount: number;
  items: ItemType[];
  isSearching: boolean;
  sortHightLow: boolean;
};

type ActionType =
  | ReturnType<typeof setRepos>
  | ReturnType<typeof setTotalCount>
  | ReturnType<typeof setIsSearching>
  | ReturnType<typeof sortByDate>;

type ThunkDispatch = ActionType;
