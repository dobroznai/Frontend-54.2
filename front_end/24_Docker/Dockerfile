# OS: Linux, Alpine
# Node.js - чтобы запустить .js code
# Нам нужно саио приложение, т.е. в нашем случае index.js
# Нам нужна сама команда запускающая index.js файл - node index.js

# FROM - это команда, позволяющая описать, какое у нас будет окружения
# node - это установка node.js
# alpine - это ОC, дистрибутив Linux

FROM node:alpine
WORKDIR /app

# copy - копирует файлы из нвшей директории на РС в образ DOCKER, а именно в папку арр
# ./ - откуда
# ./ - куда (в папку арр созданную нами с помощью WORKDIR)
COPY ./ ./

CMD node index.js