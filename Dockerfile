# Set the base image to Node.js LTS Alpine
FROM node:lts-alpine
ENV NODE_ENV production

# Bundle app source
WORKDIR /src/app
COPY . .

# Install app dependencies
RUN yarn install --prod

CMD [ "yarn", "prod" ]
