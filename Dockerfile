FROM nginx
MAINTAINER zt
VOLUME /tmp
COPY ./conf.d/simple-code-page.conf /etc/nginx/conf.d/
COPY dist /usr/share/nginx/dist

EXPOSE 8899
