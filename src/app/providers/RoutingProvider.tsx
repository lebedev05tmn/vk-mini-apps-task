import { FC, PropsWithChildren } from "react";
import {
  RouterProvider,
  createHashRouter,
} from "@vkontakte/vk-mini-apps-router";
import { routes } from "pages/config";

const RoutingProvider: FC<PropsWithChildren> = ({ children }) => {
  const router = createHashRouter(routes);

  return <RouterProvider router={router}>{children}</RouterProvider>;
};

export { RoutingProvider };
