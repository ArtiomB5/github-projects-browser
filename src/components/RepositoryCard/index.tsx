import { ItemType } from "../../API";
import { Button } from "@alfalab/core-components/button";
import * as style from "./style";
import * as common from "../../common";

type Props = {
  children: ItemType;
};

export const RepositoryCard: React.FC<Props> = ({ children }) => {
  return (
    <style.Card>
      <style.IMGSContent>
        <common.IMG src={children.owner.avatar_url} alt={children.full_name} size={6}/>
        <common.respTypography size={1}>
          {children.full_name.split("/")[0]}
        </common.respTypography>
      </style.IMGSContent>
      <style.TextContent>
        <common.respTypography size={3}>
          {children.full_name.split("/")[1]}
        </common.respTypography>
        <common.respTypography size={2}>
          {children.description}
        </common.respTypography>
        <common.respTypography size={2}>
          {children.created_at}
        </common.respTypography>
        <style.Buttons>
          <common.Link to={`/${children.id}`}>
            <Button size={"xxs"} view="secondary">
              Learn More
            </Button>
          </common.Link>
        </style.Buttons>
      </style.TextContent>
    </style.Card>
  );
};
