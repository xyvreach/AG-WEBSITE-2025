# Use the Node.js image (like a pre-built computer)
FROM node:18

# Set the folder inside the container where our code will go
WORKDIR /app

# Copy the package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the code
COPY . .

# Tell Docker which port to use
EXPOSE 5000

# Start the server when the container runs
CMD ["node", "server.js"]
