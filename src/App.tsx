import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import { useDebounce } from "./hooks/useDebounce";
import { API, ItemType, ResponseType } from "./API";
import { RepositoryCard } from "./UI/RepositoryCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepos, SetRepos, StateType } from "./store/reposReducer";
import { AppRootStateType } from "./store";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const dispatch = useDispatch();
  const isSearching2 = useSelector<AppRootStateType, boolean>(
    (state) => state.reposReducer.isSearching
  );
  const results2 = useSelector<AppRootStateType, ItemType[]>(
    (state) => state.reposReducer.items
  );

  useEffect(() => {
    if (debouncedSearchTerm) {
      dispatch(fetchRepos(debouncedSearchTerm));
    } else {
      dispatch(SetRepos([] as ItemType[]));
    }
  }, [debouncedSearchTerm, dispatch]);

  return (
    <div>
      <div>
        <input
          placeholder="Search Request"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div>
        {isSearching2 && <div>Searching ...</div>}
        {results2.map((item: ItemType) => {
          return (
            <div key={uuidv4()}>
              <RepositoryCard>{item}</RepositoryCard>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
