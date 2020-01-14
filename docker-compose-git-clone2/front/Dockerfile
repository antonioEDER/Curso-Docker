FROM fholzer/nginx-brotli

#EXPOSE 80

RUN apk add git

RUN git clone https://github.com/antonioEDER/helloWorld-teste.git /myapp/
RUN cp -R /myapp/* /usr/share/nginx/html/
RUN chmod -R 777 /usr/share/nginx/html/

WORKDIR /usr/share/nginx/html
