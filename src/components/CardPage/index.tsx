import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ItemType } from "../../API";
import { AppRootStateType } from "../../store";
import { Button } from "@alfalab/core-components/button";
import { Notification } from "@alfalab/core-components/notification";
import { BiCopy } from "react-icons/bi";
import * as style from "./style";
import * as common from "../../common";

export const CardPage = () => {
  let { id } = useParams();
  const repository = useSelector<AppRootStateType, ItemType>(
    (state) => state.reposReducer.items.filter((r) => r.id === Number(id))[0]
  );
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisiblity = React.useCallback(
    () => setIsVisible((prev) => !prev),
    []
  );
  const hideNotification = React.useCallback(() => setIsVisible(false), []);
  const copyHandler = (link: string) => {
    navigator.clipboard.writeText(link);
    toggleVisiblity();
  };
  return (
    <>
      <style.Column>
        <style.Header>
          <common.IMG
            src={repository.owner.avatar_url}
            alt={repository.full_name}
            size={15}
          />
          <style.Column>
            <style.Text>{repository.full_name}</style.Text>
            <style.Text>
              {`Status: ${repository.owner.login ? "ONLINE" : "OFFLINE"}`}
            </style.Text>
            <style.Text>Watchers: {repository.watchers} persons</style.Text>
            <style.Text>{`Repository created at: ${repository.created_at}`}</style.Text>
          </style.Column>
        </style.Header>
        <style.Description>{repository.description}</style.Description>
        <style.Links>
          <style.Text>LINKS:</style.Text>
          <div>
            <style.Text>
              <Button
                onClick={() => copyHandler(repository.ssh_url)}
                size={"xxs"}
              >
                <BiCopy />
              </Button>
              {`SSH URL: ${repository.ssh_url}`}
            </style.Text>
            <style.Text>
              <Button
                onClick={() => copyHandler(repository.clone_url)}
                size={"xxs"}
              >
                <BiCopy />
              </Button>
              {`CLONE URL: ${repository.clone_url}`}
            </style.Text>
            <style.Text>
              <Button
                onClick={() => copyHandler(repository.html_url)}
                size={"xxs"}
              >
                <BiCopy />
              </Button>
              {`URL: ${repository.html_url}`}
            </style.Text>
          </div>
        </style.Links>
        <style.Row>
          <common.Link to={`/`}>
            <Button size={"xxs"} view="secondary">
              Back
            </Button>
          </common.Link>
          <style.ALink href={`${repository.html_url}`}>
            <Button size={"xxs"} view="secondary">
              Repository
            </Button>
          </style.ALink>
        </style.Row>
      </style.Column>
      <Notification
        badge="positive"
        title="Link copied"
        visible={isVisible}
        offset={180}
        onClickOutside={hideNotification}
        onClose={hideNotification}
        onCloseTimeout={hideNotification}
      >
        Link copied
      </Notification>
    </>
  );
};
