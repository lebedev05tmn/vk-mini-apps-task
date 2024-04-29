import { FC } from "react";
import { AppProvider, RoutingProvider, ReduxProvider } from "./providers";
import Routing from "pages";
import "@vkontakte/vkui/dist/vkui.css";

const App: FC = () => {
  return (
    <AppProvider>
      <RoutingProvider>
        <ReduxProvider>
          <Routing />
        </ReduxProvider>
      </RoutingProvider>
    </AppProvider>
  );
};

export default App;
