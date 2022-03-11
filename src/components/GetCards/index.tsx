import React, { ChangeEvent } from "react";
import { ItemType } from "../../API";
import { RepositoryCard } from "../RepositoryCard";
import { v4 as uuidv4 } from "uuid";
import { Input } from "@alfalab/core-components/input";
import { Button } from "@alfalab/core-components/button";
import { useDispatch, useSelector } from "react-redux";
import { AppRootStateType } from "../../store";
import { Loader } from "@alfalab/core-components/loader";
import * as style from "./style";
import { SortByDate } from "../../store/reposReducer";
import { BiSortDown, BiSortUp } from "react-icons/bi";

type Props = {
  repos: ItemType[];
  onChangeHandler: (e: string) => void;
};

export const GetCards: React.FC<Props> = ({ repos, onChangeHandler }) => {
  const dispatch = useDispatch();
  const isSearching = useSelector<AppRootStateType, boolean>(
    (state) => state.reposReducer.isSearching
  );
  const sorting = useSelector<AppRootStateType, boolean>(
    (state) => state.reposReducer.sortHightLow
  );

  return (
    <>
      <style.Column>
        <Input
          label="Search Request"
          name="Search Request"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onChangeHandler(e.currentTarget.value)
          }
          clear={true}
          size={"s"}
          block={true}
        />
        {repos.length > 0 && <style.Row>Sort by added date:</style.Row>}
        {repos.length > 0 && (
          <style.Row>
            {!sorting && (
              <Button onClick={() => dispatch(SortByDate(true))} size={"s"}>
                <BiSortUp />
              </Button>
            )}
            {sorting && (
              <Button onClick={() => dispatch(SortByDate(false))} size={"s"}>
                <BiSortDown />
              </Button>
            )}
          </style.Row>
        )}
      </style.Column>

      {isSearching && (
        <div>
          <Loader />
        </div>
      )}
      {!isSearching && (
        <>
          {repos.map((r) => (
            <RepositoryCard key={uuidv4()}>{r}</RepositoryCard>
          ))}
        </>
      )}
    </>
  );
};
