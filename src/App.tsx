import React, { useEffect, useState } from "react";
import * as style from "./AppStyle";
import { useDebounce } from "./hooks/useDebounce";
import { ItemType } from "./API";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepos, setRepos } from "./store/reposReducer";
import { AppRootStateType } from "./store";
import { GetCards } from "./components/GetCards";
import { Route, Routes } from "react-router-dom";
import { CardPage } from "./components/CardPage";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const dispatch = useDispatch();

  const results = useSelector<AppRootStateType, ItemType[]>(
    (state) => state.reposReducer.items
  );

  useEffect(() => {
    if (debouncedSearchTerm) {
      dispatch(fetchRepos(debouncedSearchTerm));
    } else {
      dispatch(setRepos([] as ItemType[]));
    }
  }, [debouncedSearchTerm, dispatch]);
  return (
    <style.App>
      <Routes>
        <Route
          path="/"
          element={<GetCards repos={results} onChangeHandler={setSearchTerm} />}
        />
        <Route path="/:id" element={<CardPage />} />
      </Routes>
    </style.App>
  );
}

export default App;
