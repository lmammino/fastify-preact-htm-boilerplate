FROM node:11-alpine

WORKDIR /app
COPY . /app
RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
