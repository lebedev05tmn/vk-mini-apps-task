import { FC } from "react";
import { withConfig } from "./providers/withConfig";
import { withAdaptivity } from "./providers/withAdaptivity";
import { withRoot } from "./providers/withRoot";
import Routing from "pages";
import "@vkontakte/vkui/dist/vkui.css";

const App: FC = () => {
  return withConfig(withAdaptivity(withRoot(Routing)))();
};

export default App;
