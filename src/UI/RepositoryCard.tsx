import { ItemType } from "../API";
import { Typography } from "@alfalab/core-components/typography";
import { Link } from "@alfalab/core-components/link";
import * as style from "./style";

type Props = {
  children: ItemType;
};

export const RepositoryCard: React.FC<Props> = ({ children }: Props) => {
  return (
    <style.Card>
      <div>
        <style.IMG src={children.owner.avatar_url} alt={children.full_name} />
      </div>
      <style.Data>
        <div>
          <Typography.TitleResponsive
            view={"medium"}
            key={children.full_name}
            tag="div"
          >
            {children.full_name}
          </Typography.TitleResponsive>
        </div>
        <div>{children.description}</div>
        <div>
          <Link
            view={"default"}
            rel={"noopener"}
            target={"_blank"}
            href={children.html_url}
          >
            Learn More
          </Link>
        </div>
      </style.Data>
    </style.Card>
  );
};
