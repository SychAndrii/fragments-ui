# Build and serve fragments-ui with nginx

# Start with nginx on Debian
FROM nginx:stable

# Pick a version: 19, 18, 17, 16, 14, 12, lts, current, see:
# https://github.com/nodesource/distributions/blob/master/README.md#installation-instructions
ARG NODE_VERSION=16

SHELL ["/bin/bash", "-o", "pipefail", "-c"]


# Install node.js and a build toolchain via apt-get, cleaing up when done.
# See https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#run
# https://explainshell.com/explain?cmd=curl+-fsSL+https%3A%2F%2Fdeb.nodesource.com%2Fsetup_%24%7BNODE_VERSION%7D.x+%7C+bash+-
RUN curl -fsSL https://deb.nodesource.com/setup_${NODE_VERSION}.x | bash - && \
    apt-get update && \
    apt-get install -y --no-install-recommends \
    build-essential=12.4ubuntu1 \
    nodejs=10.19.0-1nodesource1 \
    && rm -rf /var/lib/apt/lists/*

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
COPY . .

# Install node dependencies defined in package.json and package-lock.json
RUN npm ci

# Run the parcel build in order to create ./dist, then
# copy all of the contents of dist/ to the location where
# nginx expects to find our HTML web content.  See
# https://explainshell.com/explain?cmd=cp+-a+.%2Fdist%2F.+%2Fusr%2Fshare%2Fnginx%2Fhtml%2F
RUN npm run build && \
    cp -a ./dist/. /usr/share/nginx/html/

# nginx will be running on port 80
EXPOSE 80