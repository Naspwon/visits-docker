FROM node:14-alpine

WORKDIR /app/home

COPY package*.json /app/home/

RUN npm install

COPY . /app/home

CMD ["npm", "start"]