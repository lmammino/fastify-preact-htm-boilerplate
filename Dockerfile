FROM node:12-alpine

EXPOSE 3000

USER node

RUN cd /home/node/ && \
  mkdir /home/node/app

WORKDIR /home/node/app

COPY . /home/node/app

RUN npm install

CMD ["npm", "start"]
