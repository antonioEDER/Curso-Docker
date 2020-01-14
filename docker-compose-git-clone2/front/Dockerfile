FROM fholzer/nginx-brotli

RUN apk add git

RUN git clone https://github.com/antonioEDER/helloWorld-teste.git /myapp/

RUN cp -R /myapp/* /usr/share/nginx/html/

RUN rm -rf /myapp

WORKDIR /usr/share/nginx/html
