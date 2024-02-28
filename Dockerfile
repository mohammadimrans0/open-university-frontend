FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm config set registry https://registry.npmjs.org/
RUN npm config set fetch-retry-maxtimeout 600000  # 10 minutes timeout


RUN npm install

RUN npm run build

EXPOSE 4200

RUN ["chmod", "+x", "./entrypoint.sh"]

ENTRYPOINT [ "sh", "./entrypoint.sh" ]