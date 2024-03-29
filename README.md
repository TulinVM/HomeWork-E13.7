Это домашнее задание для блока Е13.
1.	Установить и настроить webpack-dev-server.
2.	Настроить hot module replacement.
3.	Сделать возможность запуска на разных окружениях (dev, prod) c разной конфигурацией (например, убрать HMR на проде).
4.	Настроить JSON-server и отображать полученные с него данные.
5.	Добавить запуск линтера при комите.

В проекте реализовано следующее 
- настроен webpack.config для разработки/производства;
- установлен Хаски (проверка перед коммитом);
- установлен JSON-сервер;
- установлен Eslint;

Также есть два разных выходных каталога для двух режимов (dev/prod).

Перед началом:
- запустите «npm install» на терминале для требуемой среды;
- список команд в package.json.
 1. для компиляции приложения:
"build": "webpack --config webpack.config.dev.js",
"final-build": "webpack --config webpack.config.prod.js",
2. для отдельного запуска webpack -сервера (зависит от конфига)
"start-dev": "webpackserve --config webpack.config.dev.js",
"start-prod": "webpackserve --config webpack.config.prod.js",
3. для проверки ошибок
"lint": "eslint  --eslintrc.js",
4. для запуска json-сервера
"json": "json-server --watch database.json",
5. для установки husky
"prepare": "husky"
