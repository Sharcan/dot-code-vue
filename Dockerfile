FROM node:lts-alpine as development

WORKDIR /usr/app
COPY package*.json ./

RUN npm install

COPY . .


FROM node:lts-alpine as production

RUN npm install -g http-server

WORKDIR /usr/app
COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080
CMD [ "http-server", "dist" ]