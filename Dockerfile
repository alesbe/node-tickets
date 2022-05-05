FROM node:18-alpine

# Create workdir
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code to workdir
COPY . .

# Config server
WORKDIR ./server
ENV PORT=3000
EXPOSE 3000

# Start server
CMD [ "npm", "start" ]
