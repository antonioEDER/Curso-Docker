FROM node:10

RUN git clone https://github.com/antonioEDER/api-nodejs.git /myapp/

RUN cd /myapp && yarn install

RUN mkdir /usr/back

RUN cp -R /myapp/* /usr/back

RUN rm -rf /myapp

WORKDIR /usr/back

