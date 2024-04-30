import { FC } from "react";
import { NewsListWithState } from "features/NewsListWithState";
import { UpdateButton } from "features/UpdateButton";
import { Block } from "shared/ui";

const MainList: FC = () => {
  return (
    <Block>
      <UpdateButton />
      <NewsListWithState />
    </Block>
  );
};

export { MainList };
