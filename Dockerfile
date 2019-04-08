FROM node:alpine as builder
WORKDIR /app
RUN npm i -g @angular/cli
COPY ./package.json ./package.json
RUN npm install
COPY ./ ./
RUN npm run build

FROM nginx
EXPOSE 80
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist/todo /usr/share/nginx/html   

