FROM node:20.10.0-alpine
WORKDIR /coffee-blog-web

# Copy the package.json file to the container and install fresh node_modules

COPY package.json tsconfig*.json package-lock.json /coffee-blog-web/

RUN npm install

# Copy the rest of the application source code to the container

COPY . /coffee-blog-web

# Transpile typescript and bundle the project

# RUN npm run build
EXPOSE 3000
