import { FC } from "react";
import { NewsListWithState } from "features/NewsListWithState";
import { UpdateButton } from "features/UpdateButton";
import { SplitCol } from "@vkontakte/vkui";

const MainList: FC = () => {
  return (
    <SplitCol>
      <UpdateButton />
      <NewsListWithState />
    </SplitCol>
  );
};

export { MainList };
