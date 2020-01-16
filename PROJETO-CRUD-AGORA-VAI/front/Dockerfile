FROM node:latest
RUN mkdir -p /usr/src/front
WORKDIR /usr/src/front
COPY package.json /usr/src/front/
RUN yarn install
COPY . /usr/src/front
EXPOSE 8080
