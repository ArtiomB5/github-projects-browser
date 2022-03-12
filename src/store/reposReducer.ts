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
    },
  },
})

export const {setRepos, setTotalCount, setIsSearching, sortByDate} = counterSlice.actions;

export const reposReducer = counterSlice.reducer;

// export const reposReducer = (
//   state: StateType = initialState,
//   action: ActionType
// ) => {
//   switch (action.type) {
//     case "SET_REPOS":
//       return { ...state, items: action.payload };
//     case "SET_TOTAL_COUNT":
//       return { ...state, totalCount: action.payload };
//     case "SET_SEARCHING":
//       return { ...state, isSearching: action.payload };
//     case "SET_BY_DATE":
//       const deepCopyItems = state.items.map((i: ItemType) => {
//         return { ...i, owner: { ...i.owner } };
//       });
//       const filteredArray = deepCopyItems.sort((a, b) => {
//         const dateA = new Date(a.created_at).valueOf();
//         const dateB = new Date(b.created_at).valueOf();
//         if (action.payload) {
//           return dateA - dateB;
//         } else {
//           return dateB - dateA;
//         }
//       });
//       return {
//         ...state,
//         items: filteredArray,
//         sortHightLow: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export const SetRepos = (payload: ItemType[]) => {
//   return {
//     type: "SET_REPOS",
//     payload,
//   } as const;
// };

// export const SetTotalCount = (payload: number) => {
//   return {
//     type: "SET_TOTAL_COUNT",
//     payload,
//   } as const;
// };

// export const SetIsSearching = (payload: boolean) => {
//   return {
//     type: "SET_SEARCHING",
//     payload,
//   } as const;
// };

// export const SortByDate = (payload: boolean) => {
//   return {
//     type: "SET_BY_DATE",
//     payload,
//   } as const;
// };

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
