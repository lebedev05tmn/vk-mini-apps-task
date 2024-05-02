# Тестовое задание в команду Развитиx и поддержки мини-приложений экосистемы «Здоровье ВКонтакте»

## О проекте

Используемые технологии:

    - React
    - React-router-dom
    - VKUI
    - VK tunnel, VK Mini Apps deploy
    - TypeScript
    - Axios
    - Redux Toolkit, Redux Thunk
    - SCSS (CSS Modules)
    - Local Storage
    - VITE

Реализована архитектура: `Feature-Sliced-Design`

Проект развернут на vercel и доступен по ссылке: [vk.com/app51914500](https://vk.com/app51914500)

Для того, чтобы установить проект к себе на устройство, выполните команду:

```shell
git clone https://github.com/lebedev05tmn/vk-mini-apps-task.git
```

В каталоге проекта вы можете запустить приложение, выполнив команду:

```shell
yarn start
```

Перед первым запуском приложения установите зависимостиы, выполнив команду:

```shell
yarn
```

Откройте [https://localhost:3000](https://localhost:3000), чтобы просмотреть его в браузере.

Страница будет перезагружена, если вы внесете изменения.\
Вы также увидите все ошибки lint в консоли.

```shell
yarn lint
```

Запускает lint тесты.

```shell
yarn build
```

Создает приложение для рабочей среды в папке "dist".\
Это корректно объединяет React в рабочем режиме и оптимизирует сборку для достижения наилучшей производительности.

Сборка сокращена, а имена файлов содержат хэши.
