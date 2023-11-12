### Stage 0: Installing dependencies

FROM nginx:1.25.3-alpine@sha256:db353d0f0c479c91bd15e01fc68ed0f33d9c4c52f3415e63332c3d0bf7a4bb77 AS dependencies

#Metadata
LABEL maintainer="Andrii Sych <asych@myseneca.ca>" \
      description="Fragments node.js front-end"

# Use /app as our working directory
WORKDIR /app

# Copy the package.json and package-lock.json
COPY --chown=nginx:nginx package.json package-lock.json ./

# Install node dependencies defined in package-lock.json
RUN npm ci --only=production

################################################################################################

### Stage 1: Building the server

FROM nginx:1.25.3-alpine@sha256:db353d0f0c479c91bd15e01fc68ed0f33d9c4c52f3415e63332c3d0bf7a4bb77 AS build

WORKDIR /app

# We default to use port 80 when using our service in production
ENV PORT=80 \
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

# Copy cached dependencies from previous stage so we don't have to download
COPY --from=dependencies \
     --chown=nginx:nginx /app /app

# Copy source code into the image
COPY --chown=nginx:nginx . .

USER nginx

# Build the serever
CMD ["npm", "run" "build"]

### Stage 2: Running server

FROM nginx:1.25.3-alpine@sha256:db353d0f0c479c91bd15e01fc68ed0f33d9c4c52f3415e63332c3d0bf7a4bb77 AS running

# Copy the package.json and package-lock.json
COPY --from=build \
     --chown=nginx:nginx /app/dist /usr/share/nginx/html

# We run our service on port 80
EXPOSE 5173

HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
  CMD curl --verbose --fail localhost:5173 || exit 1
