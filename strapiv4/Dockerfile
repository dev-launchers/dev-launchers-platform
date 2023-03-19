#syntax=docker/dockerfile:1.2
FROM strapi/base
WORKDIR /srv/app
COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm install
COPY config ./config
COPY public ./public
COPY src ./src
RUN npm run build
EXPOSE 1337
CMD ["npm", "run", "start"]
