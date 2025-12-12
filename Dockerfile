# 1. Use a stable Node.js Alpine image (lightweight and fast)
FROM node:18-alpine

# 2. Set the working directory inside the container
WORKDIR /app

# 3. Copy package files first 
# This leverages Docker caching to speed up future builds
COPY package*.json ./

# 4. Install dependencies (using --legacy-peer-deps to avoid the error we saw earlier)
RUN npm install --legacy-peer-deps

# 5. Copy the rest of the source code
COPY . .

# 6. Pre-compile the contracts to ensure everything is ready
RUN npx hardhat compile

# 7. The default command to run when the container starts
CMD ["npx", "hardhat", "test"]