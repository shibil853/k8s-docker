FROM node:lts
WORKDIR /usr/src/app
COPY ["package.json","package-lock.json","./"]
RUN npm install --silent
COPY . .
EXPOSE 3005
CMD ["npm","start"]