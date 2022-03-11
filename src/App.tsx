import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import { useDebounce } from "./hooks/useDebounce";
import { API, ItemType, ResponseType } from "./API";
import { RepositoryCard } from "./UI/RepositoryCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepos, SetRepos, StateType } from "./store/reposReducer";
import { AppRootStateType } from "./store";
import { Input } from "@alfalab/core-components/input";
import { GetCards } from "./components/GetCards";
import { Route, Routes, useParams } from "react-router-dom";
import { CardPage } from "./components/CardPage";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const dispatch = useDispatch();
  const isSearching2 = useSelector<AppRootStateType, boolean>(
    (state) => state.reposReducer.isSearching
  );
  const results = useSelector<AppRootStateType, ItemType[]>(
    (state) => state.reposReducer.items
  );

  useEffect(() => {
    if (debouncedSearchTerm) {
      dispatch(fetchRepos(debouncedSearchTerm));
    } else {
      dispatch(SetRepos([] as ItemType[]));
    }
  }, [debouncedSearchTerm, dispatch]);
  let { id } = useParams();
  return (
    <div>
      <div>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<GetCards repos={results} onChangeHandler={setSearchTerm}/>} />
          <Route path="/:id" element={<CardPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
