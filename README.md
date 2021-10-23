***PR:*** https://github.com/AnastasiiaRyabchikova/middle.messenger.praktikum.yandex/pull/3

# Довекот / Голубятня

**Netlify:** https://determined-pare-26635e.netlify.app/

**Figma:** https://www.figma.com/file/plWTradeVJ4ur1v6IR8vq9/Chat-Y.Praktikum?node-id=0%3A1

Проект находится в разработке, но его уже можно потыкать

**Довекот** - очередной мессенджер, но этот с изюминкой
## Команды

- `npm install` — установка зависимостей;
- `npm run dev` - запуск проекта в режиме разработки;
- `npm run start` - сборка проекта, подготовка бандлов для выкладки;
- `npm run eslint` - проверка js на соответствие стайл гайду;
- `npm run stylelint` - проверка css на соответствие стайл гайду;
- `npm run compile` - компиляция проекта;
- `npm run test` - тестирование проекта;

## Реализованные страницы

- `/sign-in` - страница регистрации нового пользователя;
- `/` - авторизация;
- `/change-password` - страницы смены пароля;
- `/chats` - список чатов;
- `/user-form` - редактирование данных пользователя;
- `/user-500` - пример вывода страница с ошибкой 500;
Также есть страница выводящаяся, если не найден текущий путь с 404 ошибкой

## О проекте

В разработке проекта использован компонентный подход;

**Компонент** - объект, с шаблоном, передавая разные пропсы он может рендерить разную верстку
Для написания шаблонов использован самописный шаблонизатор `Templator`.

В проекте реализован простейший роутинг

Для компиляции стилей используется post-css
