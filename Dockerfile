# Step 1: Build the application using Node.js
FROM node:21-alpine as build
WORKDIR /app

# Install pnpm and dependencies
RUN npm install -g pnpm



COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .

# Build the project
RUN pnpm build

# Step 2: Setup NGINX
FROM nginx:stable-alpine AS runtime
ENV TZ=Asia/Bangkok

# Set the timezone
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Copy built assets from the build stage to the NGINX server
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8000

CMD ["nginx", "-g", "daemon off;"]
