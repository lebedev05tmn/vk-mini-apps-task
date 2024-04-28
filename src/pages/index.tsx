import {
  RouteWithRoot,
  createHashRouter,
} from "@vkontakte/vk-mini-apps-router";

// Массив объектов, указывающих маршруты
const routes: RouteWithRoot[] = [
  {
    path: "/", // Путь
    panel: "home_panel", // Желаемый Panel
    view: "default_view", // Желаемый View
    root: "default_root", // Желаемый Root
  },
  {
    path: `/user`,
    modal: "user_modal", // Модальное окно
    panel: "home_panel",
    view: "default_view",
    root: "default_root",
  },
  {
    path: `/persik/:emotion`,
    tab: "emotion_tab", // Tab
    panel: "persik_panel",
    view: "default_view",
    root: "default_root",
  },
  // Другие маршруты...
];

const router = createHashRouter(routes);

const Routing = () => {
  console.log(router);
  return <div>Hello world!!!</div>;
};

export default Routing;
