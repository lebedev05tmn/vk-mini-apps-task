import { FC } from "react";
import { Block } from "shared/ui";
import { NewsInfo } from "entities/News/ui";
import { Comments } from "entities/Comments/ui";
import { useParams } from "@vkontakte/vk-mini-apps-router";

const News: FC = () => {
  const params = useParams();
  return (
    <Block>
      <NewsInfo id={params?.id} />
      <Comments id={params?.id} />
    </Block>
  );
};

export { News };
