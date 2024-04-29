import { View, Panel } from "@vkontakte/vkui";
import { useActiveVkuiLocation } from "@vkontakte/vk-mini-apps-router";
import { RoutePanelNav, ROUTE_VIEW_NAV } from "shared/config";
import Main from "./Main";
import NotFound from "./NotFound";
import Details from "./Details";

const Routing = () => {
  const { panel: activePanel } = useActiveVkuiLocation();

  return (
    <View nav={ROUTE_VIEW_NAV} activePanel={activePanel || RoutePanelNav.MAIN}>
      <Panel nav={RoutePanelNav.MAIN}>
        <Main />
      </Panel>
      <Panel nav={RoutePanelNav.DETAILS}>
        <Details />
      </Panel>
      <Panel nav={RoutePanelNav.NOT_FOUND}>
        <NotFound />
      </Panel>
    </View>
  );
};

export default Routing;
