import { FC, PropsWithChildren } from "react";
import { ILayout } from "shared/interfaces";
import { Header } from "shared/ui";
import { SplitLayout } from "@vkontakte/vkui";
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";

const Layout: FC<PropsWithChildren<ILayout>> = ({ children, isMain }) => {
  const routeNavigator = useRouteNavigator();

  const handleBack = () => {
    routeNavigator.back();
  };

  return (
    <>
      <Header isMain={isMain} onBackClick={handleBack}>
        Новости
      </Header>
      <SplitLayout>{children}</SplitLayout>
    </>
  );
};

export { Layout };
