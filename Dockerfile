FROM ubuntu:latest
RUN apt-get update
RUN apt-get install -y curl
RUN curl -fsSL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install -y nodejs
WORKDIR /var/www
COPY package.json /var/www/package.json
CMD npm install
COPY . /var/www
EXPOSE 3000
CMD npm run start