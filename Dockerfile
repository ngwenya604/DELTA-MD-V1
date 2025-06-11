FROM node:lts-buster

# Clone the repository into /root/DELTA-MD-V1
RUN git clone https://github.com/Frontier-Lord200/DELTA-MD-V1.git /root/DELTA-MD-V1

# Set working directory
WORKDIR /root/DELTA-MD-V1

# Install dependencies
RUN npm install && npm install -g pm2 || yarn install --network-concurrency 1

# Expose port
EXPOSE 9090

# Start the bot
CMD ["npm", "start"]
