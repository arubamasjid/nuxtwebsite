# Use a specific Node.js version as the base image
FROM node:18

ENV NODE_ENV=production

# Set the working directory inside the container
WORKDIR /src

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose a port for the Nuxt.js application (if necessary)
EXPOSE 3000

# Define the command to start the Nuxt.js application
RUN npm run build
CMD ["node", ".output/server/index.mjs"]