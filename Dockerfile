FROM node:16

WORKDIR /usr/src/mern-stack

COPY  package*.json /usr/src/mern-stack/

RUN npm install

COPY  . .

EXPOSE 5000

CMD ["npm", "start"]
