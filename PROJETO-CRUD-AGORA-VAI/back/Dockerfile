FROM node:latest
RUN mkdir -p /usr/src/back
WORKDIR /usr/src/back
COPY package.json /usr/src/back/
RUN yarn install
COPY . /usr/src/back
EXPOSE 8080
