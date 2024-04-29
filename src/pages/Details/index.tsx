import { FC } from "react";
import { Panel } from "@vkontakte/vkui";
import { Layout } from "widgets/Layout";
import { RoutePanelNav } from "shared/config";

const Details: FC = () => {
  return (
    <Panel nav={RoutePanelNav.NOT_FOUND}>
      <Layout isMain={true}>
        <div>Details</div>
      </Layout>
    </Panel>
  );
};

export default Details;
