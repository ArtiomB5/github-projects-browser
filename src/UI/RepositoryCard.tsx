import { ItemType } from "../API";
import { Button } from "@alfalab/core-components/button";
import * as style from "./style";
import * as commonStyle from "../common";
import { AiFillGithub } from 'react-icons/ai';

type Props = {
  children: ItemType;
};

export const RepositoryCard: React.FC<Props> = ({ children }: Props) => {
  return (
    <style.Card>
      <style.IMGSContent>
        <style.IMG src={children.owner.avatar_url} alt={children.full_name} />
      </style.IMGSContent>
      <style.TextContent>
        <commonStyle.respTypography size={6}>
          {children.full_name}
        </commonStyle.respTypography>
        <commonStyle.respTypography size={4}>
          {children.description}
        </commonStyle.respTypography>
        <style.Buttons>
          <Button size={"xxs"} view="secondary">
            Learn More
          </Button>
          <Button
            rightAddons={<AiFillGithub />}
            view={"secondary"}
            size={"xxs"}
          />
        </style.Buttons>
      </style.TextContent>
    </style.Card>
  );
};
