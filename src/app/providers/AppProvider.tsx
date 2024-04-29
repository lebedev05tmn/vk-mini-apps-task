import { FC, PropsWithChildren } from "react";
import { ConfigProvider, AdaptivityProvider, AppRoot } from "@vkontakte/vkui";

const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>{children}</AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};

export { AppProvider };
