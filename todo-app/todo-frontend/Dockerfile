FROM node:20 AS build-stage
WORKDIR /usr/src/app

ENV VITE_BACKEND_URL=http://localhost:8080/api/

COPY . .

RUN npm ci
RUN npm run build
RUN npm run test

FROM nginx:1.25-alpine
COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html