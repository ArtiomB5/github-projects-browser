import { ItemType } from "../API";
import { Button } from "@alfalab/core-components/button";
import * as style from "./style";
import * as commonStyle from "../common";
import { Link } from "react-router-dom";

type Props = {
  children: ItemType;
};

export const RepositoryCard: React.FC<Props> = ({ children }) => {
  return (
    <style.Card>
      <style.IMGSContent>
        <style.IMG src={children.owner.avatar_url} alt={children.full_name} />
        <commonStyle.respTypography size={2}>
          {children.full_name.split("/")[0]}
        </commonStyle.respTypography>
      </style.IMGSContent>
      <style.TextContent>
        <commonStyle.respTypography size={5}>
          {children.full_name.split("/")[1]}
        </commonStyle.respTypography>
        <commonStyle.respTypography size={3.5}>
          {children.description}
        </commonStyle.respTypography>
        <style.Buttons>
          <Button size={"xxs"} view="secondary">
            <Link to={`/${children.id}`}>More</Link>
            Learn More
          </Button>
        </style.Buttons>
      </style.TextContent>
    </style.Card>
  );
};
