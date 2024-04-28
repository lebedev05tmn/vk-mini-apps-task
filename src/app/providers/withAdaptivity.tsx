import { FC } from "react";
import { AdaptivityProvider } from "@vkontakte/vkui";

// HOC с поддержкой адаптива vkui

const withAdaptivity: CallableFunction =
  (Component: FC): FC =>
  (): JSX.Element => {
    return (
      <AdaptivityProvider>
        <Component />
      </AdaptivityProvider>
    );
  };

export { withAdaptivity };
