import { FC } from "react";
import { Panel } from "@vkontakte/vkui";
import { Layout } from "widgets/Layout";
import { RoutePanelNav } from "shared/config";
import { News } from "widgets/News";

const Details: FC = () => {
  return (
    <Panel nav={RoutePanelNav.NOT_FOUND}>
      <Layout>
        <News />
      </Layout>
    </Panel>
  );
};

export default Details;
