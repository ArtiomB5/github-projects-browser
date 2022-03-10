import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import { List } from "@alfalab/core-components/list";


import { useDebounce } from "./hooks/useDebounce";
import { API, ItemType, ResponseType } from "./API";
import { RepositoryCard } from "./UI/RepositoryCard";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<ItemType[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true);
      API.getUsers(debouncedSearchTerm).then((results: ResponseType) => {
        setIsSearching(false);
        setResults(results.data.items);
      });
    } else {
      setResults([]);
    }
  }, [debouncedSearchTerm]);

  return (
    <div>
      <input
        placeholder="Search Request"
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {isSearching && <div>Searching ...</div>}

      

      
      {results.map((item: ItemType) => {
        return <div key={uuidv4()}><RepositoryCard >{item}</RepositoryCard></div>;
      })}
    </div>
  );
}

export default App;
