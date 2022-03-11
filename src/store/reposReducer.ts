import { Dispatch } from "redux";
import { API, ItemType, ResponseType } from "../API";

const initialState = {
  total_count: 0,
  items: [] as ItemType[],
  isSearching: false,
};

export const reposReducer = (
  state: StateType = initialState,
  action: ActionType
) => {
  switch (action.type) {
    case "SET_REPOS":
      return { ...state, items: action.payload };
    case "SET_TOTAL_COUNT":
      return { ...state, total_count: action.payload };
    case "SET_SEARCHING":
      return { ...state, isSearching: action.payload };
    default:
      return state;
  }
};

export const SetRepos = (payload: ItemType[]) => {
  return {
    type: "SET_REPOS",
    payload,
  } as const;
};

const SetTotalCount = (payload: number) => {
  return {
    type: "SET_TOTAL_COUNT",
    payload,
  } as const;
};

const SetIsSearching = (payload: boolean) => {
  return {
    type: "SET_SEARCHING",
    payload,
  } as const;
};

//thunks
export const fetchRepos = (searchRequest: string) => {
  return (dispatch: Dispatch<ThunkDispatch>) => {
    API.getRepos(searchRequest).then((resp: ResponseType) => {
      dispatch(SetIsSearching(true));
      dispatch(SetRepos(resp.data.items));
      dispatch(SetTotalCount(resp.data.total_count));
      dispatch(SetIsSearching(false));
    });
  };
};

export type StateType = {
  total_count: number;
  items: ItemType[];
  isSearching: boolean;
};

type ActionType =
  | ReturnType<typeof SetRepos>
  | ReturnType<typeof SetTotalCount>
  | ReturnType<typeof SetIsSearching>;

type ThunkDispatch = ActionType;
