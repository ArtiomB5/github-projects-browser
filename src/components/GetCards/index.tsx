import React, { ChangeEvent } from "react";
import { ItemType } from "../../API";
import { RepositoryCard } from "../../UI/RepositoryCard";
import { v4 as uuidv4 } from "uuid";
import { Input } from "@alfalab/core-components/input";

type Props = {
  repos: ItemType[];
  onChangeHandler: (e: string) => void;
};

export const GetCards: React.FC<Props> = ({ repos, onChangeHandler }) => {
  return (
    <>
      <Input
        label="Search Request"
        name="Search Request"
        onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeHandler(e.currentTarget.value)}
        clear={true}
        size={"l"}
      />
      {repos.map((r) => (
        <RepositoryCard key={uuidv4()}>{r}</RepositoryCard>
      ))}
    </>
  );
};
