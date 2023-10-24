# SODV2201_Bowspace
Course Project of SODV2201 (Web Programming)

# Instalation
From the `root` of the project:
- run `'npm install'` to install backend **node_modules** from **package.json**.
- move to the `client` folder by running `'cd client'`
- run `'npm install'` to install frontend **node_modules** from **client/package.json**.

# Run Backend
## Json-server
From the `root` of the project, run `'npm run json-server'` to run json-server.

**json-server** should be using port number 8000.

json-server will be reading from **server/data/db.json**.

## Node
From the `root` of the project (in a different terminal than the one running the json-server) run `'node server/index.js'`.

**Node** should be using port number 8080.

# Run Frontend
## React
From the `root` of the project (in a different terminal than the one running the backend):
- move to the `client` folder by running `'cd client'`
- run `'npm start'` to execute the react-scripts

**React** should be using port 3000.