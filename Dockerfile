FROM ubuntu 
LABEL maintainer="kumar.332@iitj.ac.in" 
RUN  apt-get -y update && apt-get -y install nginx
COPY config/default /etc/nginx/sites-available/default
COPY html /usr/share/nginx/html
EXPOSE 80
CMD ["/usr/sbin/nginx", "-g", "daemon off;"]