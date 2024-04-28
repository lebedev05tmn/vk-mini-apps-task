import { FC } from "react";
import { ConfigProvider } from "@vkontakte/vkui";

// HOC с поддержкой конфига vkui

const withConfig: CallableFunction =
  (Component: FC): FC =>
  (): JSX.Element => {
    return (
      <ConfigProvider>
        <Component />
      </ConfigProvider>
    );
  };

export { withConfig };
