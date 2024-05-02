import { FC } from "react";
import { Block } from "shared/ui";
import { NewsInfo } from "entities/News/ui";
import { Comments } from "entities/Comments/ui";
import { useParams } from "@vkontakte/vk-mini-apps-router";
import { useSelector } from "react-redux";
import { RootState } from "app/store";

const News: FC = () => {
  const params = useParams();
  const kids = useSelector((state: RootState) => state.NEWS.newsItem.kids);
  return (
    <Block>
      <NewsInfo id={params?.id} />
      {kids !== undefined && <Comments kids={kids} />}
    </Block>
  );
};

export { News };
