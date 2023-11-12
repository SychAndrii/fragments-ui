#Stage 0: Dependencies
FROM node:21-alpine3.17@sha256:c8e4f0ad53631bbf60449e394a33c5b8b091343a8702bd03615c7c13ae4c445d AS dependencies

#Metadata
LABEL maintainer="Andrii Sych <asych@myseneca.ca>" \
      description="Fragments node.js front-end"

WORKDIR /app

# Copy the package.json and package-lock.json
COPY --chown=nginx:nginx package.json package-lock.json ./

# Install node dependencies defined in package-lock.json
RUN npm ci --only=production

#Stage 1: Build
FROM node:21-alpine3.17@sha256:c8e4f0ad53631bbf60449e394a33c5b8b091343a8702bd03615c7c13ae4c445d AS build

WORKDIR /app

# Copy over the node modules from the dependencies stage
COPY --from=dependencies /app/node_modules ./node_modules

# Copy source code into the image
COPY --chown=nginx:nginx . .

# Build the server
RUN npm run build

# Stage 2: Running
FROM nginx:1.25.3-alpine@sha256:db353d0f0c479c91bd15e01fc68ed0f33d9c4c52f3415e63332c3d0bf7a4bb77 as running

WORKDIR /app

ENV PORT=5173 \
    NODE_ENV=production \
    NPM_CONFIG_LOGLEVEL=warn \
    NPM_CONFIG_COLOR=false \
    VITE_URL=http://ec2-52-207-17-128.compute-1.amazonaws.com:8080 \
    VITE_API_URL=http://ec2-52-207-17-128.compute-1.amazonaws.com:8080/v1 \
    VITE_AWS_COGNITO_POOL_ID=us-east-1_gMqT5XCbL \
    VITE_AWS_COGNITO_CLIENT_ID=37rrps2erls3dfstt70c9i59n9 \
    VITE_AWS_COGNITO_HOSTED_UI_DOMAIN=asych-fragments.auth.us-east-1.amazoncognito.com \
    VITE_OAUTH_SIGN_IN_REDIRECT_URL=http://localhost:5173 \
    VITE_OAUTH_SIGN_OUT_REDIRECT_URL=http://localhost:5173

# Use /usr/local/src/fragments-ui as our working directory
WORKDIR /usr/local/src/fragments-ui

# Copy all of our source in
COPY --from=build . .

RUN cp -a ./dist/. /usr/share/nginx/html/

# nginx will be running on port 80
EXPOSE 80