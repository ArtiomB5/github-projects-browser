import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ItemType } from "../../API";
import { AppRootStateType } from "../../store";
import { FaUsers } from "react-icons/fa";
import { BsShareFill } from "react-icons/bs";
import { MdDateRange } from "react-icons/md";

export const CardPage = () => {
  let { id } = useParams();
  const repository = useSelector<AppRootStateType, ItemType>(
    (state) => state.reposReducer.items.filter((r) => r.id === Number(id))[0]
  );
  return (
    <div>
      <div>{repository.id}</div>
      <div>{repository.full_name}</div>
      <div>{repository.description}</div>
      <div>
        <FaUsers /> {repository.watchers}
      </div>
      <div>
        <BsShareFill />
        {repository.ssh_url}
      </div>
      <div>
        <BsShareFill />
        {repository.clone_url}
      </div>
      <div>
        <MdDateRange />
        {repository.created_at}
      </div>
      <div>{repository.html_url}</div>
    </div>
  );
};

// {
//   id: number;
//   full_name: string;
//   owner: {
//     login: string;
//     avatar_url: string;
//   };
//   html_url: string;
//   description: string;
//   watchers: number;
//   ssh_url: string;
//   clone_url: string;
//   created_at: string;
// }
