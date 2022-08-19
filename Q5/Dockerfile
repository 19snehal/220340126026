FROM node:alpine
WORKDIR /usr/diot/publisher
COPY publisher.js /usr/diot/publisher
COPY payload.json /usr/diot/publisher
RUN npm install mqtt
CMD ["node","publisher.js"]
