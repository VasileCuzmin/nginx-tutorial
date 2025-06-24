FROM node:18
WORKDIR /app
COPY package*.json .
RUN npm install

COPY . .

EXPOSE 3000
CMD ["npm", "start"]
# The application will run on port 3000 
# and will be accessible at http://localhost:3000
# The application will be built and run in the /app directory
# The package.json and package-lock.json files are copied first
# to leverage Docker's caching mechanism for dependencies
# The rest of the application files are copied after installing dependencies