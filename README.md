# Тестовое задание VUE.JS от компании A2

## Требования к функционалу

- Все действия на сайте роисходят без перезагрузки страницы.
- После перезагрузки страницы отображаются измененные параметры.
- Авторизация реализована через сохранение в куки токена и айди юзера после логина. На каждой странице стоит самописный миддлвейр-гвард (/middleware/guard.js) который вызывается перед переходом на каждую страницу. Он проверяет наличие токена и айди, если все в порядке появляется доступ к страницам покрытым авторизацией, если нет, то происходит редирект на главную. При нажатии кнопки "выход" все куки и данные стираются.
- Запросы по API реализованы через экземпляр Axios который заинжечен в качества плагина (/plugins/requester.js). В самом плагине подтягиваются данные для базовых хедеров из файла .env. Токен указывается только для методов, в которых он необходим.
- Все заимодействие с данными реализовано через стейт-менеджер Vuex 4. Стор разделен на логические модули. '/store/...'


### Используемые библиотеки

- Nuxt 2.15
- TailwindCSS
- Nuxt User Agent
- Vue The Mask
- Vue Tippy
- Vue2 Toast

### Комментарии:
- Для большинства UI компонентов решил не использовать библиотеки из за трудностей кастомизации и подключения модулей к накст (описание плагинов и тд).
- Не знаю насколько нужно было делать похожей страницу на оригинал, тк информации об этом не было в задании, старался сделать похоже, но без фанатизма.
- Немного не понял что значит авторизация на стороне сервера, сделал простую проверку на наличие токена в миддлваре - фактически на накст-сервере. Решил не использовать модуль nuxt-auth потому что приложение небольшое.
- Ссылка на репозиторий https://github.com/zakharovda95/a2-test
- Ссылка на приложение 
- Затраченное время включая инициализацию проекта, настройку, описание readme и развертывание около 18 часов.
