FROM node:12
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --production
COPY . .
CMD ["npm", "run", "start"]