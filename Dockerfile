FROM node:18-alpine

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy configuration files
COPY tailwind.config.js ./

# Copy source files
COPY src ./src
COPY *.html ./
COPY *.js ./

# Build CSS
RUN npm run build

# Create dist directory if it doesn't exist
RUN mkdir -p dist

# Expose port for the app
EXPOSE 4343

# Start the http-server
CMD ["npm", "run", "start:prod"] 