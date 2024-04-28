import { FC } from "react";
import { AppRoot } from "@vkontakte/vkui";

// HOC поддержки Root

const withRoot: CallableFunction =
  (Component: FC): FC =>
  (): JSX.Element => {
    return (
      <AppRoot>
        <Component />
      </AppRoot>
    );
  };

export { withRoot };
