FROM node:12
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --production
COPY . .
RUN npm run build
CMD ["npm", "run", "start"]