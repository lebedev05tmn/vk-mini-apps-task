import { RouteWithoutRoot } from "@vkontakte/vk-mini-apps-router";
import { AppRoute, ROUTE_VIEW_NAV, RoutePanelNav } from "shared/config";

export const routes: RouteWithoutRoot[] = [
  {
    path: AppRoute.MAIN,
    panel: RoutePanelNav.MAIN,
    view: ROUTE_VIEW_NAV,
  },
  {
    path: `${AppRoute.DETAILS}:id`,
    panel: RoutePanelNav.DETAILS,
    view: ROUTE_VIEW_NAV,
  },
  {
    path: AppRoute.NOT_FOUND,
    panel: RoutePanelNav.NOT_FOUND,
    view: ROUTE_VIEW_NAV,
  },
];
