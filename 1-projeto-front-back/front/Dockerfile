FROM hoosin/alpine-nginx-nodejs:latest

RUN apk add git

RUN git clone https://github.com/antonioEDER/helloWorld-teste.git /myapp/

RUN cd /myapp && yarn install && yarn build

RUN cp -R /myapp/dist/* /usr/share/nginx/html/

RUN rm -rf /myapp

WORKDIR /usr/share/nginx/html
